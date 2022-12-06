const URL = "https://api.escuelajs.co/api/v1/products"

function getProducts(URL) {
    console.log(URL);
    fetch(URL)
        .then(response => response.json())
        .then(data => printProduct(data));
}
function printProduct(params) {
    let section = document.getElementById("section");

    params.forEach(
        element =>
        (
            section.innerHTML += `
            <article class="card">
                <figure class="card__figure">
                    <img src="${element.images[0]}" class="picture"/>
                </figure>
                <p class="name">${element.title}</p>
                <p class="price">$${element.price}</p>
            </article>
        `)
    );
    console.log(params);
}

getProducts(URL);
