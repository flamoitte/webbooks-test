const htmlPath = document.getElementById("currentpath").getAttribute("data-path");
const matchesElement = document.getElementById('matches');
const queryInput = document.getElementById('query');

const MATCHES_PER_PAGE = 30;
const CHAR_DIPLAYED_SEARCH = 150;
const SEARCH_OPTIONS = {
  fields: {
    text: {boost: 1}
  },
  expand: true
};

var currentPage = 0;
var index;
var matches;

var request = new XMLHttpRequest();
request.open("GET",htmlPath + "assets/data/index.json", false);
request.send(null);
var documents = JSON.parse(request.responseText);

var request2 = new XMLHttpRequest();
request2.open("GET",htmlPath + "assets/data/data.json", false);
request2.send(null);
var dataJson = JSON.parse(request2.responseText);


/*var theStemmer = function theStemmer(searchTerm) {
  return stemWord(searchTerm);
}

// register the pipeline function

lunr.Pipeline.registerFunction(theStemmer, 'theStemmer')*/

var index = lunr(function () {
    this.ref('name')
    this.field('text')
    this.metadataWhitelist = ['position']

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});

queryInput.oninput = doSearch;

function doSearch() {
    matchesElement.textContent = '';
    
    currentPage = 0;

    const query = queryInput.value;
    
    matches = window.matches = index.search(query, SEARCH_OPTIONS);
    
    $('.web_search-marker').contents().unwrap();
    $('.web_search-marked').html(function(i, html) {
       return html;
    });
    $('.web_search-marked').contents().unwrap();

    if (matches.length === 0) {
        return;
    } else {
        showMatches();
    }
}

function showMatches() {
    matchesElement.textContent = '';
    
    var startIndex = 0;
    var endIndex = matches.length;
    
    addMatch(matches);
    
    displayMatchInContent(0, 50, true);
}

/*function uniqueByKeepLast(data, key) {
    
    return [
        ...new Map(
            data.map(x => [key(x),x])
        ).values()
    ]
}*/

function uniqByKeepFirst(a, key) {
    let seen = new Set();
    return a.filter(item => {
        let k = key(item);
        return seen.has(k) ? false : seen.add(k);
    });
}


