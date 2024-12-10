import Topbar from "./components/Topbar";
import Home from "./components/Home";
import Foodcard from "./components/FoodCard";

function Homepage(){
    return(
        <div>
            <Topbar />
            <br />
            <Home />
            <Foodcard />
        </div>
    );
}

export default Homepage;