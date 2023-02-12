import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { selectPaymentById, updatePayment } from "./paymentSlices";

//for update
import { useParams } from "react-router-dom";

function UpdatePaymentForm(props){

    const { paymentId } = useParams( )
    const payment = useSelector((state)=>selectPaymentById(state,Number(paymentId))) 
    console.log(paymentId)
    console.log(payment)
    //New
    const [id,setId] = useState(payment?.id);
    

    const [cardNumber,setCardNumber] = useState(payment?.cardNumber);
    const [expireDate,setExpireDate] = useState(payment?.expireDate);
    const [cvc,setCvc] = useState(payment?.cvc);
    const [holderName,setHolderName] = useState(payment?.holderName);
    const [totalCost,setTotalCost] = useState(payment?.totalCost);
    const [installmentType,setInstallmentType] = useState(payment?.installmentType);
    
    const [addRequestStatus,setAddRequestStatus]= useState('idle')

    const onPaymentIdChange = e => setId(e.target.value);

    
    const onCardNumberChange = e => setCardNumber(e.target.value);
    const onExpireDateChange = e => setExpireDate(e.target.value);
    const onCvcChange = e => setCvc(e.target.value);
    const onHolerNameChange = e => setHolderName(e.target.value);
    const onTotalCostChange = e => setTotalCost(e.target.value);
    const onInsallmentTypeChange = e => setInstallmentType(e.target.value);


    const canSave = [ cardNumber,expireDate,cvc,holderName,totalCost,installmentType].every(Boolean) && addRequestStatus === 'idle'
    const isEdit = props.mode === 'edit'

    const dispatch = useDispatch();

    const onSubmit = (event)=>{
        event.preventDefault();

         
           if(canSave){
            try {
                setAddRequestStatus('pending')
                console.log("In the can save")

                dispatch(
                    //isEdit?
                    updatePayment({
                        id,
                        cardNumber,
                        expireDate,
                        cvc,
                        holderName,
                        totalCost,
                        installmentType

                    }),
                )
            }
            
                //     addNewCategory({
                //         id,
                //         categoryName,
                //         description
        
                // }),
                    // ).unwrap();
                
             catch (error) {
                console.log(error)
                
            }finally{
                setAddRequestStatus('idle')
            }

       
            setId('')
            setCardNumber('')
            setExpireDate('')
            setCvc('')
            setHolderName('')
            setTotalCost('')
            setInstallmentType('')
           }
          // console.log(canSave)
        
        }
    return (
   
        <div className="bg-light container-fluid py-5">

        <div className="container">
            <div className="row gx-5">
            <div className="col-lg-3 mb-5 mb-lg-0">
                    </div>
        <div className="col-lg-6 mb-5 mb-lg-0" >
       
      
            <h1 className="text-primary text-center mb-4">Update Payment Form</h1>
            <div className="b-light text-center rounded p-5">

                <form onSubmit={ onSubmit }>
                
                    <div className="row g-3">
                    <div className="col-12 ">

                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                name="cardNumber"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                placeholder="Payment Id" data-target="#date" data-toggle="datetimepicker"
                                                value={id}
                                        onChange = {onPaymentIdChange} />
                                        </div>
                                    </div>
                                    
                                    <div className="col-12 ">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                name="cardNumber"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                placeholder="Card Number" data-target="#date" data-toggle="datetimepicker"
                                                value={cardNumber}
                                        onChange = {onCardNumberChange} />
                                        </div>
                                    </div>

                                    <div className="col-12 ">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="date"
                                                name="contractDate"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                placeholder="Expire Date" data-target="#date" data-toggle="datetimepicker"
                                                value={expireDate}
                                        onChange = {onExpireDateChange} />
                                        </div>
                                    </div>

                                    <div className="col-12 ">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                name="contractDate"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                placeholder="CVC " data-target="#date" data-toggle="datetimepicker"
                                                value={cvc}
                                        onChange = {onCvcChange} />
                                        </div>
                                    </div>

                                    <div className="col-12 ">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                name="contractDate"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                placeholder="HolderName " data-target="#date" data-toggle="datetimepicker"
                                                value={holderName}
                                            onChange = {onHolerNameChange} />
                                        </div>
                                    </div>

                                    <div className="col-12 ">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                name="contractDate"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                placeholder="TotalCost " data-target="#date" data-toggle="datetimepicker"
                                                value={totalCost}
                                            onChange = {onTotalCostChange} />
                                        </div>
                                    </div>

                                    <div className="col-12 ">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                name="contractDate"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                placeholder="Installment Type " data-target="#date" data-toggle="datetimepicker"
                                                value={installmentType}
                                            onChange = {onInsallmentTypeChange} />
                                        </div>
                                    </div>
                        <div className="col-12">
                             <button 
                                type="submit" 
                                className="btn btn-primary w-100 py-3" 
                                disabled={!canSave}
                                //value={isEdit?'Update':'Save'}
                                
                                >Submit</button>
                        </div>
                    </div>
                    
                </form>
            </div>
            

        </div>
        </div>
           
        </div>
        </div>
     
        
        
);

}
export default UpdatePaymentForm