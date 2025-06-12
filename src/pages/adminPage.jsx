import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage() {
    return (
        <div className="w-full h-screen flex">
            <div className="h-full w-[300px] flex flex-col ">
                <Link to ="/adminpage/products" className="hover:text-gray-400">Products</Link>
                <Link to ="/adminpage/users" className="hover:text-gray-400">Users</Link>
                <Link to ="/adminpage/orders" className="hover:text-gray-400">Orders</Link>
                <Link to ="/adminpage/reviews" className="hover:text-gray-400">Reviews</Link>
            </div>
            <div className="h-full w-[calc(100%-300px)] bg-yellow-500">

                <Routes pathe ="/*">
                    <Route path="/products" element={<h1>Products</h1>} />
                    <Route path="/users" element={<h1>Users</h1>} />
                    <Route path="/orders" element={<h1>Orders</h1>} />
                    <Route path="/reviews" element={<h1>Reviews</h1>} />
                </Routes>
            </div>

        </div>
    );
}