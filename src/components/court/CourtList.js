import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import CourtItem from "./CourtItem";

import { selectAllCourts,getCourtError,getCourtStatus, fetchCourts} from "./courtSlices";


function CourtList(){
    const dispatch = useDispatch();

    const courts = useSelector(selectAllCourts );
    const courtStatus = useSelector(getCourtStatus);
    const error = useSelector(getCourtError);

    useEffect(()=>{
        if(courtStatus === 'idle'){
            dispatch(fetchCourts())
        }
    },[courtStatus,dispatch]
    );

    let content;

    if(courtStatus === 'loading'){
        content = (<p>Loading......</p>)
    }

    if(courtStatus === 'succeeded'){
        content = courts.map(
            (court)=>(
                
                    <CourtItem
                    id = {court.id}
                    courtName = {court.courtName}
                    address = {court.address}
                    township = {court.township}
                    city = {court.city}
                   
                  
                    />)
                   
    
    
                );
            }
        
    
    if(courtStatus === 'failed'){
        content = (<p>{error}</p>)
    }

        
   

  
    return content;
}
export default CourtList;

