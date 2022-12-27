import React, { useState } from 'react'
import { remove, removeAll, selectTotal } from '../store/cartSlice'
import { removeCustomer } from '../store/customerSlice'
import { add } from '../store/placedOrderSlice'
import { useSelector, useDispatch } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'
import Avatar from 'react-avatar'
import ScrollableFeed from "react-scrollable-feed";
import Invoice from './Invoice'
import { addAllCustomer } from '../store/allCustomerSlice'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CartItems = () => {
    const dispatch = useDispatch();
    const [invoiceShow, setInvoiceShow] = useState(false);
    const customer = useSelector(state => state.customer);
    const [orderId, setOrderId] = useState("Cash-Payment");
    const [paymentId, setPaymentId] = useState("Cash-Payment");
    const [payment, setPayment] = useState(false);
    const cart = useSelector(state => state.cart);
    const total = useSelector(selectTotal);
    const tax = (5.25 / 100) * total;
    const [paymentMode, setPaymentMode] = useState(null);
    const subTotal = total + tax;


    const handleRemove = (e, id) => {
        e.preventDefault()
        console.log(id)
        dispatch(remove(id))
    }
    // console.log(cart);

    const showInvoice = () => {
        setInvoiceShow(true);
    }
    const closeInvoice = () => {
        setInvoiceShow(false);
    }

    const placeOrder = async () => {
        if (payment) {
            const newData = { name: customer[0]?.name, table: customer[0]?.tableNum, items: cart.length, time: new Date().toLocaleTimeString(), order: orderId, payment: paymentId }
            setPayment(false);
            dispatch(add(newData));
            dispatch(removeAll());
            dispatch(removeCustomer());
            const custDetails = { name: customer[0]?.name, phone: customer[0]?.phone, items: cart.length, date: new Date().toLocaleDateString(), order: orderId, payment: paymentId };
            dispatch(addAllCustomer(custDetails));

            const res = await axios.post("http://localhost:8000/api/add-customer", {
                name : customer[0]?.name, phone : customer[0]?.phone, paymentId, orderId, date: new Date().toLocaleDateString(), items : cart
            });
            // console.log(res);

        } else {
            toast.info('Payment not done!', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    const handlePayment = async () => {

        if(payment){
            return;
        }

        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        try {
            const res = await axios.post(`https://react-pos-backend.vercel.app/api/order`, {
                items: cart.length, bill: subTotal.toFixed()
            }, config);

            console.log(res);
            // console.log(res);
            // if (res.status != 200) {
            //     return;
            // }
            const options = {
                "key": "rzp_test_G3gA5dRpgezWGS", // Enter the Key ID generated from the Dashboard
                "amount": res.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": res.data.currency,
                "name": "Food Bill",
                "description": res.data.notes.desc,
                // "image": "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
                "order_id": res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "handler": function (response) {
                    setOrderId(response.razorpay_order_id);
                    setPaymentId(response.razorpay_payment_id);
                    // setSignature(response.razorpay_signature);
                    setPayment(true);
                    setPaymentMode(response.razorpay_payment_id);
                    toast.success('Payment done!', {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });

                },
                "prefill": {
                    "name": customer[0].name,
                    "email": customer[0].email,
                    // "contact": customer[0].phone
                },
            };

            var rzp1 = new window.Razorpay(options);

            rzp1.open();

            rzp1.on('payment.failed', function (response) {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
            });


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <ToastContainer />
            <ScrollableFeed >
                <div className='flex flex-col justify-between text-white'>
                    <motion.div transition={{ duration: 0.5 }} exit={{ y: "50%", opacity: 0 }} className='flex flex-col px-4 py-4 space-y-1 h-[55vh] overflow-y-scroll scrollbar-hide'>

                        {cart.length > 0 ? (
                            <>
                                <div className=''>
                                    <ul role="list" className="divide-y divide-black">
                                        <AnimatePresence>
                                            {cart.map((curr, index) => (
                                                <motion.li initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 0.2 }} exit={{ y: "50%", opacity: 0, scale: 0.5 }} key={index}>
                                                    <a href="#" className="block hover:rounded-md">
                                                        <div className="px-4 py-2">

                                                            <div className="flex items-center justify-between">
                                                                <p className="truncate text-xs font-medium text-white">{index + 1}. &nbsp;{curr.title} &nbsp; <Avatar name="Paneer Tikka" textSizeRatio={3} size='20' round="20px" /> </p>
                                                                <div className="ml-2 flex flex-shrink-0">
                                                                    <p className="inline-flex rounded-full px-2 text-xs font-semibold leading-5 text-white">
                                                                        ₹{curr.price}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="mt-2 sm:flex sm:justify-between">
                                                                <div className="sm:flex">
                                                                    <div className='flex text-xs space-x-3 items-center'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cursor-pointer w-5 h-5 bg-[#1f2544] rounded-sm p-1 ">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                                        </svg>
                                                                        <p className='font-semibold text-md'>{curr.quantity}</p>
                                                                        <svg mlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cursor-pointer w-5 h-5 bg-[#1f2544] rounded-sm p-1 ">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                                                        </svg>
                                                                    </div>
                                                                    {/* <p className="flex items-center text-sm text-gray-500">

                                                                &nbsp; &nbsp; x2
                                                            </p> */}
                                                                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">

                                                                        &nbsp;<svg xmlns="http://www.w3.org/2000/svg" onClick={(e) => handleRemove(e, curr.id)} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                        </svg>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </motion.li>
                                            ))}
                                        </AnimatePresence>
                                    </ul>
                                </div>
                                <div className='px-4 py-1'>
                                    <small className='leading-none text-[#494d55]'>Note:- Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur consectetur aliquid doloribus, at placeat aliquam earum.</small>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='flex flex-col items-center justify-center mt-24'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#474c54]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                    <small className='text-[#474c54]'>No items.</small>
                                </div>
                            </>
                        )}
                    </motion.div>
                    <div className='flex flex-col w-full'>
                        <div>
                            <div className='grid grid-cols-3 gap-0'>
                                <div className='bg-[#151a34] text-center p-2 text-sm font-semibold hover:bg-[#1f2544] cursor-pointer border border-black rounded-tl-lg'>
                                    <button>Discount</button>
                                </div>
                                <div onClick={() => {
                                    setPaymentMode("cash")
                                    setPayment(true);
                                    toast.success('Cash recieved!', {
                                        position: "top-center",
                                        autoClose: 4000,
                                        hideProgressBar: true,
                                        closeOnClick: true,
                                        pauseOnHover: false,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "dark",
                                    });
                                }} className='bg-[#151a34] text-center p-2 text-sm font-semibold hover:bg-[#1f2544] cursor-pointer border border-black'>
                                    <button>Cash</button>
                                </div>
                                <div onClick={handlePayment} className='bg-[#151a34] text-center p-2 text-sm font-semibold hover:bg-[#1f2544] cursor-pointer border border-black rounded-tr-lg'>
                                    <button onClick={handlePayment} >UPI</button>
                                </div>
                            </div>
                            <div className='flex flex-col pl-8 pr-8 py-2 space-y-2'>
                                {/* /Total  */}
                                {payment && (
                                    <p className='text-center text-xs font-semibold text-green-500'>Payment done. <small className='font-normal text-white'> Now you can place order.</small> </p>
                                )}
                                <div className='flex flex-row items-center justify-between text-xs font-bold text-gray-600 '><p>Tax 5.25%</p><p>₹{tax.toFixed(2)}</p></div>
                                <div className='flex flex-row items-center justify-between text-xs font-bold text-gray-600 '><p>Subtotal</p><p>₹{total.toFixed(2)}</p></div>
                                <div className='flex flex-row items-center justify-between text-sm font-bold '><p>Total</p><p>₹{subTotal.toFixed(2)}</p></div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-0 pt-2 text-center absolute bottom-0 w-full'>
                        <div onClick={showInvoice} className={cart.length > 0 ? `bg-[#3441d4]` : `bg-gray-500 border-r border-gray-700`}>
                            <button className={cart.length > 0 ? ' py-4 text-center pt-2' : ' py-4 text-center pt-2 cursor-not-allowed'} >KOT</button>
                        </div>
                        <div onClick={placeOrder} className={cart.length > 0 ? `bg-[#5b45b0]` : `bg-gray-500`}>
                            <button className={cart.length > 0 ? ' py-4 text-center pt-2' : ' py-4 text-center pt-2 cursor-not-allowed'}>Place Order</button>
                        </div>
                    </div>
                </div>
            </ScrollableFeed>
            {invoiceShow && <Invoice closeInvoice={closeInvoice} paymentMode={paymentMode} />}
        </div >
    )
}

export default CartItems