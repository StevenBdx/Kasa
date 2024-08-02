import { Link } from "react-router-dom"
import Cards from "../components/card"
import Banner from "../components/banner"
import BannerOne from '../assets/images/banner-1.jpg'


function Home() {
  return <>
  <Banner img={BannerOne} titre='Chez vous, partout et ailleurs'/>
  <Cards />
    <Link to="/location/3">mon logement</Link>
  </>
}

export default Home;
