import React, { Component } from 'react';


class Description extends Component {

  render() {
    return (
      <div className="Description">
        {this.props.product.description}
      </div> // ends Description div
    );
  }
}

export default Description;
