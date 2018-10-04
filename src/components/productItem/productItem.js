import React, { Component } from 'react';
import './productItem.css';
import PanelTabs from '../tabs/tabs.js';


class ProductItem extends Component {

  render() {
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-img-top">
            <img className="card-img" src="http://placehold.it/250x250" alt="Placeholder" />
          </div> {/* ends card img */}
          <div className="card-title">{this.props.title}</div>
          <div className="card-subtitle">${this.props.price}</div>
          <button className="btn btn-primary" onClick={() => {this.props.addItem(this.props.id)}}>Add to Cart</button>
          <PanelTabs product={this.props.product} />
        </div> {/* ends card */}
      </div> // ends col-4
    );
  }
}

export default ProductItem;
