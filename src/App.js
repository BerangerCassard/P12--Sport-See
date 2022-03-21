import logo from './logo.svg';
import './App.css';
import Home from "./pages/home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header";
import UserStatistics from "./pages/user-statistics";
import UserModel from "./model/UserModel";

function App() {
    // UserModel.user.firstName = 'Robin'
    // UserModel.fetchUserFromAPI()

  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/user/:id' element={ <UserStatistics/> } />

            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
