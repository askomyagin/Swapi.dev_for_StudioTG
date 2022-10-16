import HomePage from './components/homePage';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/notFound';
import Page from './components/page';

function App() {
    return (
        <>
            <Routes>
                <Route>
                    <Route
                        path="/"
                        element={
                            <Page>
                                <HomePage />
                            </Page>
                        }
                    />
                    <Route
                        path="/home"
                        element={
                            <Page>
                                <Home />
                            </Page>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
