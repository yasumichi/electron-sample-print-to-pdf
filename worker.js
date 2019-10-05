
window.onload = () => {
  var {ipcRenderer} = require("electron");

  ipcRenderer.on("print-to-pdf", (event, content) => {
    jQuery("#content").html(content);
    // DOM変更後、スタイルが反映される前に処理が進み印刷イメージが崩れる
    // 反映待ちを行っているが、対象のイベントが取れるか調査中。
    setTimeout(() => { ipcRenderer.send("ready-print-to-pdf"); }, 1000);
  });
}
