import { useState } from "react";
import {addNewContract} from "./contractSlice"
function AddContractForm() {

    

    

    return (

        <div className="container-fluid py-5">

            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-3 mb-5 mb-lg-0">
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0">

                        <h1 className="text-primary text-center mb-4">Make Contract</h1>
                        <div className="b-light text-center rounded p-5">

                            <form >
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <div className="Date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                name="appointmentId"
                                                placeholder="Appointment Id" data-target="#date" data-toggle="datetimepicker" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                    <div className="Date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                name="caseId"
                                                placeholder="Case Id" data-target="#date" data-toggle="datetimepicker" />
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-6">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="date"
                                                name="contractDate"
                                                className="form-control text-primary bg-white border-0 datetimepicker-input"
                                                placeholder="Date" data-target="#date" data-toggle="datetimepicker" />
                                        </div>
                                    </div>
                                    <div className="col-12">

                                        <textarea type="text"
                                            className="form-control text-primary bg-white border-0 datetimepicker-input"
                                            rows={10}
                                            name="conDescription"
                                            placeholder="Contract Description" data-target="#time" data-toggle="datetimepicker" />

                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Make A Contract</button>
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
export default AddContractForm;