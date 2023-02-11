

// =========Store==================


var prodactName = document.getElementById("pName");
var prodactPrise = document.getElementById("pPrise");
var prodactDesc = document.getElementById("pCate");
var prodactCate = document.getElementById("pDesc");
var prodact = [];

if (localStorage.getItem("prodacts") != null) {
  prodact = JSON.parse(localStorage.getItem("prodacts"));
  displayProdacts()
}

// --------Add Function----------
function addProduct() {
  var oneProdacte = {

    pName: prodactName.value,
    pPrise: prodactPrise.value,
    pCate: prodactDesc.value,
    pDesc: prodactCate.value

  }
  prodact.push(oneProdacte);
  localStorage.setItem("prodacts", JSON.stringify(prodact));
  displayProdacts();
  clearInput();
}


// --------display Function----------
function displayProdacts() {

  var cartona = ``;

  for (var i = 0; i < prodact.length; i++) {
    cartona += `<tr>
    <td> ${i + 1}</td>
    <td> ${prodact[i].pName}</td>
    <td> ${prodact[i].pPrise}</td>
    <td> ${prodact[i].pCate}</td>
    <td> ${prodact[i].pDesc}</td>
    <td><button class="btn btn-warning">Update</button></td>
    <td><button onclick="delatProdact(${i})" class="btn btn-danger">Delat</button></td>
  </tr>`
  }
  document.getElementById("prodact_table").innerHTML = cartona;
}


// --------clear Function----------

function clearInput() {
  prodactName.value = "";
  prodactPrise.value = "";
  prodactDesc.value = "";
  prodactCate.value = "";
}

// --------delat Function---------
function delatProdact(index) {
  prodact.splice(index, 1);
  displayProdacts();
  localStorage.setItem("prodacts", JSON.stringify(prodact));
}

// --------search Function--------

function searchProdact(term) {
  var cartona = ``;

  for (var i = 0; i < prodact.length; i++) {
    if (prodact[i].pName.toLowerCase().includes(term.toLowerCase()) == true) {
      cartona += `<tr>
      <td> ${i}</td>
      <td> ${prodact[i].pName}</td>
      <td> ${prodact[i].pPrise}</td>
      <td> ${prodact[i].pCate}</td>
      <td> ${prodact[i].pDesc}</td>
      <td><button class="btn btn-warning">Update</button></td>
      <td><button onclick="delatProdact(${i})" class="btn btn-danger">Delat</button></td>
      </tr>`
    }

  }
  document.getElementById("prodact_table").innerHTML = cartona;
}












































