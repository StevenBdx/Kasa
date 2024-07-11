import { Link } from "react-router-dom";
import Cards from "../components/card";

function Home() {
  return <>
  <Cards />
    <Link to="/location/3">mon logement</Link>
  </>
}

export default Home;
