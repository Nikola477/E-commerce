

import SingUpForm from '../../sing-up form/sing-up-form.component';
import SingInForm from '../../sing-in-form/sing-in-from';

import './authentication.style.scss';


const Authentication = () => {

    
   
    

    return (
        <div className='authentication-container'>
           <SingInForm />
           <SingUpForm />
        </div>
    );

};

export default Authentication;