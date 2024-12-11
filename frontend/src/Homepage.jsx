import Topbar from "./components/Topbar";
import Home from "./components/Home";
import Foodcard from "./components/FoodCard";
import Footer from "./components/Footer";
import dosa from "./assets/Dosa.jpg"
import idli from "./assets/idli.jpg"
import { Flex } from "@chakra-ui/react";

function Homepage(){
    return(
        <div>
            <Topbar />
            <br />
            <Home />
            <br />
            
            <br />
            <Footer />
        </div>
    );
}

export default Homepage;