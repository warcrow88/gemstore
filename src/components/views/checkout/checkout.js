import React, { Component } from 'react';
import './checkout.css';


class Checkout extends Component {

  render() {
    return (
      <div className="Checkout">
        <h3>   ${this.props.total}</h3>
      </div>
    );
  }
}

export default Checkout;
