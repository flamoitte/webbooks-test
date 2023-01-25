const rootPath = document.getElementById("currentpath").getAttribute("data-rootPath");
const filePath = document.getElementById("currentpath").getAttribute("data-filePath");
const htmlLang = document.getElementsByTagName("html")[0].getAttribute("lang");
const matchesElement = document.getElementById('matchesResult');
const searchInput = document.getElementById('searchInput');

const CHAR_DIPLAYED_SEARCH = 150;
const SEARCH_OPTIONS = {
  fields: {
    text: {boost: 1}
  },
  expand: true
};

var index;
var matches;

var request = new XMLHttpRequest();
request.open("GET",rootPath + "assets/data/index.json", false);
request.send(null);
var documents = JSON.parse(request.responseText);

var request2 = new XMLHttpRequest();
request2.open("GET",rootPath + "assets/data/data.json", false);
request2.send(null);
var dataJson = JSON.parse(request2.responseText);


// Observe if the page is translated by chrome and disable the search consequently    
var observer = new MutationObserver(function (event) {
    if(document.documentElement.className.match('translated')) {
        searchInput.value = '';
        clearSearch()
        $(".dc-search-ul").hide();
    } else {
        $(".dc-search-ul").show();
    }
});

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['class'],
  childList: false,
  characterData: false
});

var lunrLang = "lunr." + htmlLang;

// Get index by lunr
var index = lunr(function () {
    if(typeof eval(lunrLang) !== 'undefined'){
        this.use(eval(lunrLang))
    }
    this.ref('name')
    this.field('text')
    this.metadataWhitelist = ['position']

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});

var content = [];
addTextNode(dataJson);

const windowLocation = window.location.search;
const windowLocationParams = new URLSearchParams(windowLocation);
const termSearched = windowLocationParams.get('search');
searchInput.value = termSearched;

var st = $('#searchInput').val();

if (st.length === 0) {
    clearSearch();
} else {
    doSearch();
}

window.history.replaceState({}, document.title, window.location.origin + window.location.pathname + window.location.hash);

var idxHash = windowLocation.indexOf("#");
var hash = windowLocation.substring(idxHash);

if($("#matches").length > 0){
    $('#matches').animate({
        scrollTop: $("#matches a[href='" + window.location.hash + "']").offset().top - 140
    }, 500);        
}

$('#searchInput').on("search paste keyup", function(event) {
    var st = $(this).val();
    matchesElement.classList.remove("d-none");
    
    if (event.which == 13) {
        event.preventDefault();
        doSearch();
    }
    
    if (st.length === 0) {
        clearSearch();
    } else {
        // make it async, otherwise the keyboard input is interrupted
        setTimeout(function() {
            doSearch();
        }, 300);
    }
});

$('button.dc-search-btn').on('click', function(e) {
    doSearch();
});


function clearSearch() {

    if(searchInput.value == ''){
        matchesElement.textContent = '';
        $('#matchesCount').html('');
        
        var parent = $('.dc-search-marker').parent();
        $('.dc-search-marker').contents().unwrap();
        parent.html(function(i, html) {
           return html;
        });
        
        $(".dc-tableofcontents").show();
    }
}

function doSearch() {

    matchesElement.textContent = '';
    $('#matchesCount').html('');

    const query = searchInput.value;
    
    matches = window.matches = index.search(query, SEARCH_OPTIONS);
    
    $('.dc-search-marker').contents().unwrap();
    
    if (matches.length === 0) {
        $('html').toggleClass('notranslate');
        $(".dc-tableofcontents").show();
        displayMatches();
    } else {
        $('html').toggleClass('notranslate');
        $(".dc-tableofcontents").hide();
        displayMatches();
    }
}

