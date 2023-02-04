

import CategoryList from "./category/CategoryList";
import CreateCategoryButton from "./category/CreateCategoryButton";

function Category(){
    return (
        <div class="projects">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="display-4 text-center">Category</h1>
                    <br />
                   <CreateCategoryButton />
                    <br />
                    <hr />
                  <CategoryList />
                   
                </div>
            </div>
        </div>
    </div>

    );
}

export default Category;