function displayMatchInContent(startCpt, maxCpt, result){

    if(result == true){
        var resultContent = '';
    }else{
        $('.web_count-match').remove();
        var resultContent = $('#matches').html();
    }
    
    var cpt = startCpt;

    $( ".web_search-marked-tbd" ).each(function( index ) {
        if(cpt < maxCpt){
            var offset = 0;
            if($(this).text().startsWith(" ")){
                offset = 1;
            }
            
            var posArray = [];
    
            var id = $(this).attr('id');
            
            var matchInd = matches.findIndex(function(item, i){
                return item.ref === id
            });
            
            Object.keys(matches[matchInd].matchData.metadata).forEach(function (arrayItem) {
                var matchStart = matches[matchInd].matchData.metadata[arrayItem]['text'].position[0][0];
                var matchLength = matches[matchInd].matchData.metadata[arrayItem]['text'].position[0][1];
                
                Object.keys(matches[matchInd].matchData.metadata[arrayItem]['text'].position).forEach(function (position) {
                    posArray.push(
                        [matches[matchInd].matchData.metadata[arrayItem]['text'].position[position][0] + offset, matches[matchInd].matchData.metadata[arrayItem]['text'].position[position][1],arrayItem]
                    );
                    cpt = cpt + 1;
                });
            });
            
            
            var newPosArray = posArray.sort(function(a,b){
                retVal=0;
                if(a[0]!=b[0]) retVal=a[0]>b[0]?1:-1;
                else if(a[1]!=b[1]) retVal=a[1]>b[1]?1:-1;
                else if(a[2]!=b[2]) retVal=a[2]>b[2]?1:-1;
                return retVal
            });
            
            var newPosArrayNoDup = uniqByKeepFirst(newPosArray, it => it[0]);
            
            var textMarked = document.getElementById(id);
            var startString = 0;
            
            var displayTextContent = textMarked.innerText;
            
            textMarked.innerText = '';
            
            var htmlContent = '';
            
            Object.keys(newPosArrayNoDup).forEach(function (arrayItem) {
    
                //Build result
                var matchElement = document.createElement('div');
                matchElement.classList.add('web_match');
        
                var matchStart = newPosArrayNoDup[arrayItem][0];
                var matchLength = newPosArrayNoDup[arrayItem][1];
            
                var textLenght = displayTextContent.length;
                
                if(matchStart > Math.round(CHAR_DIPLAYED_SEARCH / 2) + 1){
                    var textStart = matchStart - Math.round(CHAR_DIPLAYED_SEARCH / 2);
                    var textStartFullStop = '...';
                }else{
                    var textStart = 0;
                    var textStartFullStop = '';
                }
                
                if(textLenght > matchStart + matchLength + Math.round(CHAR_DIPLAYED_SEARCH / 2)){
                    var textEnd = matchStart + matchLength + Math.round(CHAR_DIPLAYED_SEARCH / 2);
                    var textEndFullStop = '...';
                }else{
                    var textEnd = textLenght;
                    var textEndFullStop = '';
                }
                
                var displayText = displayTextContent.substring(textStart, textEnd);
                
                var displayTextStart = matchStart - textStart;
            
                var MatchFormattedBefore = displayText.substring(0, displayTextStart);
                var MatchFormatted = displayText.substring(displayTextStart, displayTextStart + matchLength);
                var MatchFormattedAfter = displayText.substring(displayTextStart + matchLength);
    
                resultContent = resultContent + `<div class="web_match" onclick="showProductInfo('` + id + `')">` + textStartFullStop + MatchFormattedBefore + "<span class='web_search-marker'>" + MatchFormatted + "</span>" + MatchFormattedAfter + textEndFullStop + "</div>";
    
    
    
                //Build match in content
                var matchStart = newPosArrayNoDup[arrayItem][0];
                var matchLength = newPosArrayNoDup[arrayItem][1];
    
                var MatchFormattedBeforeContent = displayTextContent.substring(startString, matchStart);
                var MatchFormattedContent = displayTextContent.substring(matchStart, matchStart + matchLength);
                
                htmlContent = htmlContent + MatchFormattedBeforeContent + "<span class='web_search-marker'>" + MatchFormattedContent + "</span>";
                
                startString = matchStart + matchLength;
    
            });
    
            var MatchFormattedAfterContent = displayTextContent.substring(startString);    
            $(this).html(htmlContent + MatchFormattedAfterContent);
            $(this).toggleClass('web_search-marked-tbd');
        }

    });
    
    if ($(".web_search-marked-tbd")[0]){
        var matchCount = 0;
        
        resultStamp = resultContent;
        resultContent = `<div class="web_count-match" onclick="displayMatchInContent(` + startCpt + `,` + `100000` + `,false)"><span class="web_counter-match">` + cpt + '/' + $('#matches').attr( "data-counter" ) + ` matches</span>` + '<span class="web_match-show-all">Show all</span>' + "</div>" + resultContent;
    }

    $('#matches').html(resultContent);

}

function textNodesUnder(node){
  var all = [];
  for (node=node.firstChild;node;node=node.nextSibling){
    if (node.nodeType==3) {
        all.push(node);
    }
    else {
        all = all.concat(textNodesUnder(node));
    }
  }
  return all;
}

function addMatch(array) {

    var counter = 0;
    $('#matches').attr( "data-counter", counter );

    Object.keys(array).forEach(function (match) {
        var id = array[match].ref.split('#')[1];
        var anchor = '#' + id;
        var textnodeId = dataJson[anchor][array[match].ref].position;
        
        paraNode = document.getElementById(id);
        
        var node=paraNode.parentNode;
        
        var textN = textNodesUnder(node);
    
        var cpt = 0;
    
        Object.keys(array[match].matchData.metadata).forEach(function (arrayItem) {
            Object.keys(array[match].matchData.metadata[arrayItem]['text'].position).forEach(function (position) {
                cpt = cpt + 1;
            });
        });
    
        var spanMarked = document.createElement("span");
        spanMarked.setAttribute("class", "web_search-marked web_search-marked-tbd");
        spanMarked.setAttribute("id", array[match].ref);
        spanMarked.setAttribute("data-count", cpt);
    
        textN[textnodeId - 1].parentNode.insertBefore(spanMarked, textN[textnodeId - 1]);
    
        var displayTextContent = textN[textnodeId - 1].nodeValue;
        
        spanMarked.appendChild(textN[textnodeId - 1]);
        
        counter = counter + cpt;
    });
    
    $('#matches').attr( "data-counter", counter );
}

var getTextNodesIn = function(el) {
    return $(el).find(":not(iframe)").addBack().contents().filter(function() {
        return this.nodeType == 3;
        return this;
    });
};

function textNodesUnder(el){
    var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
    while(n=walk.nextNode()) a.push(n);
    return a;
}

function showProductInfo(id) {
    var rid = id.lastIndexOf('#');
    var result = id.substring(rid);
    window.location.href = htmlPath + result;
    return false;
}

