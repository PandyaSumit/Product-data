import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductTable from "./components/ProductTable";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          <Route path="/" element={<ProductTable />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
