import { Route, Routes } from "react-router-dom";
//components 
import { Layout } from './Components/Layout'
import { Authorization } from "./Components/Authorization";
import { Sectoral } from './Pages/Sectoral';
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { LoginProvider } from './Components/Context'
import { Login } from './Pages/Login'

function App() {
    return(
        <LoginProvider>
            <Routes>
                <Route path = '/' element = {<Layout/>}>
                    <Route index element = {
                        <Authorization>
                            <Sectoral/>
                        </Authorization>
                    }/>
                    <Route path="/home" element={
                        <Authorization>
                            <Home/>
                        </Authorization>
                    }/>
                    <Route path="/dashboard" element={
                        <Authorization>
                            <Contact/>
                        </Authorization>
                    }/>
                    <Route path="/users" element={
                        <Authorization>
                            <Contact/>
                        </Authorization>
                    }/>
                </Route>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </LoginProvider>
    )
}

export default App;
