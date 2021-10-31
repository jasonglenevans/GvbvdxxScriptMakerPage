//reads url settings
var urltext, URLdata, tmp, i;

function scan_url(urltext) {
  tmp = '';
  i = 0;
  while ((!(i > urltext.length))) {
     i = (typeof i == 'number' ? i : 0) + 1;
    if (urltext.charAt((i - 1)) == '#') {
      i = (typeof i == 'number' ? i : 0) + 1;
      while ((!(i > urltext.length))) {
         tmp = ((tmp) + ((urltext.charAt((i - 1)))));
        i = (typeof i == 'number' ? i : 0) + 1;
       }
    }
   }
}
function get_addon(URLdata) {
  tmp = '';
  i = 0;
  while ((!(i > URLdata.length))) {
     i = (typeof i == 'number' ? i : 0) + 1;
    if (URLdata.charAt((i - 1)) == 'A') {
      i = (typeof i == 'number' ? i : 0) + 1;
      i = (typeof i == 'number' ? i : 0) + 1;
      while ((!( ((i > URLdata.length))  || ((URLdata.charAt((i - 1)) == '-')) ))) {
         tmp = ((tmp) + ((URLdata.charAt((i - 1)))));
        i = (typeof i == 'number' ? i : 0) + 1;
       }
    }
   }
}


// this will scan the current urls data at the #
scan_url(window.location.href);
get_addon(tmp);
loadaddon(tmp);