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

var content = [];
addTextNode(dataJson);
    
queryInput.oninput = doSearch;

function doSearch() {
    matchesElement.textContent = '';
    
    currentPage = 0;

    const query = queryInput.value;
    
    matches = window.matches = index.search(query, SEARCH_OPTIONS);
    
    $('.web_search-marker').contents().unwrap();

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
    
    Object.keys(matches).forEach(function (arrayItem) {
        matches[arrayItem].position = dataJson['#' + matches[arrayItem].ref.split('#')[1]][matches[arrayItem].ref].node;
    });
    
    matches.sort(function (a, b) {
        return a.position - b.position;
    });

    displayMatchInContent(0, 60, true);
}

function uniqBy(a, key) {
    var seen = {};
    return a.filter(function(item) {
        var k = key(item);
        return seen.hasOwnProperty(k) ? false : (seen[k] = true);
    })
}

function displayMatchInContent(startCpt, maxCpt, result){
    
    var matchSet = [];
    var resultContent = '';
    
    var cpt = 0;
    var totalMatch = 0;

    Object.keys(matches).forEach(function (arrayItem) {
        var textNodeId = matches[arrayItem].ref;
        
        var textMarked = document.getElementById(textNodeId);
        var displayTextContent = textMarked.innerText;
        var offset = 0;        
        if(displayTextContent.substr(0,1) == " "){
            offset = 1;
        }

        var posArray = [];
        
        
        Object.keys(matches[arrayItem].matchData.metadata).forEach(function (metadata) {
            Object.keys(matches[arrayItem].matchData.metadata[metadata]['text'].position).forEach(function (position) {
                posArray.push(
                    [matches[arrayItem].matchData.metadata[metadata]['text'].position[position][0] + offset, matches[arrayItem].matchData.metadata[metadata]['text'].position[position][1],matches[arrayItem].ref]
                );
            });
        });
        
        posArray.sort(function (a, b) {
          return a[0] - b[0];
        });
        
        var posArray = uniqBy(posArray, JSON.stringify);
        
        matchSet.push(
            [textNodeId, posArray]
        );
            
        totalMatch = totalMatch + posArray.length;

        if(cpt < maxCpt){
            var startString = 0;
            
            var htmlContent = '';
            Object.keys(posArray).forEach(function (node) {
                cpt = cpt + 1;
                
                //Build result
                var matchStart = posArray[node][0];
                var matchLength = posArray[node][1];
            
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
    
                resultContent = resultContent + "<div class=\"web_match\" onclick=\"showProductInfo('" + textNodeId + "')\">" + textStartFullStop + MatchFormattedBefore + "<span class='web_search-marker'>" + MatchFormatted + "</span>" + MatchFormattedAfter + textEndFullStop + "</div>";
                
                
                //Build match in content
                var MatchFormattedBeforeContent = displayTextContent.substring(startString, matchStart);
                var MatchFormattedContent = displayTextContent.substring(matchStart, matchStart + matchLength);
                
                htmlContent = htmlContent + MatchFormattedBeforeContent + "<span class='web_search-marker'>" + MatchFormattedContent + "</span>";
                
                startString = matchStart + matchLength;
                
            });
            
            var MatchFormattedAfterContent = displayTextContent.substring(startString);  
            textMarked.innerHTML = htmlContent + MatchFormattedAfterContent;
        }

        
    });
    
      if (cpt < totalMatch) {
        resultContent = "<div class=\"web_count-match\" onclick=\"displayMatchInContent(" + "0" + "," + "100000" + ",false)\"><span class=\"web_counter-match\">" + cpt + '/' + totalMatch + " matches</span>" + '<span class="web_match-show-all">Show all</span>' + "</div>" + resultContent;
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

function addTextNode(array) {
    
    var cpt = 0;
    Object.keys(array).forEach(function (match) {
        Object.keys(array[match]).forEach(function (textNode) {
            var id = textNode.split('#')[1];
            var anchor = match;
            var textnodeId = array[match][textNode].position;
            
            paraNode = document.getElementById(id);
            
            var node=paraNode.parentNode;
            
            var textN = textNodesUnder(node);
            
            var spanMarked = document.createElement("span");
            spanMarked.setAttribute("class", "web_search-marked");
            spanMarked.setAttribute("id", textNode);
            
            textN[textnodeId - 1].parentNode.insertBefore(spanMarked, textN[textnodeId - 1]);
        
            var displayTextContent = textN[textnodeId - 1].nodeValue;
            
            spanMarked.appendChild(textN[textnodeId - 1]);
        });
    });
}

function showProductInfo(id) {
    var rid = id.lastIndexOf('#');
    var result = id.substring(rid);
    window.location.href = htmlPath + result;
    return false;
}