function displayMatches() {
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
    var componentTitle = '';
    var componentTitleDisplay;
    

    //Build result in array
    Object.keys(matches).forEach(function (arrayItem) {
        var isTextNodeMatch = false;
        var textNodeBefore = '';
        var textNodeAfter = '';
        var textNodeId = matches[arrayItem].ref;
        
        //For result in content
        var textMarked = document.getElementById(textNodeId);
        if(textMarked !== null){
            var contentDisplayText = textMarked.innerText;
        }

        var filteredObj = documents.filter(function (item, i) {
            if(item.name === textNodeId){
                ind = i;
                return i;
            }
        })[0];

        documents.filter(function (item, i) {
            if(item.key === filteredObj.key){
                if(item.name === filteredObj.name){
                    isTextNodeMatch = true;
                }
                if(isTextNodeMatch === false){
                    textNodeBefore = textNodeBefore + item.text;
                }else if (item.name !== filteredObj.name){
                    textNodeAfter = textNodeAfter + item.text;
                }
            }
        })[0];


        var displayTextContent = textNodeBefore + filteredObj.text + textNodeAfter;
        var targetPath = filteredObj.path;
        
        if(filePath === targetPath){
            var path = '';
        } else {
            var path = rootPath + targetPath;
        }
        
        var offset = 0;        
        if(filteredObj.text.substr(0,1) == " "){
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
        
        totalMatch = totalMatch + posArray.length;

        var startString = 0;
        
        var htmlContent = '';

        Object.keys(posArray).forEach(function (node) {
            cpt = cpt + 1;
            
            var matchStart = textNodeBefore.length + posArray[node][0];
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
            
            matchSet.push(
                [documents.indexOf(filteredObj), filteredObj.component, path, textNodeId, textStartFullStop + MatchFormattedBefore, MatchFormatted, MatchFormattedAfter + textEndFullStop, filteredObj.componentID]
            );
            
            //Build matches in content
            if(textMarked !== null){
                var contentMatchStart = posArray[node][0];
                var contentMatchLength = posArray[node][1];
    
                var MatchFormattedBeforeContent = contentDisplayText.substring(startString, contentMatchStart);
                var MatchFormattedContent = contentDisplayText.substring(contentMatchStart, contentMatchStart + contentMatchLength);
                
                htmlContent = htmlContent + MatchFormattedBeforeContent + "<span class='dc-search-marker'>" + MatchFormattedContent + "</span>";
                
                startString = contentMatchStart + contentMatchLength;
            }


        });
        
        if(textMarked !== null){
            var MatchFormattedAfterContent = contentDisplayText.substring(startString);  
            textMarked.innerHTML = htmlContent + MatchFormattedAfterContent;
        }
    });

    // Sort the result with index of position of text
    matchSet.sort(function (a, b) {
        return a[0] - b[0];
    });

    // Group the result with name of component
    var groupBy = function(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[1]] = rv[x[1]] || []).push(x);
        return rv;
      }, {});
    };
    
    // TODO: Test si 'lenght' correspond bien à l'exact match et pas la longueur du mot'
    var matchSetGrouped = groupBy(matchSet, 'length');
    
    Object.keys(matchSetGrouped).forEach(function (node) {
        button = "<button id=\"searchSubBtn-" + matchSetGrouped[node][0][7] + "\" class=\"dc-btn-tocSub-expand collapse show\" type=\"button\" data-toggle=\"collapse\" data-target=\"#searchSub-" + matchSetGrouped[node][0][7] + "\" aria-controls=\"searchSub-" + matchSetGrouped[node][0][7] + "\" aria-expanded=\"false\" aria-label=\"Expand/collapse\"><span class=\"dc-btn-tocSub-expand-symbol\"><i class=\"fas fa-chevron-up\"></i></span></button>";
    
        resultContent = resultContent + "<li class=\"nav-item\"><a class=\"nav-link\">" + node + "</a>" + button + "<ul id=\"searchSub-" + matchSetGrouped[node][0][7] + "\" class=\"nav collapse show\"><li class=\"nav-item\">";
        Object.keys(matchSetGrouped[node]).forEach(function (subnode) {
            var idxPara = matchSetGrouped[node][subnode][3].indexOf("#");
            var targetPath = matchSetGrouped[node][subnode][2] + matchSetGrouped[node][subnode][3].substring(idxPara);
            var idx = targetPath.indexOf("#");
            
            var search = '';
            if(matchSetGrouped[node][subnode][2] !== ''){
                search = '?search=' + searchInput.value;
            }
            
            var url = targetPath.substring(0,idx) + search + targetPath.substring(idx);
            
            resultContent = resultContent + "<a class=\"nav-link\" href=\"" + url + "\">" + matchSetGrouped[node][subnode][4] + "<span class='dc-search-marker'>" + matchSetGrouped[node][subnode][5] + "</span>" + matchSetGrouped[node][subnode][6] + "</a>";
        });
        resultContent = resultContent + "</li></li></ul>"
        
    });

    if(totalMatch > 1){
        matchLabel = " matches";
    }else{
        matchLabel = " match";
    }
    
    resultContent = "<ul id=\"matches\" class=\"nav\">" + "<li id=\"matchesCount\" class=\"dc-count-match\">" + totalMatch + " " + matchLabel + "</li>" + resultContent + "</ul>";

    if(totalMatch !== 0){
        $('#matchesResult').html(resultContent);
    }

    var HeaderH = 54;
    
    var HeaderGhostH = $(".dc-ghost").outerHeight();
    
    var SearcheH = $(".dc-search").outerHeight(true);
    
    if($(".dc-toc-btn").is(":visible")){
        var TOCBtnH = $(".dc-toc-btn").outerHeight(true);
    }else{
        var TOCBtnH = 0;
    }
    
    heightToc = window.innerHeight - (HeaderH + HeaderGhostH + SearcheH + TOCBtnH - 50);
    $('#matches').css({
        'height': heightToc + 'px'
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

function addTextNode(array) {
    
    var cpt = 0;
    Object.keys(array).forEach(function (match) {
        Object.keys(array[match]).forEach(function (textNode) {
            var id = textNode.split('#')[1];
            var anchor = match;
            var textnodeId = array[match][textNode].position;
            
            paraNode = document.getElementById(id);
            
            if(paraNode){
                var node=paraNode;
            
                var textN = textNodesUnder(node);
                
                var spanMarked = document.createElement("span");
                spanMarked.setAttribute("class", "dc-search-marked");
                spanMarked.setAttribute("id", textNode);
                
                textN[textnodeId - 1].parentNode.insertBefore(spanMarked, textN[textnodeId - 1]);
            
                var displayTextContent = textN[textnodeId - 1].nodeValue;
                
                spanMarked.appendChild(textN[textnodeId - 1]);
            }
            

        });
    });
}


