import axios from "axios";
import { useEffect, useState } from "react";

import ProductCard from "../../components/productCard";

export default function ProductPage() {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect (()=>{

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

    },[isLoading]

)
return (
    <div className="w-full h-full flex flex-wrap items-center justify-center">
        {
            products.map((product)=>{
                return(
                    <ProductCard key={product.product_id} product={product} />
                )
            })
        }


    </div>
);
}