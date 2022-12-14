import HomePage from './homePage';
import Home from './home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './notFound';
import Page from './page';

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
