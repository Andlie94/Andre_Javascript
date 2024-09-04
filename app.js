let productList = []; 
let cart =[];

fetch('app.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    productList = data; 
    console.log(productList);
    showProducts(productList);
  })
  .catch((error) => {
    console.error('There has been a problem with fetch operation', error);
  });

function showProducts(productList) {
  const productContainer = document.getElementById('productlist');
  productContainer.innerHTML = ''; 
  productList.forEach((item) => {
    productContainer.innerHTML += `
        <div class="product">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Pris: ${item.price} kr</p>
            <button onclick="viewProduct(${item.id})">Vis detaljer</button>
            <button onclick="Cart(${item.id})">Legg til i handlekurven</button>
        </div>`; 
  });
}

function productFilter(category) {
  let filteredProducts = productList; 

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }
  showProducts(filteredProducts);
}

function viewProduct(productId) {
    const product = productList.find(p => p.id === productId);
  
    if (product) {
      const productContainer = document.getElementById('productlist');
      productContainer.innerHTML = `
        <div class="product-details">
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <p>Pris: ${product.price} kr</p>
          <button onclick="Cart(${product.id})">Legg til i handlekurven</button>
          <button onclick="back()">Tilbake til produktlisten</button>
        </div>`;
    } else {
      showError("coud not found the product.");
    }
  }
  function back() {
    showProducts(productList);
  }
  const cartholder = document.getElementById('cartholder');
  cartholder.addEventListener('click', () => {
    window.location.href = 'checkout.html';
  });

  const paymentButton = document.getElementById('payment');
  paymentButton.addEventListener('click', () => {
    window.location.href = 'order-confirmation.html';
  });

  productlistHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('addCart')) {
        alert('1');
    }
});



