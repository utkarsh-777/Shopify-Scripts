const shop = Shopify?.shop;
const customerId = __st?.cid;
const backendURL =
  "https://d715-2409-4050-2db7-ee52-5874-7caa-a775-3274.in.ngrok.io";
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

const getProductInfo = async () => {
  try {
    const data = await fetch(window.location.href + ".js");
    return data.json();
  } catch (error) {
    console.log(error);
  }
};

const sendProductData = async (data) => {
  try {
    if (customerId && data) {
      const response = await fetch(
        `${backendURL}/api/product-subscribe?shop=${shop}?customerId=${customerId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      console.log(response.json());
      return alert(response.json());
    }
    return alert("Customer has to be logged in!");
  } catch (error) {
    return alert(error.message);
  }
};

const main = async () => {
  const bellElementDiv = document.createElement("div");
  bellElementDiv.setAttribute("class", "bellIcon");

  const productForm = document.getElementsByClassName("product-form")[0];
  if (!onProductPage || !productForm) {
    return;
  }

  const productData = await getProductInfo();
  const icon = document.createElement("i");
  icon.setAttribute("class", "bi bi-bell-fill");
  bellElementDiv.appendChild(icon);

  icon.addEventListener(
    "click",
    async () => await sendProductData(productData),
  );

  productForm.appendChild(bellElementDiv);
};

// Only works if customer is logged in!
if (customerId) {
  injectCSS();
  main();
}
