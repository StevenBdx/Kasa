import Cards from "../components/card"
import Banner from "../components/banner"
import BannerOne from '../assets/images/banner-1.jpg'


function Home() {
  return <>
  <Banner img={BannerOne} titre='Chez vous, partout et ailleurs'/>
  <Cards />
  </>
}

export default Home;
