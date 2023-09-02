import {useState} from 'react';
import '../style/Inscrire.scss';



function Inscrire (){

    const [formVal, setFormVal] = useState({
        name:'',
        firstname:'',
        pseudo:'',
        address:'',
        numberPho:'',
        email:'',
        pwd:''
      });

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormVal((prevFormData) => ({ ...prevFormData, [name]: value }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(`
        Name: ${formVal.name}, 
        Firstname: ${formVal.firstname}, 
        Pseudo:${formVal.pseudo}, 
        Address: ${formVal.address} , 
        NumberPho: ${formVal.numberPho}
        Email: ${formVal.email}, 
        Pwd: ${formVal.pwd}
        `
        );

      };

      {/* Radio button */}

      const [topping, setTopping] = useState("Medium")

      const onOptionChange = e => {
        setTopping(e.target.value)
      }

      
    
        
    return (
        <div className='SectionIns' id='inscri'>

            <div className='InsForma'>
            
                <h1 className='titleIns'>

                <img className="footerLogo1" src="logo.png" alt="gds group"></img>
                     
                    Inscrire 

                    

                </h1>
               

                <p>
                    Vous souhaitez vous enregistrer ? Assurez-vous d'insérer les renseignements ci-dessous.
                </p>

                <div className='FormIns'>
                    <form className='InsContainer' onSubmit={handleSubmit}>

                                {/* Nom */}
                                <div className='formule'>
                                    <label htmlFor='name' className='lab' >Nom : </label>
                                    <input className='cont'
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        //value="name"
                                        defaultValue={formVal.name}
                                        onChange={handleChange}
                                        required="required"

                                    />
                                
                                </div>
                                {/* Prénom */}
                                <div className='formule'>
                                    <label htmlFor='firstname' className='lab' >Prénom : </label>
                                    <input className='cont'
                                        type="text" 
                                        id="firstname" 
                                        name="firstname" 
                                        //value="firstname"
                                        defaultValue={formVal.firstname}
                                        onChange={handleChange}
                                        required="required"

                                    />
                                
                                </div>

                                {/*Nom d'utilisateur*/}
                                <div className='formule'>
                                    <label htmlFor='pseudo' className='lab' >Nom d'utilisateur : </label>
                                    <input className='cont'
                                        type="text" 
                                        id="pseudo" 
                                        name="pseudo" 
                                        //value= "Pseudo"
                                        defaultValue={formVal.pseudo}
                                        onChange={handleChange}
                                        required="required"

                                    />
                                
                                    
                                </div>
                                {/* Adress */}
                                <div className='formule'>
                                    <label htmlFor='address' className='lab' >Adresse : </label>
                                    <input className='cont'
                                        type="text" 
                                        id="address" 
                                        name="address" 
                                        //value="Address"
                                        defaultValue={formVal.address}
                                        onChange={handleChange}
                                        required="required"

                                    />
                                    
                                </div>
                                {/*tel */}
                                <div className='formule'>
                                    <label htmlFor='numberPho' className='lab' >Numéro de téléphone :</label>
                                    <input className='cont'
                                        type="tel" 
                                        id="numberPho" 
                                        name="numberPho" 
                                        //value="NumberPho"
                                        defaultValue={formVal.numberPho}
                                        onChange={handleChange}
                                        required="required"

                                    />
                                
                                    
                                </div>

                                {/* email */}
                                <div className='formule'>
                                    <label htmlFor="email" className='lab' >Adresse email : </label>
                                    <input className='cont'

                                        type="email" 
                                        id="email" 
                                        name="email"
                                    // value= "Email"
                                        defaultValue={formVal.email} 
                                        onChange= {handleChange} 
                                        required="required"
                                    
                                    />

                            
                                
                                </div>

                                {/* Mot de passe */}
                                <div className='formule'>
                                    <label for="pwd" className='lab'>Mot de passe : </label>
                                        <input className='cont'
                                            type="password" 
                                            id="pwd" 
                                            name="pwd" 
                                            defaultValue={formVal.pwd}
                                            onChange={handleChange}
                                            required="required"
                                            minlength="8"
                                        
                                        />
                                    
                                </div>
                                
                                {/* Radio bouton */}
                                <div>
                                    <form className='contRadio'>

                                        <div className="radio">

                                            
                                                <input className='rad'
                                                    type="radio"
                                                    name= "topping"
                                                    value="Option1"
                                                    id="option1"
                                                    checked={topping === "Option1"}
                                                    onChange={onOptionChange} 
                                                />

                                                <label htmlFor="option1" className='lab'> Utilisateur normal </label>
                                        
                                                
                                            
                                        </div>
                                        <div className="radio">
                                               
                                            
                                                <input className='rad'
                                                    type="radio"
                                                    name= "topping"
                                                    value="Option2"
                                                    id="option2"
                                                    checked={topping === "Option2"}
                                                    onChange={onOptionChange} 
                                                />
                                                <label htmlFor="option2" className='lab'>  Botaniste </label>
                                            
                                            
                                        </div>
                                       
                                
                                    </form>
                                <div className='Btn'>
                                    <div className='btns'>

                                           <button type="submit"  >
                                                ENREGISTRER
                                            </button>

                                    </div>
                                           

                                            <div className='Scon'>
                                                Vous possédez un compte ? Se connecter
                                            </div>   
                                </div> 

                                
                        </div>
                            
                    </form>

                
                </div>

            </div>




        
        </div>

    )

}

export default Inscrire;