import Banner from "../../Components/HomeData/Banner";
import Contact from "../../Components/HomeData/Contract";
import Member from "../../Components/HomeData/Member";
import Product from "../../Components/HomeData/Product";
import Review from "../../Components/HomeData/Review";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Product/>
            <Contact/>
            <Member/>
            <Review/>
        </div>
    );
};

export default Home;