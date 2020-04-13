import React from 'react';
import './App.css';
import NavigationHeader from './header';
import SideDrawer from "./SideDrawer";
import Cards from "./Cards";

function App() {
    return (
        <div className="App">
            <div className="headerNav">
                <NavigationHeader/>
            </div>
            <div className="sideNav">
                <SideDrawer/>
            </div>
            <div id="wrapper" className="wrapper">
                <div className="box0">
                    1
                    <Cards/>
                </div>
            </div>
            <div id="wrapper" className="wrapper">
                <div className="box1">
                    2
                    <Cards/>
                </div>
            </div>
            <div id="wrapper" className="wrapper">
                <div className="box1">
                    3
                    <Cards/>
                </div>
            </div>
        </div>
    );
}

export default App;
