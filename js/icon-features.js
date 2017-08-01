//Declarative global variables

//add icon is clicked
document.getElementById('item-adder-box').classList.add('hidden');
var addyourList = document.getElementById('addIcon');

//search icon is clicked
document.getElementById('item-search-box').classList.add('hidden');
var searchyourList = document.getElementById('searchIcon');






//Show add new items if clicked

if (addyourList) {
  addyourList.addEventListener('click', visibleAddModule, false);
}

function visibleAddModule() {
  document.getElementById("item-search-box").value = "";

  //check if search module is visible
  function searchBoxcheckifVisible() {
    if (document.getElementById('item-search-box').classList.contains('visible')) {
      document.getElementById('item-search-box').classList.remove('visible');
       document.getElementById('item-search-box').classList.toggle('hidden');
    }
  }

  var addItems = document.getElementById('item-adder-box');
  if (addItems.classList.contains('hidden', 'show', 'animated', 'fadeInDown')) {
    addItems.classList.remove('hidden');
    addItems.classList.remove('animated', 'fadeInDown');
    addItems.classList.toggle('visible');
    addItems.classList.toggle('animated');
      addItems.classList.toggle('fadeInDown');
    searchBoxcheckifVisible();
    console.log('show item-adder-box');
  } else {
    addItems.classList.add('hidden');
    addItems.classList.remove('visible');
    addItems.classList.remove('animated', 'fadeInDown');
    console.log('remove item-adder-box');
  }
}

//Show search bar if clicked
if (searchyourList) {
  searchyourList.addEventListener('click', visibleSearchModule, false);
}

//search
function visibleSearchModule() {

  //check if add item module is visible
  function addBoxcheckifVisible() {
    if (document.getElementById('item-adder-box').classList.contains('visible')) {
       document.getElementById('item-adder-box').classList.remove('visible');
       document.getElementById('item-adder-box').classList.toggle('hidden');
       console.log('item-adder-box is hidden');
    }

  }

  document.getElementById("item-adder-box").value = "";
  var searchItems = document.getElementById('item-search-box');
  if (searchItems.classList.contains('hidden', 'show', 'animated', 'fadeInUp')) {
    searchItems.classList.remove('hidden');
    searchItems.classList.remove('animated', 'fadeInUp');
    searchItems.classList.toggle('visible');
    searchItems.classList.toggle('animated');
    searchItems.classList.toggle('fadeInUp');
    addBoxcheckifVisible();
    console.log('show search module');
  } else {
    searchItems.classList.add('hidden');
    searchItems.classList.remove('visible');
    searchItems.classList.remove('animated', 'fadeInUp');
    console.log('remove search module');
  }
}



//grid view
var gridView = document.getElementById('gridviewlist');
gridView.addEventListener('click', listGridView, false);

function listGridView(){
  var gridParent = document.getElementById('myUL');
  var gridLi = gridParent.getElementsByTagName("LI");

  for (var kk = 0; kk < gridLi.length; kk++) {
      gridLi[kk].classList.toggle('animated');
      gridLi[kk].classList.toggle('pulse');
  }

  gridParent.classList.toggle('show-grid-view');
  console.log('show grid view');

}
