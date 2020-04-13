import './App';
import React from "react";

class Cards extends React.Component {
    render() {
       return (
           <div className="cardLayout">
               <div className="mdc-card">
                   <div className="mdc-card__primary-action" tabIndex="0">
                   </div>
               </div>
           </div>
       )
    }
}
export default Cards;