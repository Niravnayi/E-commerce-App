import React, { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);
  
  const loadProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  const addProducts = async (product) => {
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error("Failed to add product");
      }
      const data = await response.json();
      setProducts([...Products, data]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const updateProducts = async (product) => {
    try {
      const response = await fetch(
        `http://localhost:3000/products/${product.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update product");
      }
      const data = await response.json();
      setProducts(Products.map((p) => (p.id === product.id ? data : p)));
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteProducts = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        Products,
        loadProducts,
        addProducts,
        updateProducts,
        deleteProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
