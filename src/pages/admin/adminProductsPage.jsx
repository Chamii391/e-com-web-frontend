import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AdminProductsPage() {
    const [products, setProducts] = useState([]); 
   

    useEffect(() => {
        axios
            .get(import.meta.env.VITE_BACKEND_URL + '/api/product')
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
               
            });
    }, []);

    return (
       <div className="w-full h-full max-h-full overflow-y-auto bg-gray-100 p-6 rounded-lg shadow-md relative">
    
    <Link
        to="/adminpage/add-product"
        className="text-2xl bg-green-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-full shadow-lg absolute bottom-5 right-5 flex items-center justify-center"
    >
        Add Product
    </Link>

    {/* Table */}
    <div className="w-full overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse border border-gray-300 rounded-lg shadow-sm bg-white">
            <thead className="sticky top-0 bg-gray-200 shadow-sm">
                <tr>
                    <th className="px-6 py-3 text-gray-700 font-semibold border-b border-gray-300">Product ID</th>
                    <th className="px-6 py-3 text-gray-700 font-semibold border-b border-gray-300">Product Name</th>
                    <th className="px-6 py-3 text-gray-700 font-semibold border-b border-gray-300">Images</th>
                    <th className="px-6 py-3 text-gray-700 font-semibold border-b border-gray-300">Labelled Price</th>
                    <th className="px-6 py-3 text-gray-700 font-semibold border-b border-gray-300">Price</th>
                    <th className="px-6 py-3 text-gray-700 font-semibold border-b border-gray-300">Stock</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {products.map((item, index) => (
                    <tr
                        key={index}
                        className="hover:bg-gray-100 transition-all duration-150"
                    >
                        <td className="px-6 py-4">{item.product_id}</td>
                        <td className="px-6 py-4">{item.productname}</td>
                        <td className="px-6 py-4">
                            <img
                                src={item.images[0]}
                                alt={item.productname}
                                className="w-[100px] h-[50px] object-cover rounded shadow-md"
                            />
                        </td>
                        <td className="px-6 py-4">{item.labelledPrice}</td>
                        <td className="px-6 py-4">{item.price}</td>
                        <td className="px-6 py-4">{item.stock}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>

    );
}
