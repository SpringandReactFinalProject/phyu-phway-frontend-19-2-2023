import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { deleteContract } from "./contractSlice";
import { useState } from "react";
import ConfirmModal from "../../utility/ConfirmModal";
import Backdrop from "../../utility/Backdrop";
import contractImg from "./img/contract.jpg";

function ContractItem(props){
   

    const [isModalOpen,setModalOpen] = useState(false)
    const dispatch = useDispatch();

    function deleteHandler(){
        setModalOpen(true);
    }

    function backdropHandler(){
        setModalOpen(false);
    }

    function cancelHandler(){
        setModalOpen(false);
    }

    function confirmHandler(){
        dispatch(deleteContract({contractId:props.id})).unwrap()

        setModalOpen(false)
    }

   

    return (
        <div className="row bg-primary">
        
                <div className="col-auto">
                    <span className="mx-auto">{props.id}</span>
                </div>
                <div className="col-auto">                   
                    <img  className="img-fluid" src={contractImg} alt="BigCo Inc. logo"/>                    
                    <h3>{props.conDescription}</h3>
                    <p>{props.contractDate}</p>                    
                </div>
                <div className="col-auto">
                    <ul className="list-group">
                        <Link to={`/case/create/${props.id}`} onClick="">
                            <li className="list-group-item board">
                                <i className="fa fa-flag-checkered pr-1">Define Case </i>
                            </li>
                        </Link>
                        <Link to={`/contract/edit/${props.id}`}>
                            <li className="list-group-item update">
                                <i className="fa fa-edit pr-1">Update Contract Info</i>
                            </li>
                        </Link>
                        <Link onClick={deleteHandler}>
                            <li className="list-group-item delete">
                                <i className="fa fa-minus-circle pr-1">Delete Contract</i>
                            </li>
                        </Link>
                    </ul>
                    {isModalOpen && <ConfirmModal onCancel={cancelHandler} onConfirm={confirmHandler}/>}
                    {isModalOpen && <Backdrop onBackdrop={backdropHandler}/>} 
                </div>
            
            </div>
  
    );
}

export default ContractItem;