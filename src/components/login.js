

import React, { Component } from 'react';


export default  class Login extends Component {
    
    render() { 
        return ( 
           
           
        <div  style={styles.wrapper}>

            <p style={styles.title}> This is a sample </p> 
             <p style={styles.dot}> My login </p> 
             <input className="inputTxt" 
             placeholder="username or email"
             />  
             <br />

             <input className="inputTxt"  type="password" placeholder="password"/> 
             <br />
             <button>Login</button>

        </div>

      


        );
    }
}
 const styles={ 
     wrapper:{
         backgroundColor: 'red',
         padding: 10,
         margin: 5,
         border: 'groove'
     },

     title:{
         color:'yellow',
         fontSize: 25,
         border: 'groove',
         padding: 10
     },

     dot:{
        border:'dotted'
     }
    };
