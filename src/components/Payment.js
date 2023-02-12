
import PaymentCard from "./Card/PaymentCard";
import PaymentTable from "./table/PaymentTable";
function Payment(){
    return(
        <div class="projects">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="display-4 text-center text-primary">Payment List</h1>
                    <br />
                   

                    <br />
                    <hr />
                    
                 <PaymentTable />
                   
                </div>
            </div>
        </div>
    </div>
    );

}
export default Payment;