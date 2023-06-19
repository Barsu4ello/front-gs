import React from 'react';
import {StartPage} from "./pages/StartPage/StartPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthPage} from "./pages/AuthPage/AuthPage";
import {MyWorldsPage} from "./pages/TestPage/MyWorldsPage";
import {Provider} from "react-redux";
import {store} from "./store";

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<StartPage/>}/>
                    <Route path="auth" element={<AuthPage/>}/>
                    <Route path="test" element={<MyWorldsPage/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
