const addNewSite = function (event) {

  event.preventDefault();
  console.log("inside addNewSite");
  const url = $("#form-url").val();
  const title = $("#form-title").val();
  const category = $("#form-category").val();
  const aElem = $("<a>").attr("href", url).text(title);
  const liElem = $("<li>").append(aElem);
  $("#lista").append(liElem);
  console.log(url);
  console.log(title);
  console.log(category);

}

const init = function () {

  $("#form-submit").on("click", addNewSite);
  console.log("inside init");

}

$(document).ready(init);