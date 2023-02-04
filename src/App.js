import { Route, Routes } from "react-router-dom";

import AddCategoryForm from "./components/category/AddCategoryForm";

import Layout from "./layout/Layout"
import Category from "./components/Category";




function App() {
  return (
  
      <div>
      
          <Layout />
          
          <Routes path = '/'>
          <Route>

                <Route path='categories' element={<Category />} />

                <Route path="category">
                  <Route path='create' element= {<AddCategoryForm />} />
                  <Route path='edit/:categoryId' element= {<AddCategoryForm mode='edit' />} />
                </Route>
                </Route>
          </Routes>
      </div>
      

           
      
    
    
  );
}

export default App;
