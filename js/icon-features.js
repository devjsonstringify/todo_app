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

  var addItems = document.getElementById('item-adder-box');
  if (addItems.classList.contains('hidden', 'show', 'animated', 'fadeInUpUp')) {
    addItems.classList.remove('hidden');
    addItems.classList.remove('animated', 'fadeInUp');
    addItems.classList.toggle('visible');
    addItems.classList.toggle('animated', 'fadeInUp');
    console.log('show');
  } else {
    addItems.classList.add('hidden');
    addItems.classList.remove('visible');
    addItems.classList.remove('animated', 'fadeInUp');
    console.log('remove');
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
       document.getElementById('item-adder-box').classList.toggle('hidden');
    }
  }

  document.getElementById("item-adder-box").value = "";
  var searchItems = document.getElementById('item-search-box');
  if (searchItems.classList.contains('hidden', 'show', 'animated', 'fadeInUpUp')) {
    searchItems.classList.remove('hidden');
    searchItems.classList.remove('animated', 'fadeInUp');
    searchItems.classList.toggle('visible');
    searchItems.classList.toggle('animated', 'fadeInUp');
    addBoxcheckifVisible();
    console.log('show module');
  } else {
    searchItems.classList.add('hidden');
    searchItems.classList.remove('visible');
    searchItems.classList.remove('animated', 'fadeInUp');
    console.log('remove module');
  }
}



//grid view
var gridView = document.getElementById('gridviewlist');
gridView.addEventListener('click', listGridView, false);

function listGridView(){
  var gridParent = document.getElementById('myUL');
  gridParent.classList.toggle('show-grid-view');
  console.log('show grid view');

}
