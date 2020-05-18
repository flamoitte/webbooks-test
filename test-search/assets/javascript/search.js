const htmlPath = document.getElementById("currentpath").getAttribute("data-path");
const matchesElement = document.getElementById('matches');
const queryInput = document.getElementById('query');

const MATCHES_PER_PAGE = 150;
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
request.open("GET",htmlPath + "images/data/index.json", false);
request.send(null);
var documents = JSON.parse(request.responseText);

var request2 = new XMLHttpRequest();
request2.open("GET",htmlPath + "images/data/data.json", false);
request2.send(null);
var dataJson = JSON.parse(request2.responseText);


var theStemmer = function theStemmer(searchTerm) {
  return stemWord(searchTerm);
}

// register the pipeline function

lunr.Pipeline.registerFunction(theStemmer, 'theStemmer')

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
    $('.web_search-marked').each(function() {
        var dataStr = $(this).attr('data-string');
        $(this).html(dataStr);
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

  // find index for first and last match to appear on the current page
  var startIndex = currentPage * MATCHES_PER_PAGE;
  var endIndex = Math.min((currentPage + 1) * MATCHES_PER_PAGE,
    matches.length);

  console.log(matches);

  for (let i = startIndex; i !== endIndex; ++i) {
    addMatch(matches[i]);
  }
  
  displayMatchInContent(matches);

}

function uniqueByKeepLast(data, key) {
    
    return [
        ...new Map(
            data.map(x => [key(x),x])
        ).values()
    ]
}

function displayMatchInContent(matches){

    $( ".web_search-marked" ).each(function( index ) {
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
                    [matches[matchInd].matchData.metadata[arrayItem]['text'].position[position][0], matches[matchInd].matchData.metadata[arrayItem]['text'].position[position][1],arrayItem]
                );
            });
        });
        
        var newPosArray = posArray.sort(function(a,b){
            retVal=0;
            if(a[0]!=b[0]) retVal=a[0]>b[0]?1:-1;
            else if(a[1]!=b[1]) retVal=a[1]>b[1]?1:-1;
            else if(a[2]!=b[2]) retVal=a[2]>b[2]?1:-1;
            return retVal
        });
        
        var newPosArrayNoDup = uniqueByKeepLast(newPosArray, it => it[0]);
        
        var textMarked = document.getElementById(id);
        var startString = 0;
        
        var displayTextContent = textMarked.innerText;
        
        textMarked.innerText = '';
        
        
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
        
            matchElement.appendChild(document.createTextNode(textStartFullStop));
            matchElement.appendChild(document.createTextNode(MatchFormattedBefore));
        
            var displayMatchElem = document.createElement("span");
            displayMatchElem.setAttribute("class", "web_search-marker");
            displayMatchElem.innerHTML = MatchFormatted;
            
            matchElement.appendChild(displayMatchElem);
            
            matchElement.appendChild(document.createTextNode(MatchFormattedAfter));
            matchElement.appendChild(document.createTextNode(textEndFullStop));
            matchElement.onclick = showProductInfo.bind(id);
            matchesElement.appendChild(matchElement);


            //Build match in content
            var matchStart = newPosArrayNoDup[arrayItem][0];
            var matchLength = newPosArrayNoDup[arrayItem][1];

            var MatchFormattedBeforeContent = displayTextContent.substring(startString, matchStart);
            var MatchFormattedContent = displayTextContent.substring(matchStart, matchStart + matchLength);
        
            textMarked.appendChild((document.createTextNode(MatchFormattedBeforeContent)));
        
            var displayMatchElemContent = document.createElement("span");
            displayMatchElemContent.setAttribute("class", "web_search-marker");
            displayMatchElemContent.innerHTML = MatchFormattedContent;
            
            textMarked.appendChild(displayMatchElemContent);
            startString = matchStart + matchLength;

        });

        var MatchFormattedAfterContent = displayTextContent.substring(startString);    
        textMarked.appendChild(document.createTextNode(MatchFormattedAfterContent));
        
    });

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

function addMatch(match) {
    var id = match.ref.split('#')[1];
    var anchor = '#' + id;
    var textnodeId = dataJson[anchor][match.ref].position;
    
    paraNode = document.getElementById(id);
    
    var n = match.ref.lastIndexOf('#');
    var result = match.ref.substring(n + 1);
    
    var cpt = 0;
    var node=paraNode.parentNode;
    
    var textN = textNodesUnder(node);

    var posArray = [];

    var startString = 0;

    var spanMarked = document.createElement("span");
    spanMarked.setAttribute("class", "web_search-marked");
    spanMarked.setAttribute("id", match.ref);

    var textNodeClone = textN[textnodeId - 1].cloneNode(true);
    textN[textnodeId - 1].parentNode.insertBefore(spanMarked, textN[textnodeId - 1]);

    var displayTextContent = textNodeClone.nodeValue;
    spanMarked.setAttribute("data-string", displayTextContent);
    
    spanMarked.appendChild((document.createTextNode(displayTextContent)));

    textN[textnodeId - 1].remove();

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

function showProductInfo() {
    var n = this.lastIndexOf('#');
    var result = this.substring(n);
    
    window.location.href = htmlPath + result;
    return false;
}

