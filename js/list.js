

var addbtn = document.querySelector('#addbtn');
addbtn.addEventListener('click', addItem, false);


//Declarative variables



// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByClassName("items");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.className === 'items') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function addItem() {

  //get the parent div of "UL"
  var listItems =  document.getElementById("itemlist").getElementsByTagName('ul')[0];

  // create 'LI'
  var li = document.createElement("li");


  // create 'P'
  var ptag = document.createElement("p");
  ptag.classList.add('items');

  // append 'LI' to 'UL'
  listItems.appendChild(li);
  li.appendChild(ptag);

  // create textnode for 'P'
  var inputValue = document.getElementById("myInput").value;
  ptag.innerHTML = inputValue;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
      document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  // create 'close' span
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  ptag.appendChild(span);

  for (i = 0; i < close.length; i++) {
    // Remove the ite 'LI' when close is clicked
    close[i].onclick = function() {

      // Asking the user before deleting item
      var warningMessage = confirm("Warning! Are you sure you want to delete this note?");
      if(warningMessage){
        var thisCloseBtn = this.closest('li');
        thisCloseBtn.parentNode.removeChild(thisCloseBtn);
      }
    }
  }
}
