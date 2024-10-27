export async function fetchElectronicsData() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/electronics"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching electronics:", error);
    return [];
  }
}

export async function fetchJewelryData() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching jewelry:", error);
    return [];
  }
}
