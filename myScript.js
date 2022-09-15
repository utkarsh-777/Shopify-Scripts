const onProductPage = window.location.href.includes("products");

function main() {
  if (onProductPage) {
    const bellElementDiv = document.createElement("div");
    bellElementDiv.setAttribute("class", "bellIcon");

    const productForm = document.getElementsByClassName("product-form")[0];
    if (!productForm) {
      return;
    }

    const icon = document.createElement("i");
    icon.setAttribute("class", "bi bi-bell-fill");
    bellElementDiv.appendChild(icon);

    icon.addEventListener("click", function () {
      alert("bell clicked!");
    });

    productForm.appendChild(bellElementDiv);
  }
}

main();
