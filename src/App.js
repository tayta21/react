import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">

      <h1 class="brand"><span>please entre here your id</span></h1>

     <div class="wrapper">

         <div class="company-info">
             <h3> Contact Us </h3>
            <ul>
              <li><i class="fa fa-phone">+216 22 092 232</i></li>
              
              <li><i class="fa fa-envelope">ahmedtritar21@gmail.com</i></li>
                          
                         
           </ul>
         </div>

         <div class="contact">
           <h3> E-mail Us</h3>

           <form id="contact-form">
               <p>
                 <label> Full Name </label>
                 <input type="text" required></input>
               </p>
               <p>
                 <label> country </label>
                 <input type="text" required></input>
               </p>
               <p>
                 <label> profession </label>
                 <input type="text" required></input>
               </p>
               <p>
                 <label> Date Of Birth </label>
                 <input type="date" required></input>
               </p>
               <p>
                 <label> E-mail Address </label>
                 <input type="email" required></input>
               </p>
               <p>
                 <label> Phone Number</label>
                 <input type="number" required></input>
               </p>
               <p class="full">
                    <button type="submit">Submit</button>
                  </p>           
           </form>
         </div>

     </div>




    </div>
  );
}

export default App;
