

//Show add new items if clicked
document.getElementById('item-adder-box').classList.add('hidden');
var addyourList = document.getElementById('addIcon');
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
document.getElementById('item-search-box').classList.add('hidden');
var searchyourList = document.getElementById('searchIcon');
if (searchyourList) {
  searchyourList.addEventListener('click', visibleSearchModule, false);
}
//search
function visibleSearchModule() {
  document.getElementById("item-adder-box").value = "";
  var searchItems = document.getElementById('item-search-box');    
  if (searchItems.classList.contains('hidden', 'show', 'animated', 'fadeInUpUp')) {
    searchItems.classList.remove('hidden');
    searchItems.classList.remove('animated', 'fadeInUp');
    searchItems.classList.toggle('visible');
    searchItems.classList.toggle('animated', 'fadeInUp');
    console.log('show module');
  } else {
    searchItems.classList.add('hidden');
    searchItems.classList.remove('visible');
    searchItems.classList.remove('animated', 'fadeInUp');
    console.log('remove module');
  }
}
