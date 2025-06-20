import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import ProductPage from "./client/productPage";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
    
      <Header />

   
      <div className="w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<h1 className="text-3xl font-bold text-red-600">Home</h1>} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/about" element={<h1 className="text-3xl font-bold text-red-600">About</h1>} />
          <Route path="/contact" element={<h1 className="text-3xl font-bold text-red-600">Contact</h1>} />
        </Routes>
      </div>
    </div>
  );
}
