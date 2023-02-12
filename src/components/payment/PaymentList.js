import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import PaymentItem from "./PaymentItem";
import { selectAllPayments,getPaymentError,getPaymentStatus,fetchPayments } from "./paymentSlices";

function PaymentList(){

    const dispatch = useDispatch();

    const payments = useSelector(selectAllPayments );
    const paymentStatus = useSelector(getPaymentStatus);
    const error = useSelector(getPaymentError);

    useEffect(()=>{
        if(paymentStatus === 'idle'){
            dispatch(fetchPayments())
        }
    },[paymentStatus,dispatch]
    );

    let content;

    if(paymentStatus === 'loading'){
        content = (<p>Loading......</p>)
    }

    if(paymentStatus === 'succeeded'){
        content = payments.map(
            (payment)=>(
                
                    <PaymentItem
                    id = {payment.id}
                    cardNumber = {payment.cardNumber}
                    expireDate = {payment.expireDate}
                    cvc = {payment.cvc}
                    holderName = {payment.holderName}
                    totalCost = {payment.totalCost}
                    installmentType = {payment.installmentType}

                   
                  
                    />)
                   
    
    
                );
            }
        
    
    if(paymentStatus === 'failed'){
        content = (<p>{error}</p>)
    }

        
   

  
    return content;

}
export default PaymentList