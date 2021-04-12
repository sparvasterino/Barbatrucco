const siti = [];

const aggiungiSito = function (event) {

  event.preventDefault();
  const url = $("#formUrl").val();
  const title = $("#formTitle").val();
  const category = $("#formCategory").val();

  console.log("URL: " + url);
  console.log("Titolo: " + title);
  console.log("Categoria:" + category);
  console.log("--------------");

  const nuovoSito = {
    url: url,
    title: title,
    category: category
  };

  siti.push(nuovoSito);
  console.log(siti);
  scriviListaSito(siti);
}

const scriviListaSito = function (sito) {
  const aElem = $("<a>").attr("href", sito[sito.length - 1].url).text(sito[sito.length - 1].title);
  const liElem = $("<li>").append(aElem);
  $("#lista").append(liElem);
}

const init = function () {

  $("form").submit(aggiungiSito);


}

$(document).ready(init);