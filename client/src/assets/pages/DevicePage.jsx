import React from 'react';
import {Outlet} from 'react-router-dom';

const DevicePage = () => {
    return (
        <div>
            DevicePage
            <Outlet/>           {/*Temp - Вложенные маршруты будут тут*/}
        </div>
    );
};

export default DevicePage;