import Banner from '../components/banner'
import BannerTwo from '../assets/images/banner-2.jpg'
import Collapse from '../components/collapse'


export default function About() {
 

  return (
    <>
    <Banner img={BannerTwo}/>

    <Collapse title='Fiabilité' >
    <p>blabla</p>
    </Collapse>

    <Collapse title='Respect' >
    <p>blabla</p>
    </Collapse>

    <Collapse title='Service' >
    <p>blabla</p>
    </Collapse>

    <Collapse title='Sécurité' >
    <p>blabla</p>
    </Collapse>
    </>
  )
}
