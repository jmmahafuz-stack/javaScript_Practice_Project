  const products = [
    {
        id: 1,
        name: "Football",
        image: "../assets/images/image1.jpg",
        price: 800,
        quantity: 10
    },
    {
        id: 2,
        name: "Cricket-Ball",
        image: "../assets/images/image2.jpg",
        price: 300,
        quantity: 5
    }
    
];

const productList = document.getElementById("product-list");

function showProducts() {

    productList.replaceChildren();

    products.forEach(function (product) {

        const card = document.createElement("div");
        card.className = "product-card";

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;

        const name = document.createElement("h3");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = "Price: ৳" + product.price;

        const quantity = document.createElement("p");
        quantity.textContent = "Quantity: " + product.quantity;

        card.append(image, name, price, quantity);
        productList.appendChild(card);
    });
}

 showProducts();