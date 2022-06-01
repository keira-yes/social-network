import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Profile } from "./components/Profile/Profile";
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from "./components/Users/UsersContainer";
import './App.css';

function App() {

    return (
        <BrowserRouter>
            <div className="app">
                <div className="container">
                    <Header />
                    <Sidebar />
                    <main className="main">
                        <Routes>
                            <Route
                                path="/profile"
                                element={<Profile />}
                            />
                            <Route
                                path="/messages/*"
                                element={<MessagesContainer />}
                            />
                            <Route
                                path="/users/*"
                                element={<UsersContainer />}
                            />
                        </Routes>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
