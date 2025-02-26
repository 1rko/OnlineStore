import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Admin from "../pages/Admin.jsx";
import Auth from "../pages/Auth.jsx";
import Basket from "../pages/Basket.jsx";
import Shop from "../pages/Shop.jsx";
import DevicePage from "../pages/DevicePage.jsx";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                {/* Основные маршруты */}
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Auth />} />
                <Route path="/registration" element={<Auth />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/shop" element={<Shop />} />

                {/* Вложенные маршруты */}
                <Route path="/devicepage" element={<DevicePage />}>
                    <Route path=":id" element={<DevicePage />} />       {/* Заменить на список или что-л*/}
                </Route>

                <Route path="*" element={<Shop />} />
            </Routes>
        </div>
    );
};

export default AppRouter;