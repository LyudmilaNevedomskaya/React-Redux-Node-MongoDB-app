import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  // onToken = (token) => {
  //   fetch('/save-stripe-token', {
  //     method: 'POST',
  //     body: JSON.stringify(token),
  //   }).then(response => {
  //     response.json().then(data => {
  //       alert(`We are in business, ${data.email}`);
  //     });
  //   });
  // }
  render() {
    return (
      <StripeCheckout
        amount={500}
        token={(token) => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="Emaily"
        description="$5 for 5 email credits"
      >
        <button className='btn'>Add Credits</button>
      </StripeCheckout>
    )
  }
}

export default Payments;