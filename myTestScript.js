const onProductPage = window.location.href.includes("products");
const cssLinks = [
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css",
  "https://cdn.jsdelivr.net/gh/utkarsh-777/Shopify-Scripts/test.css",
];

const injectCSS = () => {
  cssLinks.forEach((cssLink) => {
    let link = document.createElement("link");
    link.href = cssLink;
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
  });
};

const main = () => {
  const bellElementDiv = document.createElement("div");
  bellElementDiv.setAttribute("class", "bellIcon");

  const productForm = document.getElementsByClassName("product-form")[0];
  if (!productForm) {
    return;
  }

  injectCSS();
  const icon = document.createElement("i");
  icon.setAttribute("class", "bi bi-bell-fill");
  bellElementDiv.appendChild(icon);

  icon.addEventListener("click", function () {
    alert("bell clicked!");
  });

  productForm.appendChild(bellElementDiv);
};

main();
