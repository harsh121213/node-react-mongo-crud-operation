import React from 'react';
export default function Userlist(props){
  console.log(props);


    return(
  
        <div className="row">
        <div className="col s6">
          <div className="card">
            <div className="card-image">
              <img src="2.jpeg" alt=""/>
              <span className="card-title">{props.user.firstName} {props.user.lastName}</span>
            </div>
            <div className="card-content">
              <p>Email- {props.user.email}</p>
              <p>Company- {props.user.company}</p>
              <p>Contact- {props.user.phone}</p>
             
            </div>
           
          </div>
        </div>
      </div>
                
          
     );
}