import React from 'react'

export default function Display(props) {
    return ( 
       
        <div className=" col s5">
      <ul className="collection with-headers ">
          <li className="collection-headers"><h3>Users</h3></li>
         
              {props.user.map((person)=>
             <a href="#!" className="collection-item" key={person._id} 
            onClick={props.updateuser.bind(this,person)} >
             {person.firstName} {person.lastName}       
             </a>
             )}
          
      </ul>
 </div>
    )
}
