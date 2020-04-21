import React from "react";
import './App.css';
import CenterStage from "./CenterStage";

/*
This is the Parent component.  It is responsible for setting and updating the state {cardIdx}
Updating the state will determine how many figures/graphs are shown
state 1 = 1 graph shown
state 2 = 2 graphs shown, ect...
The state is passed to the centerstage component, which will conditionally render cards
based on the value of the state
 */

class SideDrawer extends React.Component {
    constructor(props) {
        super(props);
        // Sidedrawer owns state so it can pass it as props to centerstage
        this.state = {
            cardIdx: 1
        };
    }

    stateUpdate(cardIdx) {
        this.setState({cardIdx: cardIdx})
        console.log(cardIdx)
    }

    render() {
        const cardIdx = this.state.cardIdx;
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
                                    <a className="mdc-list-item" href="#" onClick={() => this.stateUpdate(1)}>

                                        <i className="material-icons mdc-list-item__graphic"
                                           aria-hidden="true">multiline_chart</i>
                                        <span className="mdc-list-item__text">Explore Data</span>
                                    </a>
                                    <a className="mdc-list-item" href="#" onClick={() => this.stateUpdate(2)}>
                                        <i className="material-icons mdc-list-item__graphic"
                                           aria-hidden="true">assessment</i>
                                        <span className="mdc-list-item__text">Corridor Summary</span>
                                    </a>
                                    <a className="mdc-list-item" href="#" onClick={() => this.stateUpdate(3)}>
                                        <i className="material-icons mdc-list-item__graphic"
                                           aria-hidden="true">map</i>
                                        <span className="mdc-list-item__text">Segment Analysis</span>
                                    </a>
                                    <hr className="mdc-list-divider"/>
                                    <a className="mdc-list-item" href="#">
                                        <i className="material-icons mdc-list-item__graphic"
                                           aria-hidden="true">contact_support</i>
                                        <span className="mdc-list-item__text">Contact</span>
                                    </a>
                                    <a className="mdc-list-item" href="#">
                                        <i className="material-icons mdc-list-item__graphic"
                                           aria-hidden="true">info</i>
                                        <span className="mdc-list-item__text">Additional Info</span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </aside>
                </div>
                <div className="wrapper">
                    {/*passing the value of the cardIdx as a prop to centerstage*/}
                    <CenterStage cardIdx={cardIdx}/>
                </div>
            </div>
        );
    }
}

export default SideDrawer;
