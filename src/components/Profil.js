
// import React from 'react';

// import '../style/Profil.scss'
// import { Link } from 'react-scroll';
// import {CgProfile, CgList} from 'react-icons/cg';
// import {RiPlantLine, RiAddCircleLine} from 'react-icons/ri';
// import {FaHands} from 'react-icons/fa';
// import {TiMessages} from 'react-icons/ti';
// import {LiaMapSolid} from 'react-icons/lia';
// import {SiHandshake} from 'react-icons/si';


// function SectionProfil () {

//     return (

//         <div className='profil'>
//             <div className='contenuProfil'>

//                 <p>
//                     ACCUEIL
//                 </p>

            
//                 <div className='ContP'>
//                     <ul className='profilcont'>
//                         <li className='nav-item'>
//                             <div className='icon-link'>
//                                 <CgProfile color=' white' size={30} /> 
//                                 <Link className='itemsP' activeClass='actives'> Profil</Link>

//                             </div>
                           

//                         </li>
//                         <li className='nav-item'>
//                             <div className='icon-link'>
//                                 <RiPlantLine color='white' size={30} />
//                                 <Link className='itemsP' activeClass='actives'>Mes plantes</Link>

                                
//                             </div>
                            
//                         </li>
//                         <li className='nav-item'>
//                             <div className='icon-link'>
//                                 <FaHands color='white' size={30}/>
//                                 <Link className='itemsP' activeClass='actives'>Plantes que je garde</Link>
                                    
//                             </div>
                            

//                         </li>
//                         <li className='nav-item'>
//                             <div className='icon-link'>
//                                 <RiAddCircleLine color='white' size={30}/>
//                                 <Link className='itemsP' activeClass='actives'>Ajouter une plante à faire garder</Link>

                                
//                             </div>
                            
//                         </li>
//                         <li className='nav-item'>
//                             <div className='icon-link'>
//                                 <CgList color='white' size={30} />
//                                 <Link className='itemsP' activeClass='actives'>liste de plantes disponible à conserver</Link>

                                
//                             </div>
                            
//                         </li>
//                         <li className='nav-item'>
//                             <div className='icon-link'>
//                                 <TiMessages color='white' size={30} />
//                                 <Link className='itemsP' activeClass='actives'>Message</Link>
                                    
//                             </div>
                            

//                         </li>
//                         <li className='nav-item'>
//                             <div className='icon-link'>
//                                 <LiaMapSolid color='white' size={30} />
//                                 <Link className='itemsP' activeClass='actives'>Maps</Link>
                                
//                             </div>
                            

//                         </li>
//                         <li className='nav-item'>
//                             <div className='icon-link'>
//                                 <SiHandshake color='white' size={30}/>
//                                 <Link className='itemsP' activeClass='actives'>Conseil Botaniste</Link>
                                    
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )

// }

// export default SectionProfil; 

import '../style/Profil.scss'
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { CgProfile, CgList } from 'react-icons/cg';
import { RiPlantLine, RiAddCircleLine, RiLogoutCircleLine } from 'react-icons/ri';
import { FaHands } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';
//import {GiScales } from 'react-icons/gi';
import { LiaMapSolid } from 'react-icons/lia';
import { SiHandshake } from 'react-icons/si';
import { HiOutlineX } from "react-icons/hi";
import {PiPlusFill } from "react-icons/pi"

/*import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';*/








