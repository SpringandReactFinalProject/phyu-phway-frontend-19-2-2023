import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import PaymentList from "../payment/PaymentList";

function PaymentTable() {
    return (
        <div className="ms-5 me-2">
            <div className="col-md-8 mb-3">
                <Link to="/payment/create">Add Payment</Link>
            </div>
            <div className="col-md-4">

            </div>
            <Table striped bordered hover variant="info">
                <thead className="text-center text-primary">
                    <th>Id</th>
                    <th>Card Number</th>
                    <th>Expire Date</th>
                    <th>CVC</th>
                    <th>Holder Name</th>
                    <th>Total Cost</th>
                    <th>Installment Type</th>

                    <th>Action</th>
                </thead>
                <tbody>
                    <PaymentList />
                </tbody>
            </Table>
        </div>
        //     <div className="bg-primary container-fluid py-5">
        //     <div className="container">
        //         <div className="text-center mx-auto mb-5">
        //             <h1 className="text-primary display-4">Appointment List</h1>
        //         </div>
        //         <div className="row g-5">
        //         <AppointmentList/>
        //         </div>
        //         </div>
        // </div>
    );
}
export default PaymentTable;