import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Profile } from "./components/Profile/Profile";
import { Users } from "./components/Users/Users";
import MessagesContainer from './components/Messages/MessagesContainer';
import './App.css';

function App({ store }) {

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
                                element={<Profile store={store} />}
                            />
                            <Route
                                path="/messages/*"
                                element={<MessagesContainer store={store} />}
                            />
                            <Route
                                path="/users/*"
                                element={<Users store={store} />}
                            />
                        </Routes>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
