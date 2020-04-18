import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
require('./styles.css');

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />

        <form>
            <input
            type="tel"
            name="number"
            placeholder="Card Number (e.g.: 1111 1111 1111 1111)"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            />
            
            <input
            type="name"
            name="name"
            placeholder="Name (e.g.: Bubber Bubbersen)"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            />
           
            <input
            type="expiry-date"
            name="expiry"
            placeholder="Expiry Date (e.g.: 11/11)"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            />
            
            <input
            type="cvc"
            name="cvc"
            placeholder="cvc (e.g.: 123)"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            />

        </form>
      </div>
      
    );
  }
}