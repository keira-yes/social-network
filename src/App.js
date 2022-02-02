import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Profile } from "./components/Profile/Profile";
import { Messages } from './components/Messages/Messages';
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
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/messages" element={<Messages />} />
                            {/*<Route path="/messages" element={<News />} />*/}
                            {/*<Route path="/messages" element={<Music />} />*/}
                            {/*<Route path="/messages" element={<Settings />} />*/}
                        </Routes>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
