import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminProductsPage() {
    const [products, setProducts] = useState([]); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        axios
            .get(import.meta.env.VITE_BACKEND_URL + '/api/product')
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setError("Failed to fetch products. Please try again later."); 
            });
    }, []);

    return (
        <div className="w-full h-full max-h-full overflow-y-scroll">
            {error ? ( 
                <div className="text-red-500 text-center mt-4">{error}</div>
            ) : (
                <table className="w-full text-center">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Images</th>
                            <th>Labelled Price</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={index}>
                                <td>{item.product_id}</td>
                                <td>{item.productname}</td>
                                <td>
                                    <img
                                        src={item.images[0]}
                                        alt={item.productname}
                                        className="w-[100px] h-[50px]"
                                    />
                                </td>
                                <td>{item.labelledPrice}</td>
                                <td>{item.price}</td>
                                <td>{item.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
