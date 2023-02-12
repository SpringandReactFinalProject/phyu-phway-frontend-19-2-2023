import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import CategoryItem from "./CategoryItem";
import { selectAllCategories,getCategoryError,getCategoryStatus, fetchCategories } from "./categorySlices";


function CategoryList(){
    const dispatch = useDispatch();

    const categories = useSelector(selectAllCategories );
    const categoryStatus = useSelector(getCategoryStatus);
    const error = useSelector(getCategoryError);

    useEffect(()=>{
        if(categoryStatus === 'idle'){
            dispatch(fetchCategories())
        }
    },[categoryStatus,dispatch]
    );

    let content;

    if(categoryStatus === 'loading'){
        content = (<p>Loading......</p>)
    }

    if(categoryStatus === 'succeeded'){
        content = categories.map(
            (category)=>(
                
                    <CategoryItem
                    id = {category.id}
                    categoryName = {category.categoryName}
                    description = {category.description}
                   
                  
                    />)
                   
    
    
                );
            }
        
    
    if(categoryStatus === 'failed'){
        content = (<p>{error}</p>)
    }

        
   

  
    return content;
}
export default CategoryList;

