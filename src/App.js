import { Route, Routes } from "react-router-dom";

import AddCategoryForm from "./components/category/AddCategoryForm";

import Layout from "./layout/Layout"

import Category from "./components/Category";
import UpdateCategoryForm from "./components/category/UpdateCategoryForm";
import Court from "./components/Court";
import AddCourtForm from "./components/court/AddCourtForm";
import UpdateCourtForm from "./components/court/UpdateCourtForm";
import Footer from "./components/footer/Footer";
import Payment from "./components/Payment";
import AddPaymentForm from "./components/payment/AddPaymentForm";
import UpdatePaymentForm from "./components/payment/UpdatePaymentForm";
import AddContractForm from "./components/Contract/AddContractForm";
import EditContractForm from "./components/Contract/EditContractForm";
import AddCaseForm from "./components/Case/AddCaseForm";
import EditCaseForm from "./components/Case/EditCaseForm";
import ContractList from "./components/Contract/ContractList";
import CaseList from "./components/Case/CaseList";

function App() {
  return (
  
      <div>
      
          <Layout />
          
          
          <Routes path = '/'>
          <Route>

                <Route path='categories' element={<Category />} />
                <Route path="category">
                  <Route path='create' element= {<AddCategoryForm />} />
                  <Route path='edit/:categoryId' element= {<UpdateCategoryForm />} />
                </Route>

                <Route path='courts' element={<Court />} />
                <Route path="court">
                  <Route path='create' element= {<AddCourtForm />} />
                  <Route path='edit/:courtId' element= {<UpdateCourtForm />} />
                </Route>

                <Route path='payments' element={<Payment />} />
                <Route path="payment">
                  <Route path='create' element= {<AddPaymentForm />} />
                  <Route path='edit/:paymentId' element= {<UpdatePaymentForm />} />
                </Route>

                <Route path='/contract' element={<ContractList />} />

<Route path='/contract'>
  <Route path='create' element={<AddContractForm/>} />
  <Route path='edit/:contractId' element={<EditContractForm/>} />
</Route>

<Route path='/case' element={<CaseList />} />
<Route path='/case'>
  <Route path='create/:contractId' element={<AddCaseForm/>} />
  <Route path='edit/:caseId' element={<EditCaseForm/>} />
</Route>

                </Route>
          </Routes>
           {/* <Footer /> */}
      </div>
      

           
      
    
    
  );
}

export default App;
