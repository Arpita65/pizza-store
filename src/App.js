import Menu from "./Components/Menu";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Allitems from "./Allitems";
import Contact from "./Contact";
import {Routes , Route} from "react-router-dom";
import AddItem from "./Components/AddItem";
import UpdateItem from "./Components/UpdateItem";



function App(){
  return(
    <>
    <Menu/>

    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/ add-item" element={<AddItem/>}/>
    <Route path="/about-us" element={<About Us/>}/>
    <Route path="/all-items" element={<Allitems/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/ update-item" element={<UpdateItem/>}/>
    </Routes>

    <Footer/>
    </>
  )
}






export default App;

