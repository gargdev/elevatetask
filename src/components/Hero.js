import React, { useState, useEffect } from "react";
import axios from "axios";
import LanguageSelect from "./LanguageSelect";

const Hero = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts(); // Fetch products whenever selectedCategory changes
  }, [selectedCategory]);

  const fetchProducts = async () => {
    try {
      const url =
        selectedCategory === "all"
          ? "https://fakestoreapi.com/products"
          : `https://fakestoreapi.com/products/category/${selectedCategory}`;
      const response = await axios.get(url);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(["all", ...response.data]);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
      <h1 className="text-center text-4xl font-bold text-black mb-10">
        Ecommerce
      </h1>
      <div className="container mx-auto flex flex-wrap items-center justify-around text-2xl nav">
        <div className="text-blue-500 text-4xl">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border bg-gray-900 text-white text-center text-2xl p-2 my-2 mx-2"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {/* Search and category filter */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="text-center border px-4 py-2 my-2 mx-2 w-full"
        />
        {<LanguageSelect />}
        <span>
          <ion-icon name="cart"></ion-icon>
        </span>
        <span>CART</span>
        <span>
          <ion-icon name="person"></ion-icon>
        </span>
        <span>USER</span>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center corousel mt-10">
        <h1 className="text-white text-4xl font-bold w-full text-center mb-8">
          GET START YOUR FAVORITE SHOPPING
        </h1>
        <button className="rounded-md bg-gray-800 px-8 py-3 text-white text-2xl mb-10 hover:bg-white hover:text-gray-900 hover:border">
          BUY NOW
        </button>
      </div>
      <div className="mt-60">
        {/* Product list */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                className="text-center border item py-4 mb-10 m-8"
              >
                <div className="container mx-auto">
                  <h3 className="font-bold text-xl text-center mb-2">
                    {product.title}
                  </h3>
                  <p className="font-semibold">${product.price}</p>
                  <img
                    className="mx-auto h-48 object-contain my-2"
                    src={product.image}
                    alt={product.title}
                  />
                  {/* Add more product details if needed */}
                </div>
                <button className="text-wgite font-semibold mt-5 px-8 py-2 bg-yellow-600 hover:bg-yellow-800 hover:text-white">
                  Buy
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Hero;
