export function getItems(itemsName) {
  return fetch(`https://fakestoreapi.com/products/category/${itemsName}`);
}
