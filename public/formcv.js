// alert("loading");
function addNewpField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
  
    let pOb = document.getElementById("p");
    let pAddButtonOb = document.getElementById("pAddButton");
  
    pOb.insertBefore(newNode, pAddButtonOb);
  }
  function addNewSKField() {
    //   console.log("Adding new field");
  
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
  
    let skOb = document.getElementById("sk");
    let skAddButtonOb = document.getElementById("skAddButton");
  
    skOb.insertBefore(newNode, skAddButtonOb);
  }
  
  function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
  
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
  
    aqOb.insertBefore(newNode, aqAddButtonOb);
  }
  
  
  
  //generating cv
  function generateCV() {
    // console.log("generating CV");
  
    let nameField = document.getElementById("nameField").value;
  
    let nameT1 = document.getElementById("nameT1");
  
    nameT1.innerHTML = nameField;
  
    //direct
  
    document.getElementById("nameT2").innerHTML = nameField;
  
    //contact
    document.getElementById("contactT").innerHTML = document.getElementById(
      "contactField"
    ).value;
  
    //address
    document.getElementById("addressT").innerHTML = document.getElementById(
      "addressField"
    ).value;
    document.getElementById("fbT").innerHTML = document.getElementById(
      "fbField"
    ).value;
    document.getElementById("instaT").innerHTML = document.getElementById(
      "emField"
    ).value;
    document.getElementById("linkedT").innerHTML = document.getElementById(
      "linkedField"
    ).value;
  
    //objective
  
    document.getElementById("objectiveT").innerHTML = document.getElementById(
      "objectiveField"
    ).value;
  
   
  
    // sk
    let sks = document.getElementsByClassName("skField");
  
    let str2 = "";
  
    for (let e of sks) {
      str2 = str2 + `<li> ${e.value} </li>`;
    }
  
    document.getElementById("skT").innerHTML = str2;
    
     //p
  let ps = document.getElementsByClassName("pField");

  let str3 = "";

  for (let e of sks) {
    str3 = str3 + `<li> ${e.value} </li>`;
  }

  document.getElementById("pT").innerHTML = str3;
    //aq
  
    let aqs = document.getElementsByClassName("eqField");
  
    let str1 = "";
  
    for (let e of aqs) {
      str1 =str1 + `<li> ${e.value} </li>`;
    }
  
    document.getElementById("aqT").innerHTML = str1;
  
    //code for setting image
  
    let file = document.getElementById("imgField").files[0];
  
    console.log(file);
  
    let reader = new FileReader();
  
    reader.readAsDataURL(file);
  
    console.log(reader.result);
  
    //set the image to template
  
    reader.onloadend = function () {
      document.getElementById("imgTemplate").src = reader.result;
    };
  
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
  }
  
  //print cv
  function printCV() {
    window.print();
  }