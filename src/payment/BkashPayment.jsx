/* eslint-disable no-unused-vars */
import axios from 'axios'
import React from 'react'

const BkashPayment = () => {

    const pay = async () => {
        try {
            const { data } = await axios.post('http://localhost:5000/api/bkash/payment/create', { amount: 50, orderId: 1 }, { withCredentials: true })
            window.location.href = data.bkashURL
        } catch (error) {
            console.log(error.response.data)
        }
    }

    return (
        <div>
            <button onClick={() => { pay() }} >Payment</button>
        </div>
    )
}

export default BkashPayment
