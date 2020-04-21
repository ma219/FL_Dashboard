import './App';
import React from "react";
import Cards from "./Cards";

/*
this is the Centerstage component.  It gets the state from SideDrawer as a prop and
will render the number of necessary cards based on that prop.
 */
class CenterStage extends React.Component {

    render() {
        // gets the value of cardIdx from the prop passed from the parent (<Sidedrawer/>)
        const cardIdx = this.props.cardIdx;
        console.log(cardIdx)
        if (cardIdx === 1) {
            return (
                <div><Cards/></div>
            );
        } else if (cardIdx === 2) {
            return <div>
                <Cards/>
                <Cards/>
            </div>
        } else {
            return (
                <div>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </div>
            )
        }
    }
}


export default CenterStage;