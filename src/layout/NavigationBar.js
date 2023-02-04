import { Link } from "react-router-dom";

function NavigationBar(){
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
            <Link to='/dashboard' className="navbar-brand">
                LAWYER LANDING
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to='/categories' className="nav-link">
                            Category
                        </Link>
                    </li>
                </ul>

                
            </div>
        </div>
    </nav>
    );

    
}
export default NavigationBar;