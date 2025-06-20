import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import Swal from 'sweetalert2';

export default function AdminProductsPage() {
    const [products, setProducts] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
   

    useEffect(() => {

        if(isLoading == true){

            axios
            .get(import.meta.env.VITE_BACKEND_URL + '/api/product')
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
               
            });

        } 
        
        
    }, [isLoading]);

    
function deleteProduct(product_id) {
    const token = localStorage.getItem("token");

    if (token == null) {
        toast.error("Please login to delete product");
        return;
    }

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/product/${product_id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            .then(() => {
                Swal.fire(
                    'Deleted!',
                    'Product has been deleted.',
                    'success'
                );
                setIsLoading(true);
            })
            .catch((error) => {
                console.error("Error deleting product:", error);
                Swal.fire(
                    'Error!',
                    'Something went wrong while deleting.',
                    'error'
                );
            });
        }
    });
}

    return (
       <div className="w-full h-full max-h-full overflow-y-auto bg-gray-100 p-6 rounded-lg shadow-md relative">
    
    <Link
        to="/adminpage/add-product"
        className="text-2xl bg-green-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-full shadow-lg absolute bottom-5 right-5 flex items-center justify-center"
    >
        Add Product
    </Link>

   { isLoading ?

    <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        <span className="sr-only">Loading...</span>
    </div>
    :

   
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
                    <th className="px-6 py-3 text-gray-700 font-semibold border-b border-gray-300">Action</th>
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
                        <td className="px-6 py-4"><div className="flex justify-center items-center w-full">
                                                    <FaTrash onClick={()=>{
                                                        deleteProduct(item.product_id)
                                                    }} className="text-[20px] text-red-500 mx-2 cursor-pointer"/> 
                                                    <FaEdit onClick={()=>{
                                                        navigate("/adminpage/edit-product",{
                                                            state:item
                                                        })
                                                    }} className="text-[20px] text-blue-500 mx-2 cursor-pointer" />
                                                 </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}
</div>

    );
}
