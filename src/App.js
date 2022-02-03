import logo from "./logo.svg";
import "./App.css";
import HomeContainer from "./views/Home/HomeContainer";
import ComponentsView from "./views/Components.view/Components.view";
import Routes from "./Routes";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Footer/Footer";
import './styles/common.scss'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Footer/>
      {/* <ComponentsView/> */}
    </div>
  );
}

export default App;
