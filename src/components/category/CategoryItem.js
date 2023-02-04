import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCategory } from "./categorySlices";

function CategoryItem(props){

    const dispatch = useDispatch()
    return(
        
        
        <div class="container-fluid py-9" >
        <div class="container">
            
            <div class="row g-10">
                <div class="col-lg-4 col-md-6">
                    <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="service-icon mb-4">
                            <i class="fa fa-2x fa-user-md text-white"></i>
                        </div>
                       
                        <h4 class="mb-3">{props.categoryName}</h4>
                        <p class="m-0">{props.description}</p>
                        <p class="m-0">{props.createdAt}</p>
                        <p class="m-0">{props.updatedAt}</p>
                        <a class="btn btn-lg btn-primary rounded-pill" href="">
                            <i class="bi bi-arrow-right"></i>
                        </a>
                      <tr>  <Link to={`/category/edit/${props.id}`} >
                        <input type="submit" value = "Edit"/>
                      </Link>
                        <a onClick={()=>{dispatch(deleteCategory(props.id))}}>
                        <input type="submit" value = "Delete"/></a></tr>
                    </div>
                </div>
               
            </div>
        </div>
        </div>
      
        );
        }
        
        export default CategoryItem;
    
 /*
    return (
       
        <div class="container mt-5">
		<table >
        
        
            <thead>
                <tr>
                <th>Category Name</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>   
                
            </thead>
            
            <tbody>
            <tr>
                    <td>{props.categoryName}</td>
                    <td>{props.description}</td>
</tr>
            </tbody>
        </table>
        </div>
       
    

      
        
      
    );
    */
   /*
    return (
        <div className="container">
        <div className="card card-body bg-light mb-3">
            <div className="row">
                <div className="col-2">
                    <span className="mx-auto">React</span>
                </div>
                <div className="col-lg-6 col-md-4 col-8">
                    <h3>{props.categoryName}</h3>
                    <p>{props.description}</p>
                    
                </div>
                <div className="col-md-4 d-none d-lg-block">
                    <ul className="list-group">
                        
                       
                    </ul>
                    
                </div>
            </div>
        </div>
        
    </div>
    );
    
}
*/
