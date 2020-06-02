import React,{Component} from 'react';
import axios from 'axios';

export default class Userform extends Component{
   usersubmit(e){
       e.preventDefault();
       axios.post('http://localhost:5000/contact', {
           firstName:this.refs.firstName.value,
           lastName:this.refs.lastName.value,
           email:this.refs.email.value,
           company:this.refs.company.value,
           phone:this.refs.phone.value
           
       })

       .then((u)=>{
        console.log(u);
       }).catch((err)=>{
        console.log(err);
       })
       alert("refresh page");
   }

    render(){
        return(
            <div className="row">

                <h3 className="center">Register form</h3>
                <div className="col s4">

</div>
            <form className="col s6" encType="multipart/form-data" onSubmit={this.usersubmit.bind(this)}>
              <div className="row">
                <div className="input-field col s8 center">
                  <input  id="firstName" ref="firstName" type="text" />
                  <label htmlFor="firstName">First Name</label>
                </div>
                <div className="input-field col s8 center">
                  <input  id="lastName" ref="lastName" type="text" />
                  <label htmlFor="last Name">Last name</label>
                </div>
               
              </div>
              <div className="row">
                <div className="input-field col s8 center">
                  <input  id="email" ref="email" type="text" />
                  <label htmlFor="email">email</label>
                </div>
                <div className="input-field col s8 center">
                  <input  id="company" ref="company" type="text" />
                  <label htmlFor="company">company</label>
                </div>
                <div className="input-field col s8 center">
                  <input id="phone" ref="phone" type="text" />
                  <label htmlFor="phone">phone</label>
                </div>
             
                </div>
               <button type="submit" className="btn waves-effect waves-light center" name="action">submit</button>
             
             
            </form>
          </div>
                
        );
    }
}