
import './App.css';
import { Head, Navbar } from "./components/topHead/Header"
import { Cover } from "./components/cover/cover"
import {My_Head} from './components/heading/heading';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider_One from './components/first_Slider/first-Slider';
import { Container } from 'react-bootstrap';
// import { Container ,Row,Col } from 'react-bootstrap';


function App() {
  return (
<div>
  <Head/>
  <Navbar/>
  <Cover/>
  <My_Head/>
  

  <Slider_One/>
  
  
</div>




  );
}

export default App;
