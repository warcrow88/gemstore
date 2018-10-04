import React, { Component } from 'react';
import './tabs.css';
import Description from './description/description.js';
import Specs from './specs/specs.js';
import Reviews from './reviews/reviews.js';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';


class PanelTabs extends Component {
  // javascript = es6 arrow syntax automatically binds, allowing instances of this component to ahve their own handleClick method.  Kind of like the self parameter in python.
  // this function prevents refresh of the page but still performs the action you want want you click on card tabs
  handleClick = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="PanelTabs">
        <Tabs defaultIndex={0} selectedTabClassName='active'>
          {/* tab list renders what you see for the tab button */}
          <TabList>
            <ul className="nav nav-tabs">
              {/* render Description button */}
              <Tab className="nav-item">
                <a onClick={this.handleClick} className="nav-link" href="/">Description</a>
              </Tab>
              {/* render Reviews button */}
              <Tab className="nav-item">
                <a onClick={this.handleClick} className="nav-link" href="/">Reviews</a>
              </Tab>
              {/* render Specs button */}
              <Tab className="nav-item">
                <a onClick={this.handleClick} className="nav-link" href="/">Specs</a>
              </Tab>
            </ul>
          </TabList>
          {/* tab panel renders the proper component to show the information on that tab */}
          <TabPanel><Description product={this.props.product} /></ TabPanel>
          <TabPanel><Reviews product={this.props.product} /></ TabPanel>
          <TabPanel><Specs /></ TabPanel>
        </Tabs>
      </div> // ends PanelTabs div
    );
  }
}

export default PanelTabs;
