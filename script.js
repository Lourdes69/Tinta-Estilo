document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Tatuajes temporales de flores", image: "https://m.media-amazon.com/images/I/81XSl68BPEL._SX425_.jpg", link: "https://a.co/d/ivG0YuX" },
        { name: "Tatuajes temporales de flores 3D", image: "https://m.media-amazon.com/images/I/71Ogpo19tGL._SX425_.jpg", link: "https://a.co/d/0nTghqZ" },
        { name: "Tatuajes temporales de flores de acuarela", image: "https://m.media-amazon.com/images/I/71GbYfiz+lL._SX425_.jpg", link: "https://a.co/d/ieiPpvn" },
        { name: "Tatuajes temporales de acuarela con flores y lavanda", image: "https://m.media-amazon.com/images/I/81zZQHPUn8L._SX425_.jpg", link: "https://a.co/d/j3ttdsM" },
        { name: "Tatuajes temporales de flores y mariposas", image: "https://m.media-amazon.com/images/I/71PP5-JsWlL._SX425_.jpg", link: "https://a.co/d/jcakaje" },
        { name: "Tatuajes temporales de mariposa", image: "https://m.media-amazon.com/images/I/61rQyITr8wL._SX425_.jpg", link: "https://a.co/d/20QERK1" },
        { name: "Tatuajes temporales de Águilas", image: "https://m.media-amazon.com/images/I/71qF3JR3uJL._SX425_.jpg", link: "https://a.co/d/hCHxfhw" },
        { name: "Tatuajes temporales de flores, mariposas y serpientes", image: "https://m.media-amazon.com/images/I/71d9yTUgDEL._SX425_.jpg", link: "https://a.co/d/dUaO5iX" }
    ];

    const container = document.getElementById("product-list");

    products.forEach(product => {
        const card = document.createElement("a");
        card.href = product.link;
        card.target = "_blank";
        card.className = "flex items-center bg-purple-700 w-full max-w-lg p-4 rounded-lg shadow-lg hover:scale-105 transition transform hover:shadow-2xl text-white font-semibold text-lg";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-14 h-14 rounded-full mr-4 border-2 border-white">
            <span>${product.name}</span>
        `;

        container.appendChild(card);
    });
});
