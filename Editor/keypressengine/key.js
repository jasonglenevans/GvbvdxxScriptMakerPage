//Key Press Engine By Gvbvdxx







let arrowkeypressed = NaN;
let keypressed = NaN;
document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    keypressed = charStr;
    keypressednum = charCode;
          switch (evt.keyCode) {
         case 37:
            var arrowkeypressed = "left";
         case 38:
             var arrowkeypressed = "up";
         case 39:
             var arrowkeypressed = "right";
         case 40:
             var arrowkeypressed = "down";
      }
    
};

document.onkeyup = function(event) {
    keypressed = NaN;
    keypressednum = NaN;
          switch (event.keyCode) {
         case 37:
          var arrowkeypressed = NaN;
         case 38:
          var arrowkeypressed = NaN;
         case 39:
          var arrowkeypressed = NaN;
         case 40:
          var arrowkeypressed = NaN;
      }
};  
function iskeypressed(keyinputed) {
    return (( keyinputed  == keypressed ) || ( keyinputed  == arrowkeypressed ));
}