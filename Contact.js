import React from 'react';
import Form  from './Contact.module.css';
import Navo from './nav.js';


const Contact = () => {
 return(
     <div className="fj">


     <Navo/>

     <section className={Form.contact}>
            <div className={Form.content}>
            <h2>Contact Us</h2>
             <p> </p>
            </div>
            <div className={Form.container}>
            <div className={Form.contactInfo} >
              <div className={Form.box}>
                  <div className={Form.icon}> <i class="fas fa-phone"></i></div>
                  <div className={Form.text}>
                  <h3>Address</h3>
                  <p>8th Main Road Sampangi Rama Nagar, <br /> Banglore : 56003</p>
                </div>
                </div>

                <div className={Form.box}>
                  <div className={Form.icon}><i class="fa fa-phone pass"></i></div>
                  <div className={Form.text}>
                  <h3>Phone</h3>
                  <p>988-639-4079</p>
                </div>
                </div>

                <div className={Form.box}>
                  <div className={Form.icon}><i class="fa fa-phone"></i></div>
                  <div className={Form.text}>
                  <h3>Email</h3>
                  <p>soorajchakravarthy9v@gmail.com</p>
                </div>
                </div>
                
            

               


               <div className={Form.contactForm}>
                  <form action="">
                      
                      
                      <div className={Form.inputBox}>
                      <br />
                      <span>Full Name :</span>
                      <br />
                       <input type="text" name="" class={Form.typo} required="required" />
                       
                       </div>

                       <br />

                       <div className={Form.inputBox}>
                       <br />
                       <span>Email :</span>
                       <br />
                       <input type="text" name="" class={Form.typo} required="required" />
                       
                       </div>

                       <br />

                       <div className={Form.inputBox}>
                       <br />
                       <span>Type your Message</span>
                       <br />
                       <textarea required="required"></textarea>
                       
                       </div>

                       <br />

                       <div className={Form.inputBox}>
                       <br />
                       
                       <input type="submit" value="Submit" className={Form.sub} />
                       </div>
                  </form>
               </div>
            </div>
            </div>
     </section>
     </div>
 )
}

export default Contact;