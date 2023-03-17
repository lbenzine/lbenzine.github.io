// Load header
var xhrHeader = new XMLHttpRequest();
xhrHeader.open('GET', 'nav.html', true);
xhrHeader.onreadystatechange = function() {
  if (xhrHeader.readyState === 4) {
    if (xhrHeader.status === 200) {
      document.getElementById('header').innerHTML = xhrHeader.responseText;
    }
    else {
      console.log('Error loading header');
    }
  }
};
xhrHeader.send();

// Load footer
var xhrFooter = new XMLHttpRequest();
xhrFooter.open('GET', 'footer.html', true);
xhrFooter.onreadystatechange = function() {
  if (xhrFooter.readyState === 4) {
    if (xhrFooter.status === 200) {
      document.getElementById('footer').innerHTML = xhrFooter.responseText;
    }
    else {
      console.log('Error loading footer');
    }
  }
};
xhrFooter.send();
