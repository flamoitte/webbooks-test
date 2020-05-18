var htmlPath = document.getElementById("currentpath").getAttribute("data-path");

const backToResultsElement = document.getElementById('backToResults');
backToResultsElement.onclick = backToResults;
const itemNavigationElement = document.getElementById('itemNavigation');
const matchesElement = document.getElementById('matches');
const nextPageLink = document.getElementById('nextPage');
nextPageLink.onclick = showNextPage;
const pageNavigationElement = document.getElementById('pageNavigation');
const previousPageLink = document.getElementById('previousPage');
previousPageLink.onclick = showPreviousPage;
const productInfoElement = document.getElementById('productInfo');
const matchesInfoElement = document.getElementById('matchesInfo');
const queryInput = document.getElementById('query');
const clearQuery = document.getElementById('clearQuery');

const MATCHES_PER_PAGE = 1500;
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
    showMatchInfo('');
    showItemNavigationInfo('');
    hide(nextPageLink);
    hide(previousPageLink);
    
    currentPage = 0;

    const query = queryInput.value;
/*    if (query.length < 2) {
        return;
    }*/
    
    startPerf();
    matches = window.matches = index.search(query, SEARCH_OPTIONS);
    endPerf();

    if (matches.length === 0) {
        showMatchInfo('No matches :^\\');
        showItemNavigationInfo('');
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

  showMatchInfo('Showing ' + (startIndex + 1) + ' to ' + endIndex +
    ' of ' + matches.length + ' matching item(s)');
  showItemNavigationInfo('Click on an item to view product details');

  for (let i = startIndex; i !== endIndex; ++i) {
    addMatch(matches[i]);
  }

  if (matches.length > currentPage * MATCHES_PER_PAGE + MATCHES_PER_PAGE) {
    show(nextPageLink);
  } else {
    hide(nextPageLink);
  }
  if (currentPage === 0) {
    hide(previousPageLink);
  } else {
    show(previousPageLink);
  }
}

function addMatch(match) {
    const matchElement = document.createElement('div');
    matchElement.classList.add('web_match');
    
    /* Get the index of match in document */
    var matchInd = documents.findIndex(function(item, i){
        return item.name === match.ref
    });

    var textMatch = Object.keys(match.matchData.metadata)[0];
    var matchStart = match.matchData.metadata[textMatch]['text'].position[0][0];
    var matchLength = match.matchData.metadata[textMatch]['text'].position[0][1];
    var textLenght = documents[matchInd].text.length;
    
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
    
    var displayText = documents[matchInd].text.substring(textStart, textEnd);
    
    var displayTextStart = matchStart - textStart;

    var MatchFormattedBefore = displayText.substring(0, displayTextStart);
    var MatchFormatted = displayText.substring(displayTextStart, displayTextStart + matchLength);
    var MatchFormattedAfter = displayText.substring(displayTextStart + matchLength);
    
    var displayTextFormatted = MatchFormattedBefore + '<b>' + MatchFormatted + '</b>' + MatchFormattedAfter;

    matchElement.appendChild(document.createTextNode(textStartFullStop));
    matchElement.appendChild(document.createTextNode(MatchFormattedBefore));

    var displayMatchElem = document.createElement("span");
    displayMatchElem.setAttribute("class", "web_search-marker");
    displayMatchElem.innerHTML = MatchFormatted;
    
    matchElement.appendChild(displayMatchElem);
    
    matchElement.appendChild(document.createTextNode(MatchFormattedAfter));
    matchElement.appendChild(document.createTextNode(textEndFullStop));
    matchElement.onclick = showProductInfo.bind(match.ref);
    matchesElement.appendChild(matchElement);
}

function showProductInfo() {
    window.location.href = htmlPath + this;
    return false;
}

function showMatchInfo(message) {
  if (message === '') {
    hide(matchesInfoElement);
  } else {
    show(matchesInfoElement);
    matchesInfoElement.textContent = message;
  }
}

function showItemNavigationInfo(message) {
  if (message === '') {
    hide(itemNavigationElement);
  } else {
    show(itemNavigationElement);
    itemNavigationElement.textContent = message;
  }
}

function backToResults() {
  hide(backToResultsElement);
  hide(productInfoElement);
  show(pageNavigationElement);
  show(matchesElement);
  if (matches.length > currentPage * MATCHES_PER_PAGE + MATCHES_PER_PAGE) {
    show(nextPageLink);
  }
}

function showNextPage() {
  hide(nextPageLink);
  hide(previousPageLink);
  currentPage++;
  showMatches();
}

function showPreviousPage() {
  hide(nextPageLink);
  hide(previousPageLink);
  currentPage--;
  showMatches();
}

// General utility functions

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

// window.performance utilities

function startPerf() {
  window.performance.mark('start');
}

function endPerf() {
  window.performance.mark('end');
}

function logPerf(message) {
  window.performance.clearMeasures();
  window.performance.measure('duration', 'start', 'end');
  const duration =
  performance.getEntriesByName('duration')[0].duration.toPrecision(4);
  console.log(`${message} took ${duration} ms`);
}
