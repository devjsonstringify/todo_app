

var searchBar = document.getElementById('userSearch');
searchBar.addEventListener('keyup', function() {
  console.log('keyup');
  // Declare variables
  var input, filter, ul, li, p, i;
  input = document.getElementById('userSearch');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    p = li[i].getElementsByTagName("p")[0];
    if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";

    } else {
      li[i].style.display = "none";
    }
  }

});
