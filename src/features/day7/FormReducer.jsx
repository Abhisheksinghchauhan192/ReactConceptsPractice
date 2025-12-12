
export function formReducer(state,action){

    switch(action.type){

        // set all the form input changes..  Generic Change Handler
        case 'field_changed':{
            const{field,value}  = action

            return {...state,[field]:value}
        }
        // set errors in the form
        
        case 'set_errors':{
            return {...state,errors:action.errors}
        }

        // reset the form 
        case 'reset':{
            return initialFormData
        }

        default:
            return state
    }
}



export  const initialFormData = {

    firstName:'',
    lastName:'',
    email:'',
    city:'',
    password:'',
    //Error Handeling...
    errors:{
        email:null,
        password:null
    },
} 

