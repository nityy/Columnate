function CreateLink() {

  // cribbed from bookmarkletify
  var toplevel_ast = UglifyJS.parse(Columnate.toString() + "Columnate();");
  toplevel_ast.figure_out_scope();
  var compressor = UglifyJS.Compressor();
  var compressed_ast = toplevel_ast.transform(compressor);
  compressed_ast.figure_out_scope();

  var url = "javascript: (function () {" + compressed_ast.print_to_string() + "}())";
  document.getElementById("bookmarkletLink").href = url;
  document.getElementById("bookmarkletLink").className = "ready";
};

function ClickHelp() {
  alert("Drag this link to your bookmark bar.");
  return false;
};

document.querySelector("body").onload = CreateLink;
document.getElementById("bookmarkletLink").onclick = ClickHelp;