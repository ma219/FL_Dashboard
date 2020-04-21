import React, {Component} from 'react';
import './App.css';
import NavigationHeader from './header';
import SideDrawer from "./SideDrawer";
/*
this component just holds the top navigation bar and the side
navigation bar; which are always present.
The component SideDrawer holds the state
 */
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="headerNav">
                    <NavigationHeader/>
                </div>
                <div>
                    <SideDrawer/>
                </div>
            </div>
        );
    }
}


export default App;
