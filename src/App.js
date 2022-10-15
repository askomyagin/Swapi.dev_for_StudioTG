import Header from './components/header';
import HomePage from './components/homePage';
import Home from './components/home';
import { Route, Routes, Navigate } from 'react-router-dom';
import NotFound from './components/notFound';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
                <Route path="/404" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
