import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { ProfileForm } from "./components/Profile/ProfileForm";
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
                            <Route path="profile">
                                <Route path="" element={<ProfileForm />} />
                                <Route path=":id" element={<ProfileContainer />} />
                            </Route>
                            <Route
                                path="messages"
                                element={<MessagesContainer />}
                            />
                            <Route
                                path="users"
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
