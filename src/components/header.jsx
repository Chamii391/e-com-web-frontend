
import UserData from "./userData";

export default function Header(){

    return(
        <div className="bg-red-500">
            <h1 className="font-bold text-blue-700">Crystal Beauty</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magnam excepturi consequatur nesciunt mollitia reiciendis et, nemo velit dolore voluptatibus neque delectus. Illo voluptatibus quisquam nisi sunt soluta fugit quam!</p>
            <UserData></UserData>
        </div>
    )
}