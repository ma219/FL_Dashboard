import React from "react";
import './App.css';

class NavigationHeader extends React.Component {
    render() {
        return (
            <div className="headerNavigation">
                <header className="mdc-top-app-bar">
                    <div className="mdc-top-app-bar__row">
                        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                            {/*<button className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">menu*/}
                            {/*</button>*/}
                            <span className="mdc-top-app-bar__title">FDOT Data Dashboard</span>
                        </section>
                    </div>
                </header>
            </div>
        )
    }
}
export default NavigationHeader;