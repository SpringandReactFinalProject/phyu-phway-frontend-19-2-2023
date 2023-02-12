import { useSelector} from "react-redux";
import { fetchCases, getCaseError, getCaseStatus, selectAllCase } from "./caseLawSlice";
import CaseItem from "./CaseItem";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function CaseList() {
    
    
         
    const cases = useSelector(selectAllCase);
    
    const caseStatus = useSelector(getCaseStatus);
    const error=useSelector(getCaseError);    
    console.log(cases)

    
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(caseStatus === 'idle'){
            dispatch(fetchCases())
        }
        
            
            
        
    },[caseStatus,dispatch]);

    let content;

    if(caseStatus === 'loading'){
        content = (<p>Loading....</p>);
    }

    

    if(caseStatus === 'succeeded'){
        
        content = cases.map(
            (lawCase) => (
                <CaseItem                    
                    id={lawCase.id}
                    caseTitle={lawCase.caseTitle}
                    attenCourtRoom={lawCase.attenCourtRoom}
                    startDate={lawCase.startDate}
                    startTime={lawCase.startTime}
                    endDate={lawCase.endDate}
                    endTime={lawCase.endTime}
                    description={lawCase.description}  
                        
                />));
    }

    if(caseStatus === 'failed'){
        content = (<p>{error}</p>);
    }
   
    
    return content;

}

export default CaseList;