function genaratecode() {        
        var html = "",
             
             html = html + "<script src='js/MIDI.js'>";
             html = html + "<script src='js/FileSaver.js'>";
             html = html + "<script>";
             html = html + document.getElementById("code").value;
             html = html+ "</script>";
             html = html+ "<!--edit this html file if working-->";
            
            
        var zip = new JSZip();
       zip.file("result.html", html);
       var fld1 = zip.folder("js");
       var fld2 = zip.folder("midisamples");
      zip.generateAsync({type:"blob"})
      .then(function(content) {
      // see FileSaver.js
      saveAs(content, "code.zip");
      });
}