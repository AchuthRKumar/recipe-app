import Topbar from "./components/Topbar";
import Home from "./components/Home";
import Foodcard from "./components/FoodCard";
import Footer from "./components/Footer";

function Homepage(){
    return(
        <div>
            <Topbar />
            <br />
            <Home />
            <br />
            <Foodcard dish={"Dosa"}/>
            <br />
            <Footer />
        </div>
    );
}

export default Homepage;