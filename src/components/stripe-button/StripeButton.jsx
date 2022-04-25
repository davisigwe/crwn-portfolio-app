import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const stripeKey =
    'pk_test_51KsH2UJprVOAbWddEg6YCC2X9MeUSqTmQCR7C1CJ0Ty9fEmsjaEpvzPKcYuSbuakm0VKYdVpXxeg1qQ1Jto9AFhZ00P9uYVEn0';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful!');
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total price is ${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={stripeKey}
      />
    </div>
  );
}

export default StripeButton;
