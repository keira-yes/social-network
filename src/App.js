import './App.css';
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Profile } from "./components/Profile/Profile";
import { Messages } from './components/Messages/Messages';

function App() {
    return (
        <div className="app">
            <div className="container">
                <Header />
                <Sidebar />
                <main className="main">
                    {/*<Profile />*/}
                    <Messages />
                </main>
            </div>
        </div>
    );
}

export default App;
