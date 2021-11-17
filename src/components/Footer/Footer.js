import styles from './Footer.module.css';
import React, { useState } from 'react';
import {isValidCell, maskPhone, isValidEmail, isValidName} from '../../functions/validate';





export function Footer(){

    const [name, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    

    

      function isValid(){
        if( isValidName(name) === true && isValidEmail(email) === true && isValidCell(phone) === true){
            localStorage.setItem('Nome', name)
            localStorage.setItem('Email', email)
            localStorage.setItem('Telefone', phone)
            alert('seus dados foram enviados para o localStorage!')
            
        }else{
         
        }
          
      }

    return (
        
        <div className={styles.container}>
           <div className={styles.form}>
             
           
               <p className={styles.footerForm}>Nome</p>
               <input type="text"  className={styles.input} value={name} onChange={(e) => setNome(e.target.value)}></input>
               <p className={styles.footerForm} id="inputEmail">Email</p>
               <input type="text" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)}></input>
               <p className={styles.footerForm}>WhatsApp</p>
               <input type="text"  value={phone}  onChange={(e) => setPhone(maskPhone(e.target.value))}className={styles.input}></input>
               
               <div className={styles.contact}>
               <input type="radio" className={styles.checkbox}></input>
               <p>Eu autorizo um consultar da Smile entrar em contato via WhatsApp</p>
               </div>
               <button onClick={isValid} className={styles.myButton} id="myButton">Enviar</button>
               
               
           </div>
           
        </div>
    
    )

}