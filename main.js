function initApp() {
    products.forEach((value) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("product-box")
        newDiv.innerHTML = `
            <img src="${value.image}">
            <h2>${value.title}</h2>
          
            <button>SEE MORE</button>
            
            `;
        contentss.appendChild(newDiv);
    })
}
initApp();