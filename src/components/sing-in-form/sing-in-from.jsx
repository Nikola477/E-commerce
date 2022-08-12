import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth,signInWithGooglePopup,signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import Button from '../button/button.component';


import './sign-in-form.style.scss';

const defaultFormFields = {
   
    email: '',
    password: '',
  
}
const SingInForm = () => {
   const [formFields , setFormFields] = useState(defaultFormFields);
   const { email, password } = formFields;
 

   const resetFormFileds = () => {
    setFormFields(defaultFormFields);
   }

   const singInWithGoogle = async () => { 
    await signInWithGooglePopup();
    
};


   const handleSubmit = async (event) => {
       event.preventDefault();
     

       try {
        const {user} = await signInAuthUserWithEmailAndPassword(email, password);
       


        resetFormFileds();
       } 
       catch (error) { 
        switch(error.code) {
            case 'auth/wrong-password':
                alert('incorrect password for email ' );
                break;
            case 'auth/user-not-found': 
                alert('incorrect email, user not found');
                break;    
            default: 
            console.log(error.message);    
        }
       
    }

   }
   
   const handleChange = (event) => {
      const {name , value} = event.target;
      setFormFields({...formFields, [name]: value})
    };

    return (
       <div className="sign-up-container">
        <h2>Already have an account?</h2>
        <span>Sing up with your email and password</span>
        <form onSubmit={handleSubmit}>
        

            <FormInput 
            label="Email"
            type="email" 
            required
            onChange={handleChange} 
            name="email" 
            value={email} />

            <FormInput 
            label= "Password"
            type="password" 
            required
            onChange={handleChange} 
            name="password" 
            value={password} />

          
        <div className='buttons-container'>
            <Button type="submit"> Sing In </Button>
            <Button buttonType='google' type='button' onClick={singInWithGoogle}> Google sign in </Button>

        </div>    
        </form>
       </div>
    )

}

export default SingInForm;