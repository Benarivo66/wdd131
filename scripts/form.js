const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    "avg-rating": 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];
const today = new Date(); 
const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = today.getFullYear();
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = document.lastModified;
const select = document.getElementById('product');
products.forEach((product) => {
    let option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
})
const ratingHeading = document.querySelector("#ratingContainer p");
    const radioButtons = document.querySelectorAll("input[type='radio']");
    const underlineRatingHeading = () => {
        let isChecked = false;
        radioButtons.forEach(button => {
            if (button.checked) {
                isChecked = true;
            }
        });
        if (isChecked) {
            ratingHeading.style.textDecoration = "underline";
            ratingHeading.style.textDecorationColor = "green";
        } else {
            ratingHeading.style.textDecoration = "underline";
            ratingHeading.style.textDecorationColor = "red";
        }
    }
    underlineRatingHeading();
    radioButtons.forEach(button => {
        button.addEventListener('change', underlineRatingHeading);
    });
