import React from 'react';
import Header from "../../components/Header/Header";
import Filters from "../../components/Filters/Filters";
import MainScreen from "../../components/MainScreen/MainScreen";

const FirstScreen = () => {
    return (
        <div>
            <Header/>
            <Filters/>
            <MainScreen/>
        </div>
    );
};

export default FirstScreen;