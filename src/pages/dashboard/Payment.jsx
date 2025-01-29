import React from 'react';
import Heading from './../../components/Shared/Heading';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckOutForm from '../../components/stripe/CheckOutForm';


// const stripePromiss = loadStripe(`${import.meta.VITE_PAYMENT}`)
const stripePromiss = loadStripe('')

const Payment = () => {

    return (
        <div>
            <Heading heading={"Pay Now"} />
            <div>
                <Elements stripe={stripePromiss}>
                    <CheckOutForm/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;