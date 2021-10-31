var ExampleCode = document.getElementById("loadExample").innerHTML
var xml = Blockly.Xml.textToDom(ExampleCode);
        Blockly.Xml.domToWorkspace(xml, workspace);