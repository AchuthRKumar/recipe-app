import Topbar from "./components/Topbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function Homepage(){
    return(
        <div>
            <Topbar />
            <br />
            <Home />
            <br />
            <Footer />
        </div>
    );
}

export default Homepage;