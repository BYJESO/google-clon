let querty = document.querySelector(".qwerty");
let searchForm = document.querySelector("#searchForm");

searchForm.onsubmit = search;

function search(event) {
  event.preventDefault();
  let url = "https://www.google.com/search?q=" + querty.value;
  console.log(url);
  window.open(url, "_self");
}

function doodlesOrSearch() {
  const doodles = "https://www.google.com/doodles" + querty.value;

  if (querty.value) {
    let url = "https://www.google.com/search?q=" + querty.value;
    window.open(url, "_self");
  } else {
    window.open(doodles, "_self");
  }

  //   console.log("angelesgei ");
}
