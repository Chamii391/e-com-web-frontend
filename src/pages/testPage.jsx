
import { useState } from "react";
import mediaUpload from "../utils/mediaUpload";


export default function TestPage() {
    const [image, setImage] = useState(null);

   
    function fileUpload(){
        mediaUpload(image).then(
            (res)=>{
                console.log(res)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )

        

       
    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                onChange={(e) => {
                    setImage(e.target.files[0]);
                }}
            />
            <button onClick={fileUpload} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Upload
            </button>
        </div>
    );
}
