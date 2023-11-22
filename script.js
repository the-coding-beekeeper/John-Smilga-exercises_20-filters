// ******* Initialize variables
const products = [
  {
    name: "High-Back Bench",
    price: 9.99,
    image: "images/high-back-bench.jpg",
    company: "Ikea"
  },
  {
    name: "albany table",
    price: 79.99,
    image: "images/albany-table.jpg",
    company: "Marcos"
  },
  {
    name: "accent chair",
    price:  25.99,
    image: "images/chair.jpg",
    company: "Caressa"
  },
  {
    name: "wooden table",
    price:  45.99,
    image: "images/wooden-table.jpg",
    company: "Caressa"
  },
  {
    name: "dining table",
    price:  6.99,
    image: "images/dining-table.jpg",
    company: "Caressa"
  },
  {
    name: "sofa set",
    price:  69.99,
    image: "images/sofa-set.jpg",
    company: "Liddy"
  },
  {
    name: "modern bookshelf",
    price:  8.99,
    image: "images/bookshelf.jpg",
    company: "Marcos"
  },
  {
    name: "emperor bed",
    price:  21.99,
    image: "images/bed.jpg",
    company: "Liddy"
  },
  {
    name: "utopia sofa",
    price:  39.95,
    image: "images/utopia-sofa.jpg",
    company: "Marcos"
  },
  {
    name: "entertainment center",
    price:  29.98,
    image: "images/entertainment-center.jpg",
    company: "Liddy"
  },
  {
    name: "albany sectional",
    price:  10.99,
    image: "images/sectional.jpg",
    company: "Ikea"
  },
  {
    name: "leather sofa",
    price:  9.99,
    image: "images/leather-sofa.jpg",
    company: "Liddy"
  }
];
const searchEl = document.querySelector(".search");
let matches = [];

filterProducts("All");

// ******* filter products by button-click
function filterProducts(filter) {
  matches = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].company === filter || filter === "All") {
      matches.push(products[i]);
    }
  }
  displayProducts(matches);
}

//******* filter products by search-input
searchEl.addEventListener("input", function() {
  compareUserInput(searchEl.value)
});

function compareUserInput(userInput) {
  matches = [];
  console.log(userInput);
  
  for (let i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(userInput.toLowerCase())) {
      matches.push(products[i]);
    }
  }
  displayProducts(matches);
}

function displayProducts(selectedProducts) {
  document.querySelector(".main").innerHTML = "";
  for (let i = 0; i < selectedProducts.length; i++) {
    const product = document.createElement("div");
    product.classList.add("product");
    product.innerHTML = `
      <img class="product-image" src="${matches[i].image}">
      <span class="product-name">${matches[i].name}</span>
      <span class="product-price">${matches[i].price}</span>
    `;
    document.querySelector(".main").appendChild(product);
    if (i === selectedProducts.length - 1 && selectedProducts.length % 2 === 1) {
      product.style.marginBottom = "100px";
    }
  }
}
