


import CategoryTable from "./table/CategoryTable";


function Category(){
    return (
        <div class="projects">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="display-4 text-center text-primary">Category List</h1>
                    <br />
                   

                    <br />
                    <hr />
                  <CategoryTable />
                   
                </div>
            </div>
        </div>
    </div>

    );
}

export default Category;