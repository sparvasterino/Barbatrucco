const aggiungiSito = function (event) {

  event.preventDefault();
  const url = $("#form-url").val();
  const title = $("#form-title").val();
  const category = $("#form-category").val();
  const aElem = $("<a>").attr("href", url).text(title);
  const liElem = $("<li>").append(aElem);
  $("#lista").append(liElem);
  console.log("URL: " + url);
  console.log("Titolo: " + title);
  console.log("Categoria:" + category);
  console.log("--------------");

}

const init = function () {

  $("#form-submit").on("click", aggiungiSito);


}

$(document).ready(init);