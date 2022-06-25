import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HeaderContainer from "./components/Header/HeaderContainer";
import { Sidebar } from "./components/Sidebar/Sidebar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from "./components/Users/UsersContainer";
import { Login } from './components/Login/Login';
import './App.css';

function App() {

    return (
        <BrowserRouter>
            <div className="app">
                <div className="container">
                    <HeaderContainer />
                    <Sidebar />
                    <main className="main">
                        <Routes>
                            <Route
                                path="profile"
                                element={<Login />}
                            />
                            <Route
                                path="messages"
                                element={<MessagesContainer />}
                            />
                            <Route
                                path="users"
                                element={<UsersContainer />}
                            />
                            <Route
                                path="users/:id"
                                element={<ProfileContainer />}
                            />
                            <Route
                                path="login"
                                element={<Login />}
                            />
                        </Routes>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
