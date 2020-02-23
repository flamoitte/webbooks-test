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

const MATCHES_PER_PAGE = 10;

var currentPage = 0;
var index;
var matches;

var request = new XMLHttpRequest();
request.open("GET","data/index.json", false);
request.send(null);
var documents = JSON.parse(request.responseText);

/*   var request = new XMLHttpRequest();
   request.open("GET", "data/index.json", false);
   request.send(null)
   var my_JSON_object = JSON.parse(request.responseText);
   alert (my_JSON_object.name);*/
   

/*var documents =
[
{
  "name": "https://flamoitte.github.io/webbooks-test/index.html",
  "text": "Circular economy - waste and materials"
}
]
;*/


var index = lunr(function () {
    this.ref('name')
    this.field('text')
    
    console.log(documents);
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
    if (query.length < 2) {
        return;
    }
    
    console.log(index.search(query));
    console.log(documents.name);
    
    
    matches = window.matches = index.search(query);
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
    console.log(matches[i].ref);
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
  matchElement.classList.add('match');

/*try {
  documents.forEach(function(el) {
    console.log(documents[count].text);
    if(this.name === match.ref) throw BreakException;
    count = count + 1;
  });
} catch (e) {
  if (e !== BreakException) throw e;
}*/

  var count = 0;
    documents.forEach(function (doc) 
    {
        console.log(documents[count].name);
        console.log(match.ref);

        if(documents[count].name === match.ref){
        console.log(documents[count].text);
          matchElement.appendChild(document.createTextNode(documents[count].text));
        }
        count = count + 1;
    })

    
/*  matchElement.appendChild(document.createTextNode(documents[item].text));*/
  matchElement.onclick = showProductInfo.bind(match.ref);
  matchesElement.appendChild(matchElement);
}

function showProductInfo() {
  console.log('this', this);
/*  hide(matchesElement);
  hide(pageNavigationElement);
  show(backToResultsElement);
  // dummy content: could include images if online/cached — whatever
  productInfoElement.innerHTML =
    '<div class="productTitle">' + this.name + '</div>' +
    '<div class="productDescription">' + this.text + '</div>';
  show(productInfoElement);*/
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
