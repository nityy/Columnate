function CreateLink() {
  var url = "javascript: (function () {" + Columnate.toString() + "Columnate();}())";
  document.getElementById("bookmarkletLink").href = url;
  document.getElementById("bookmarkletLink").className = "ready";
};

function ClickHelp() {
  alert("Drag this link to your bookmark bar.");
  return false;
};

document.querySelector("body").onload = CreateLink;
document.getElementById("bookmarkletLink").onclick = ClickHelp;