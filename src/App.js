import './App.css';
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Profile } from "./components/Profile";

function App() {
    return (
        <div className="app">
            <div className="container">
                <Header />
                <Sidebar />
                <main className="main">
                    <Profile />
                </main>
            </div>
        </div>
    );
}

export default App;
