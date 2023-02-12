import CourtCard from "./Card/CourtCard";
import CourtTable from "./table/CourtTable";
function Court(){
    return(
        <div class="projects">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="display-4 text-center text-primary">Court List</h1>
                    <br />
                   

                    <br />
                    <hr />
                    
                 <CourtTable />
                   
                </div>
            </div>
        </div>
    </div>
    );

}
export default Court;