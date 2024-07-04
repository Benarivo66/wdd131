const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/1200x675/accra-ghana-temple-detail-249022-2400x1200.jpg",
  },
  {
    templeName: "Frankfurt Germany Temple",
    location: "Frankfurt Germany",
    dedicated: "1987, August, 28",
    area: 20000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/400x250/frankfurt-germany-temple-lds-82734-wallpaper.jpg",
  },
  {
    templeName: "Bern Switzerland Temple",
    location: "Bern Switzerland",
    dedicated: "1955, September, 11",
    area: 35546,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784295-wallpaper.jpg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const currentyear = document.querySelector("#currentyear");
  currentyear.innerHTML = today.getFullYear();

  const menu = document.getElementById("menu");
  const navg = document.querySelector("nav");

  const lastModified = document.querySelector("#lastModified");
  lastModified.innerHTML = document.lastModified;

  menu.addEventListener("click", () => {
    navg.classList.toggle("open");
    menu.classList.toggle("open");
  });

  const templeDiv = document.querySelector("div");

  const displayTemples = (temples) => {
    for (const temple of temples) {
      const templeCard = document.createElement("div");
      templeCard.className = "templeCard";
      const templeInfo = document.createElement("div");
      templeInfo.className = "templeInfo";

      const image = document.createElement("img");
      image.src = temple.imageUrl;
      image.alt = temple.templeName;
      image.loading = "lazy";

      let locationTag = document.createElement("span");
      let dedicatedTag = document.createElement("span");
      let sizeTag = document.createElement("span");

      const location = temple.location;
      const dedicated = temple.dedicated;
      const size = temple.area;

      locationTag.innerHTML = `Location: ${location}`;
      dedicatedTag.innerHTML = `Dedicated: ${dedicated}`;
      sizeTag.innerHTML = `Size: ${size}`;

      templeInfo.append(locationTag, dedicatedTag, sizeTag);

      templeCard.append(templeInfo, image);
      templeDiv.append(templeCard);
    }
  };

  displayTemples(temples);

  const oldTemples = temples.filter(
    (elem) => parseInt(elem.dedicated.split(",")[0]) < 1900
  );
  const newTemples = temples.filter(
    (elem) => parseInt(elem.dedicated.split(",")[0]) > 2000
  );
  const largeTemples = temples.filter((elem) => elem.area > 90000);
  const smallTemples = temples.filter((elem) => elem.area < 10000);

  // const home = document.querySelector("#home");
  // home.addEventListener("click", () => {
  //   templeDiv.innerHTML = "";
  //   displayTemples(temples);
  // });
  // const old = document.querySelector("#old");
  // old.addEventListener("click", () => {
  //   templeDiv.innerHTML = "";
  //   displayTemples(oldTemples);
  // });
  // const newT = document.querySelector("#new");
  // newT.addEventListener("click", () => {
  //   templeDiv.innerHTML = "";
  //   displayTemples(newTemples);
  // });
  // const large = document.querySelector("#large");
  // large.addEventListener("click", () => {
  //   templeDiv.innerHTML = "";
  //   displayTemples(largeTemples);
  // });
  // const small = document.querySelector("#small");
  // small.addEventListener("click", () => {
  //   templeDiv.innerHTML = "";
  //   displayTemples(smallTemples);
  // });


const filterTemples = {
  home: temples,
  old: oldTemples,
  new: newTemples,
  large: largeTemples,
  small: smallTemples,
};

const handleFilterTemplesClick = (filter) => {
  templeDiv.innerHTML = "";
  displayTemples(filterTemples[filter]);
};  

Object.keys(handleFilterTemplesClick).forEach((key) => {
  document
    .querySelector(`#${key}`)
    .addEventListener("click", () => handleFilterTemplesClick(key));
});

});



