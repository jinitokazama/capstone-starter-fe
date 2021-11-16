import isAuthenticated from "../../utils/isAuthenticated";
import Header from "../../components/header/Header";
import MushroomGridCards from "./MushroomGridCards";


function Mushrooms() {
    return (
        <div>
            <Header isAuthenticated={isAuthenticated()}/>
            <MushroomGridCards/>
        </div>
    )
}

export default Mushrooms;