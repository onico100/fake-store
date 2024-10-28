export function getItems(itemsName) {
  if (itemsName === "books") return fetch("http://localhost:5000/books");
  return fetch(`https://fakestoreapi.com/products/category/${itemsName}`);
}
