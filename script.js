const aggiungiSito = function (event) {

  event.preventDefault();
  const url = $("#formUrl").val();
  const title = $("#formTitle").val();
  const category = $("#formCategory").val();
  const aElem = $("<a>").attr("href", url).text(title);
  const liElem = $("<li>").append(aElem);
  $("#lista").append(liElem);
  console.log("URL: " + url);
  console.log("Titolo: " + title);
  console.log("Categoria:" + category);
  console.log("--------------");

}

const init = function () {

  $("#formSubmit").on("click", aggiungiSito);


}

$(document).ready(init);