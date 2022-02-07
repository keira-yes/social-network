import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Profile } from "./components/Profile/Profile";
import { Messages } from './components/Messages/Messages';
import './App.css';

const posts = [
    {id: 1, message: "Hello World!", likes: 5},
    {id: 2, message: "My first post...", likes: 12}
]

const dialogs = [
    {id: 1, name: "Name 1"},
    {id: 2, name: "Name 2"},
    {id: 3, name: "Name 3"},
    {id: 4, name: "Name 4"},
    {id: 5, name: "Name 5"},
    {id: 6, name: "Name 6"}
]

const messages = [
    {id: 1, message: "Hi world"},
    {id: 2, message: "How are you doing"},
    {id: 3, message: "Miss you"}
]

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="container">
                    <Header />
                    <Sidebar />
                    <main className="main">
                        <Routes>
                            <Route path="/profile" element={<Profile posts={posts} />} />
                            <Route path="/messages/*" element={<Messages dialogs={dialogs} messages={messages} />} />
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
