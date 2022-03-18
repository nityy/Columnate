function Columnate() {
  var LoadStylesheet = function (url) {
    var c = document.createElement('link');
    c.rel = 'stylesheet';
    c.type = 'text/css';
    c.media = 'all';
    c.href = url;
    document.getElementsByTagName('head')[0].appendChild(c);
  };

  var MakeReadable = function () {
    var doclone = document.cloneNode(true);
    var article = new Readability(doclone).parse();
    var htmltag = document.getElementsByTagName("html")[0];
    htmltag.removeAttribute("class");
    htmltag.removeAttribute("style");
    document.head.innerHTML = '<meta name="viewport" content="width=device-width, initial-scale=1">';
    LoadStylesheet('//nityy.github.io/Unclutter/appearance.css');
    document.title = article.title;
    document.body.removeAttribute("class");
    document.body.removeAttribute("style");
    document.body.innerHTML = '<h1>' + article.title + '</h1><div id="author">' + article.byline + '</div><hr>' + article.content;
  };

  cmjs = document.createElement('script');
  cmjs.type = 'text/javascript';
  cmjs.src = '//nityy.github.io/Unclutter/readability/Readability.js';
  cmjs.onreadystatechange = MakeReadable;
  cmjs.onload = MakeReadable;
  document.getElementsByTagName('head')[0].appendChild(cmjs);
};
