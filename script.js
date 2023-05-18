let checkboxes = document.querySelectorAll('.checkboxes label');
let blockModels = document.querySelector('.blocks-group');
let models = document.querySelectorAll('.block-flex');

let buttonFilter = document.querySelector('.button');
let searchButton = document.querySelector("search button");

let relationships = []


checkboxes.forEach(function(checkbox) {

  models.forEach(model => {
    text = model.querySelector(".text").querySelector("a");
    if (text == null) {
      text = model.querySelector(".text").innerHTML;
    } else {
      text = text.innerHTML;
    }
    if (checkbox.textContent == text) {
      relationship = {}
      relationship.checkbox = checkbox.querySelector("input");
      relationship.model = model;
      relationships.push(relationship);
    }
  });
});
  
console.log(relationships);


function filter() {
  relationships.forEach(relationship => {
    let checkbox = relationship.checkbox;
    let model = relationship.model;

    console.log(checkbox);
    console.log(checkbox.checked);

    if (checkbox.checked == true) {
      blockModels.append(model);
    } else {
      if (blockModels.contains(model)) {
        model.remove();
      }
    }
  });
}

buttonFilter.addEventListener('click', filter);


function search() {
  let searchInput = document.getElementByClassName(".search input");
  
  models.forEach(model => {
    text = model.querySelector(".text").querySelector("a");
    if (text == null) {
      text = model.querySelector(".text").innerHTML;
    } else {
      text = text.innerHTML;
    }
    console.log(searchInput.value());
    if (text.includes(searchInput.value())) {
      console.log("true");
    }
  });
}