const SectionProfil = () => {

const [activeComponent, setActiveComponent] = useState('profil'); // Initial active component




        //popup
                            //eto
                            

                            const [modal, setModal] = useState(false);
                            const toggleModal = (event) => {
                                event.preventDefault();
                                setModal(!modal);
                            };
                            if(modal) {
                            document.body.classList.add('active-modal')
                            } else {
                            document.body.classList.remove('active-modal')
                            }
                            //atreto
                            //fin popup

    // {/* importer image  */}
   /* const [file, setFile] = useState();
    function handleChange(e) {
         console.log(e.target.files);
         setFile(URL.createObjectURL(e.target.files[0]));


         const selectedFile = event.target.files[0];
            const fileName = selectedFile ? selectedFile.name : '';
            document.getElementById('file-name').textContent = fileName;
 }*/

 const [file, setFile] = useState();

function handleChange(e) {
  console.log(e.target.files);
  setFile(URL.createObjectURL(e.target.files[0]));

  const selectedFile = e.target.files[0];
  const fileName = selectedFile ? selectedFile.name : '';
  document.getElementById('file-name').textContent = fileName;
}


 

/* const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileName = file.name;
      console.log('Selected Image Name:', fileName);
    }
  };*/

 // fin image 

    const renderComponent = () => {





        switch (activeComponent) {
            case 'profil':
                return (
                        <div className='casprofil'>

                            <p className='titleprofil'>
                                 Profile Component

                            </p>

                            <div className='contenerBtn'>

                                <div className='Btnp'>

                                    <div className='btnp'>    
                                        <button /*type="submit" */ >
                                            Modifier profil 
                                        </button>

                                    </div>
                                </div>

                                <div className='Btnpl'>
                                    
                                    <div className='btnpl'>    
                                        <button /*type="submit" */ >
                                            Modifier profil 
                                        </button>

                                    </div>
                                </div>
                            </div>


                           
                        </div>
                        ) ;
            case 'mesPlantes':
                return (

                        <div className='casemesplantes'>
                            <p className='titlemesplantes'>
                                Mes Plantes Component Content

                            </p>

                            <div className='contbtnPlante'>

                                <div className='btnplant'>

                                    <div className='btnplants'>    
                                        <button /*type="submit" */ >
                                            Modifier 
                                        </button>

                                    </div>
                                </div>

                                <div className='btnplantt'>
                                    
                                    <div className='btnplantss'>    
                                        <button /*type="submit" */ >
                                            Supprimer 
                                        </button>

                                    </div>
                                </div>
                            </div>
                            
                        </div>

                );
            case 'plantesGarde':
                return (

                    <div className='caseplantegarde'>
                        <p>
                            Plantes Garde Component Content

                        </p>
                        
                    </div>


                );
            case 'ajoutplante' :
                return(

                    <div className='caseajoutplante'>
                        <p className='titlejoutpante'>
                            Ajouter plante a faire garder
                        </p> 

                            <div className='contecaseplante'>
                                <div className='ajouterplante'>

                                        <form className='fomrcontenerplant'>

                                            {/* image*/}

                                            <div className='contpicture'>
                                               
                                                
                                                <div className='inputnameimg'>

                                              
                                                    <input type="file" id='firstimg' onChange={handleChange} className='imginput' />
                                                    <p id="file-name" color='#B1B1B1'></p>
                                                    <img src={file}/>
                                                </div>
                                                <div className='imgiconlable'>
                                                    <label for="firstimg" className='labelimg'>
                                                   
                                               
                                                        <PiPlusFill color='#B1B1B1' fontSize={40} />
                                                       
                                                       
                                                    </label>
                                                    
                                                        Ajouter une photo
                                                  
                                                   
                                                    
                                                   
                                                </div>
                                                
                                               
                                            </div> 

                                            {/*nOM*/}

                                            <div className='nomFirsta'>

                                                <label className='labplant' >Nom : </label>
                                                <input className='contplant'
                                                    type='text'
                                                    id='name'
                                                    name='name'
                                    
                                                />
                                            </div>
                                            {/*Prenom*/}

                                            <div className='nomFirsta'>

                                                <label className='labplant' >Prénom : </label>
                                                <input className='contplant'
                                                    type='text'
                                                    id='firstname'
                                                    name='firstname'

                                            />
                                            </div>
                                            {/*Date de début*/}
                                            <div className='datedebf'>
                                                <label className='labdatedf' >Date début : </label>
                                                <div className='contdate'>
                                                    <input className='typedate' type="date" name="bday" />
                                                </div>
                                            </div>

                                            {/*Date de fin*/}
                                            <div className='datedebf'>
                                                <label className='labdatedf' >Date de fin : </label>
                                                <div className='contdate'>
                                                    <input className='typedate' type="date" name="bday" />

                                                </div>
                                            </div>

                                            
                                        </form>
                                
                                </div>
                                    <div className='btnajouplant'>
                                        <div className='btnjoutpla'>    
                                            <button /*type="submit" */ >
                                                Envoyer
                                            </button>

                                        </div>
                                    </div>
                            </div>
                    </div>
                );
            
            case 'listplante' :
                return(

                    <div className='caselistplante'>
                        <p>
                            liste des plante
                        </p>
                    </div>
                );

           
                   


            case 'mapsclient':
                    return(
                        <div className='casemapsclient'>



                            <p>
                                maps 
                            </p>

                        </div>


                    );
            
            case 'botanistecons':
                    return(
                        <div className='casebotanistecons'>
                            <p className='titlebota'>
                                Botanise
                            </p>
                            <div className='contebotaniste'>

                                <div className='ajoutconseilBota'>

                                    <form className='messagebotaniste'>


                                        {/* photo */}

                                        <div className='picturebota'>
                                               
                                                
                                               <div className='inputmagbota'>

                                             
                                                   <input type="file" id='firstimg' onChange={handleChange} className='imginputb' />
                                                   <p id="file-name" color='#B1B1B1'></p>
                                                   <img src={file}/>
                                               </div>
                                               <div className='imgiconb'>
                                                   <label for="firstimg" className='labelimg'>
                                                  
                                              
                                                       <PiPlusFill color='#B1B1B1' fontSize={40} />
                                                      
                                                      
                                                   </label>
                                                   
                                                       Ajouter une photo
                                                 
                                                  
                                                   
                                                  
                                               </div>
                                               
                                              
                                           </div> 

                                        {/*fin photo */}



                                        

                                        <div className='selctcontent'>
                                            <label for="cars" className='selectplant'>Nom de plante : </label>
                                            <select name="cars" id="cars" className='selectconent'>
                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="opel">Opel</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </div>
                                        
                                        <div className='messbot'>
                                                 {/* message */}

                                               <label className='labelbota' htmlFor="messagebota">Message : </label>
                                                <textarea
                                                    name='messageBotniste' 
                                                    placeholder=" " 
                                                    onChange={handleChange} 
                                                    required="required"
                                            />

                                        </div>

                                        
                           
                                

                                    </form>

                                </div>
                            

                            </div>
                            <div className='botajotm'>
                                        <div className='butenmes'>    
                                            <button /*type="submit" */ >
                                                Envoyer
                                            </button>

                                        </div>
                                    </div>
                        </div>

                    );

            
            

                
                
                
            // ... Add cases for other components
            default:
                return null;
        }
    };

    return (
        <div className='profil'>
            <div className='contenuProfil'>

                <p>
                    ACCUEIL
                </p>

            
                <div className='ContP'>
                    <ul className='profilcont'>
                        <li className='nav-item'>
                            <div className='icon-link'>
                                <CgProfile color=' white' size={30} /> 
                                <Link className='itemsP' activeClass='actives' onClick={() => setActiveComponent('profil')}> Profil</Link>

                            </div>
                           

                        </li>
                        <li className='nav-item'>
                            <div className='icon-link'>
                                <RiPlantLine color='white' size={30} />
                                <Link className='itemsP' activeClass='actives' onClick={() => setActiveComponent('mesPlantes')}>Mes plantes</Link>


                            </div>
                            
                        </li>
                        <li className='nav-item'>
                            <div className='icon-link'>
                                <FaHands color='white' size={30}/>
                                <Link className='itemsP' activeClass='actives' onClick={() => setActiveComponent('plantesGarde')}>Plantes que je garde</Link>
                                    
                            </div>
                            

                        </li>
                        <li className='nav-item'>
                            <div className='icon-link'>
                                <RiAddCircleLine color='white' size={30}/>
                                <Link className='itemsP' activeClass='actives' onClick={() => setActiveComponent('ajoutplante')}>Ajouter une plante à faire garder</Link>

                                
                            </div>
                            
                        </li>
                        <li className='nav-item'>
                            <div className='icon-link'>
                                <CgList color='white' size={30} />
                                <Link className='itemsP' activeClass='actives' onClick={() => setActiveComponent('listplante')}>liste de plantes disponible à conserver</Link>

                                
                            </div>
                            
                        </li>


                    <div className='mentions'>
                        <div className='messagecontpop'>
                                     <TiMessages color='white' size={30} />
                                   

                                    <div onClick={toggleModal} className="openFonctions"> Message</div>
                                  
                                   

                                 

                        </div>
                       
                    <div>
                    {modal && (
                        
                    
                        <div className='modalments'>
                            <div onClick={toggleModal} className="overlays"></div>
                                <div className='PopUps'>
                                <h1 className="titles">
                                <img className='logoMents' src="/logo.png" /> Les mentions légales</h1>
                                
                                <p className="lightTitles">1. Définition des mentions légales</p>
                                <div className="mentionContets">
                                            
                                <p className="lightTitle">2. Quelles sont les différentes mentions légales à faire figurer sur mon site ?</p>
                                </div>
                                <button className="close-modals" onClick={toggleModal}>
                                    <HiOutlineX />
                                </button>   
                            </div>
                    </div>)}
                    </div> 
                </div>
                       
                        <li className='nav-item'>
                            <div className='icon-link'>
                                <LiaMapSolid color='white' size={30} />
                                <Link className='itemsP' activeClass='actives' onClick={() => setActiveComponent('mapsclient')}>Maps</Link>
                                
                            </div>
                            

                        </li>
                        <li className='nav-item'>
                            <div className='icon-link'>
                                <SiHandshake color='white' size={30}/>
                                <Link className='itemsP' activeClass='actives' onClick={() => setActiveComponent('botanistecons')}>Conseil Botaniste</Link>
                                    
                            </div>
                        </li>
                        <li className='nav-item'>
                            <div className='icon-link'>
                                <RiLogoutCircleLine color='white' size={30} />
                                <Link className='itemsP'>Déconnecter</Link>
                                
                            </div>

                        </li>
                    </ul>
                </div>
                <div className='component-container'>{renderComponent()}</div>
            </div>
        </div>
    );
}

export default SectionProfil;