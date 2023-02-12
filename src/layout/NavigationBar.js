import { Link } from "react-router-dom";

function NavigationBar(){
    
    

    return(
        
        

        <div className="container-fluid sticky-top bg-white shadow-sm">
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                <Link to="/dashboard" className="navbar-brand">
                    <h1 className="m-0 text-uppercase text-primary">
                    <i className="fa-solid fa-scale-balanced"></i>Lawyer Landing</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                   
                    <div className="navbar-nav ms-auto py-0">
                    
                    <Link to="/contract" className="nav-item nav-link"> Contract </Link> 
                        <Link to="/case" className="nav-item nav-link"> Case </Link>  

                    <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Category</a>
                            <div class="dropdown-menu m-0">
                            <Link to="/categories" class="dropdown-item ">Category List</Link>
                            <Link to='/category/create' class="dropdown-item ">
                            Create Category
                            </Link>
                                
                            </div>
                            </div>

                            <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Court</a>
                            <div class="dropdown-menu m-0">
                            <Link to="/courts" class="dropdown-item ">Court List</Link>
                            <Link to='/court/create' class="dropdown-item ">
                            Create Court
                            </Link>
                                
                            </div>
                            </div>

                            <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Payment</a>
                            <div class="dropdown-menu m-0">
                            <Link to="/payments" class="dropdown-item ">Payment List</Link>
                            <Link to='/payment/create' class="dropdown-item ">
                            Create Payment
                            </Link>

                            
                                
                            </div>
                            </div>
                        
                                                
                        

                    </div>
                </div>
            </nav>
        </div>

        
        
    </div>


    );

    
}
export default NavigationBar;