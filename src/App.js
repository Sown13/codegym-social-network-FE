import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./pages/MainPage";
import {Route, Routes} from "react-router-dom";
import NewFeed from "./pages/user/home/NewFeed";
import FormRegister from "./components/FormRegister";

function App() {
  return (
    <div>
      <Header></Header>
      <MainPage>
          <Routes>
              <Route path={"/"} element={<NewFeed></NewFeed>}></Route>
          </Routes>
      </MainPage>
      <Footer></Footer>
        <FormRegister></FormRegister>
    </div>

  );
}

export default App;
