import ProductData from "./productData";
import ProductList  from "./productList";

//instance of ProductData
const dataSource = new ProductData("tents");
//get element to render
const listElement = document.querySelector(".product-list");
// instance of productlist
const list = new ProductList("tents", dataSource, listElement);
// cal the method to show products
list.init();