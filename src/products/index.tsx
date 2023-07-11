function Products() {
  const FakeStoreURL = "https://api.escuelajs.co/api/v1";

  async function productsList() {
    const products = await fetch(`${FakeStoreURL}/products`);
    const data = await products.json();

    console.log(data.map((val: any) => val.name));
  }

  productsList();

  return <h1>Products</h1>;
}

export default Products;
