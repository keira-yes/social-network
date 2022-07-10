import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import HeaderContainer from "./components/Header/HeaderContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import Preloader from "./components/Preloader/Preloader";
import { initializeApp } from "./redux/reducers/appReducer";
import "./App.css";

const MyProfileContainer = lazy(() => import('./components/Profile/MyProfile/MyProfileContainer'));
const MessagesContainer = lazy(() => import('./components/Messages/MessagesContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const LoginContainer = lazy(() => import('./components/Login/LoginContainer'));

const App = ({ initializeApp, isInitialized }) => {

    useEffect(() => {
        initializeApp();
    }, [isInitialized]);

    if (!isInitialized) return <Preloader />

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="app">
                <div className="container">
                    <HeaderContainer />
                    <Sidebar />
                    <main className="main">
                        <Suspense fallback={<Preloader />}>
                            <Routes>
                                <Route
                                    path="profile"
                                    element={<MyProfileContainer />}
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
                                    element={<LoginContainer />}
                                />
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
