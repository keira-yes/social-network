import React, { useEffect, lazy, Suspense } from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Preloader from "./components/Preloader/Preloader";
import NotFound from "./components/NotFound/NotFound";
import { initializeApp } from "./redux/reducers/appReducer";
import "./App.css";

const MyProfileContainer = lazy(() => import('./components/Profile/MyProfile/MyProfileContainer'));
const Dialogs = lazy(() => import('./components/Dialogs/Dialogs'));
const Messages = lazy(() => import('./components/Messages/Messages'));
const Users = lazy(() => import('./components/Users/Users'));
const Profile = lazy(() => import('./components/Profile/Profile'));
const Login = lazy(() => import('./components/Login/Login'));

const App = ({ initializeApp, isInitialized }) => {

    useEffect(() => {
        initializeApp();
    }, [isInitialized]);

    if (!isInitialized) return <Preloader />

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="app">
                <div className="container">
                    <Header />
                    <Sidebar />
                    <main className="main">
                        <Suspense fallback={<Preloader />}>
                            <Routes>
                                <Route path="/" element={<Navigate to="/profile" />} />
                                <Route path="profile" element={<MyProfileContainer />} />
                                <Route path="messages" element={<Dialogs />} />
                                <Route path="messages/:id" element={<Messages />} />
                                <Route path="users" element={<Users />} />
                                <Route path="users/:id" element={<Profile />} />
                                <Route path="login" element={<Login />} />
                                <Route path='*' element={<NotFound />} />
                            </Routes>
                        </Suspense>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}

const mapStateToProps = state => {
    return {
        isInitialized: state.appReducer.isInitialized,
    }
}

export default connect(mapStateToProps, { initializeApp })(App);
