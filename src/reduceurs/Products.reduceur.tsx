import { useNavigate } from 'react-router-dom';


function ProductReducer(state, action) {
    switch (action.type) {
      case 'ADD_Product': {
        return {
          ...state,
          Products: [
            ...state.Products,
            {
                id: crypto.randomUUID(),name:action.value,
                done:false,
                editMode:false
            },
          ],
        };
      }
      case 'Detail_Product': {
        console.log(state);
        return {
          ...state
          
         
        };
      }
    
    
      default: {
        throw new Error('action inconnue');
      }
    }
  }
  
  export default ProductReducer;