import {useState} from 'react';
import '../style/Connecter.scss';
import { useNavigate } from 'react-router-dom'


function Inscrire (){

    const navigate = useNavigate();
    const [formVal, setFormVal] = useState({
        email:'',
        pwd:''
      });

      const handleChange = (event) => {
        const { email, value } = event.target;
        setFormVal((prevFormData) => ({ ...prevFormData, [email]: value }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(`
        
        Email: ${formVal.email}, 
        Pwd: ${formVal.pwd}
        `
        );
        navigate('/profils')

      };
     
        
    return (
        <div className='SectionCon' id='Connexion'>

            <div className='InsFormaC'>
            
                <h1 className='titleCon'>
                <img className="footerLogo2" src="logo.png" alt="gds group"></img>

                    Se connecter

                </h1>

                <p>
                        Vous possédez un compte ? Si vous souhaitez vous connecter, veuillez insérer les informations ci-dessous.
                </p>

                <div className='FormCon'>
                    <form className='ConContainer' onSubmit={handleSubmit}>

                                    <div className='pageS'>

                                        {/* email */}
                                        <div className='formules'>
                                            <label htmlFor="email" className='labs' >Adresse email : </label>
                                            <input className='conts'

                                                type="email" 
                                                id="email" 
                                                name="email"
                                            // value= "Email"
                                                defaultValue={formVal.email} 
                                                onChange= {handleChange} 
                                                // required="required"
                                            
                                            />

                                    
                                        
                                        </div>

                                        {/* Mot de passe */}
                                        <div className='formules'>
                                            <label for="pwd" className='labs'>Mot de passe : </label>
                                                <input className='conts'
                                                    type="password" 
                                                    id="pwd" 
                                                    name="pwd" 
                                                    defaultValue={formVal.pwd}
                                                    onChange={handleChange}
                                                    // required="required"
                                                    minlength="8"
                                                
                                                />
                                            
                                        </div>
                                </div>   
                                        
                                
                                <div className='Btns'>

                                    <div className='btnss'>

                                            <button type="submit">

                                                SE CONNECTER

                                            </button>

                                    </div>
                                    <div className='InsP'>

                                            Vous ne possédez pas de compte ? S'inscrire

                                    </div>  
                                            
                                </div>  

                              
                               
                            
                    </form>

                
                </div>

            </div>




        
        </div>

    )

}

export default Inscrire;