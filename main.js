window.onload = () => {
  var {ipcRenderer} = require("electron");
  var util = require("util");

  document.getElementById("btn-print-to-pdf").addEventListener("click", () => {
    var context = document.getElementById("print-area").innerHTML;
    ipcRenderer.send("print-to-pdf", context);
  });
}
