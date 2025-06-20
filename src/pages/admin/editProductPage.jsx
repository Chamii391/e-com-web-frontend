import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import mediaUpload from "../../utils/mediaUpload";
import axios from "axios";

export default function EditProducts() {
    
    const location = useLocation();
    const [product_id, setProduct_id] = useState(location.state.product_id);
    const [productname, setProductName] = useState(location.state.productname);
    const [altName, setAltName] = useState(location.state.altName.join(","));
    const [description, setDescription] = useState(location.state.description);
    const [images, setImages] = useState([]);
    const [labelledPrice, setLabelledPrice] = useState(location.state.labelledPrice);
    const [price, setPrice] = useState(location.state.price);
    const [stock, setStock] = useState(location.state.stock);
    const navigate = useNavigate();

    console.log(location)

     async function  UpdateProducts() {

        const token = localStorage.getItem("token");
        if(token == null){
            toast.error("Please login to add product");
            return
        }

       let imageUrls = location.state.images

        const promiseArray =[]

        for(let i=0;i<images.length;i++){
            promiseArray[i] = mediaUpload(images[i])
        }

       try{

            if(images.length > 0){
                 imageUrls = await Promise.all(promiseArray)
            }


         

         const altNamesArray = altName.split(",")

         const product = {
             product_id: product_id,
             productname: productname,
             altName: altNamesArray,
             description: description,
             images: imageUrls,
             labelledPrice: Number(labelledPrice),
             price: Number(price),
             stock: Number(stock),
         }

         axios.put(import.meta.env.VITE_BACKEND_URL + '/api/product/'+product_id, product ,{
            headers: {
                "Authorization": "Bearer " + token
            }
         }).then((res) => {
            console.log(res)
            toast.success("Product Upadete successfully");
            navigate("/adminpage/products")


             
         }).catch((error) => {
            toast.error("Something went wrong");
            console.log(error)
         })
            
        

       }catch(error){
        console.log(error)
       }

    }

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100 space-y-4 p-6">
            <h2 className="text-2xl font-semibold text-gray-800">Edit Product</h2>

            <input
                type="text"
                disabled
                placeholder="Product ID"
                value={product_id}
                onChange={(e) => setProduct_id(e.target.value)}
                className="input input-bordered w-full max-w-xs rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
            />
            <input
                type="text"
                placeholder="Product Name"
                value={productname}
                onChange={(e) => setProductName(e.target.value)}
                className="input input-bordered w-full max-w-xs rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
            />
            <input
                type="text"
                placeholder="Alternative Name"
                value={altName}
                onChange={(e) => setAltName(e.target.value)}
                className="input input-bordered w-full max-w-xs rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="textarea textarea-bordered w-full max-w-xs rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
            ></textarea>
            <input
                type="file" multiple
                placeholder="Images"
                onChange={(e) => setImages(e.target.files)}
                className="input input-bordered w-full max-w-xs rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
            />
            <input
                type="number"
                placeholder="Labelled Price"
                value={labelledPrice}
                onChange={(e) => setLabelledPrice(e.target.value)}
                className="input input-bordered w-full max-w-xs rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="input input-bordered w-full max-w-xs rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
            />
            <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="input input-bordered w-full max-w-xs rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
            />
            <div className="w-full flex justify-center flex-row items-center mt-4 space-x-4">
                <Link
                    to="/adminpage/products"
                    className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Cancel
                </Link>
                <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={UpdateProducts}>
                    Edit Product
                </button>
            </div>
        </div>
    );
}
