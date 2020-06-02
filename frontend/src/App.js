import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Display from './display';
import Userform from './userform';
import Userlist from './userinfo';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:[],
            img:'',
            currentuser:{},
        }
        this.updateuser=this.updateuser.bind(this);
    }
    
    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));  
              bytes.forEach((b) => binary += String.fromCharCode(b)); 
                     return window.btoa(binary);
    };


componentDidMount(){
const url='http://localhost:5000/contact'
console.log(url);
axios.get(url)
.then((response)=>{
   
    console.log(response);
    this.setState({user:response.data,
      
    })
}).catch((err)=>{
    console.log(err);
})
}

updateuser(i){
    this.setState({
        currentuser:i,
    })
}
    render() {
        const {img} = this.state;
        return (
        <div className="container-fluid">
            <div className="row">
               
  <nav>
    <div className="nav-wrapper blue darken-1">
      <a href="/" className="brand-logo">user</a>
     
    </div>
  </nav>
  
         <div className="row">
                    <div className="col s4"><Display user={this.state.user}
                    updateuser={this.updateuser}/></div>
                    <div className="col s8"><Userlist user={this.state.currentuser}/></div>
                       <div className="col s12"><Userform/></div>
                </div>
            </div>
        
        </div>
          
        );
    }
}



export default App;