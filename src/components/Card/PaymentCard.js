import PaymentList from "../payment/PaymentList";



function PaymentCard(){
    return (
        <div className="container-fluid py-5">
        <div className="container">
            {/* <div className="text-center mx-auto mb-5">
                <h1 className="text-primary display-4">Category List</h1>
            </div> */}
            <div className="row g-5">
            
            <PaymentList />
            </div>
            </div>
    </div>
    );
}
export default PaymentCard;