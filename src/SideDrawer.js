import React from "react";
import './App.css';

class SideDrawer extends React.Component {
    render() {
        return (
            <div className="sideNavigation">
            <div className="app-drawer-layout mdc-top-app-bar--fixed-adjust">
            <aside className="mdc-drawer mdc-drawer--dismissible mdc-drawer--open">
                <div className="mdc-drawer__content">
                    <div className="mdc-drawer__header">
                        <h3 className="mdc-drawer__title">Select Analysis</h3>
                    </div>
                    <hr className="mdc-list-divider"/>
                    <div className="explore-data">
                        <nav className="mdc-list">
                            <a className="mdc-list-item">
                                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">multiline_chart</i>
                                <span className="mdc-list-item__text">Explore Data</span>
                            </a>
                            <a className="mdc-list-item">
                                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">assessment</i>
                                <span className="mdc-list-item__text">Corridor Summary</span>
                            </a>
                            <a className="mdc-list-item">
                                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">map</i>
                                <span className="mdc-list-item__text">Segment Analysis</span>
                            </a>
                            <hr className="mdc-list-divider"/>
                            <a className="mdc-list-item">
                                <i className="material-icons mdc-list-item__graphic"
                                   aria-hidden="true">contact_support</i>
                                <span className="mdc-list-item__text">Contact</span>
                            </a>
                            <a className="mdc-list-item">
                                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">info</i>
                                <span className="mdc-list-item__text">Additional Info</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </aside>
    </div>
    </div>
        ) ;
    }
}
export default SideDrawer;