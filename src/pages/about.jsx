import Banner from '../components/banner'
import BannerTwo from '../assets/images/banner-2.jpg'
import Collapse from '../components/collapse'

export default function About() {
 

  return (
    <>
    <Banner img={BannerTwo}/>
    <Collapse >
    <h1>mon titre</h1><p>blabla</p>
    </Collapse>
    <Collapse />
    </>
  )
}
