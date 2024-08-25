import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbars from './components/Navbars'
import Home from './components/Home';
import Footer from './components/Footer';
import Pizza from './components/Pizza';
//import Cart from './components/Cart';
// import RegisterPage from './components/RegisterPage';
// import LoginPage from './components/LoginPage';

function App() {


  return (
    <>
      <Navbars/>
{/*       <Home/>  */}
      {/*<RegisterPage/> */}
      {/*<LoginPage/> */}
      {/*<Cart/> */}
      <Pizza/>
      <Footer/>
    </>
  )
}

export default App
