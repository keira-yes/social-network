import './App.css';

function App() {
    return (
        <div className="app">
            <div className="container">
                <header className="header">Header</header>
                    <aside className="sidebar">
                        <nav className="nav">
                            <ul className="nav__list">
                                <li className="nav__item">
                                    <a href="#" className="nav__link">Profile</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#" className="nav__link">Messages</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#" className="nav__link">News</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#" className="nav__link">Music</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#" className="nav__link">Settings</a>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                <main className="main">Main</main>
            </div>
        </div>
    );
}

export default App;
