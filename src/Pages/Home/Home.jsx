import Banner from "../../Components/HomeData/Banner";
import Member from "../../Components/HomeData/Member";
import Product from "../../Components/HomeData/Product";
import Review from "../../Components/HomeData/Review";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Product/>
            <Member/>
            <Review/>
        </div>
    );
};

export default Home;