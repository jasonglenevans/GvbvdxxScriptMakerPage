//for special stuff
window.gvbvdxxScriptMaker = {
  blocks: {
    register:function (Blocks,Title,categoryColor) {
      
      var i = 0;
      var xmlCode = "<category name='" + Title + "' colour='" + categoryColor + "'>";
      while (i < Blocks.length) {
        xmlCode = xmlCode + ("<block type='" + Blocks[i] + "'></block>\n");
        i = i + 1;
      }
      xmlCode = xmlCode + ("</category>");
      
      
      workspace.updateToolbox("<xml>" + document.getElementById("toolbox").innerHTML + xmlCode + "</xml>");
    }
  }
}
function gsmAdd(Blocks,Title,categoryColor) {
      
      var i = 0;
      var xmlCode = "<category name='" + Title + "' colour='" + categoryColor + "'>";
      while (i < Blocks.length) {
        xmlCode = xmlCode + ("<block type='" + Blocks[i] + "'></block>\n");
        i = i + 1;
      }
      xmlCode = xmlCode + ("</category>");
      
      
      workspace.updateToolbox("<xml>" + document.getElementById("toolbox").innerHTML + xmlCode + "</xml>");
    }
