import React from "react";
import "./newUser.css";

class newUser extends Component {
  state = {
    firstName="",
    lastName="",
    username="",
        password="",

  }
  // Loads userdata  
  loadUserData = () => {
    API.getUser()
      .then(res =>
        this.setState({ firstName: res.dat, lastName: "", username: "", password: "" })
      )
      .catch(err => console.log(err));

  // When the component mounts, 
  componentDidMount() {
    this.loadUserData();
  }
}
   //handle any changes to the input field
   handleInputChange=event=>{
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const{name, value}=event.target;
    // Set the state for the appropriate input field
    this.setState({
        [name]:value
    });
};
handleFormSubmit=event=>{
    event.preventDefault();
    
userAPI.saveUser({
  firstName:this.state.firstName,
  lastName:this.state.lastName,
  username:this.state.username,
  password:this.state.password

}).then(res => this.loadUserData()
.catch(err => console.log(err))

     
    
}
render(){
    return(
    <div className="form-inline">
    <h2>sign up </h2>
    <div className="form-group">
        <input className="form-control"
        value={this.state.username}
        name="firstName"
        onChange={this.handleInputChange}
        type="text"

        placeholder="First Name"
        />
        </div>
        <div className="form-group">
        <input className="form-control"
        value={this.state.username}
        name="lastName"
        onChange={this.handleInputChange}
        type="text"

        placeholder="Last Name"
        />
        </div>
    
        <div className="form-group">
        <input className="form-control"
        value={this.state.username}
        name="username"
        onChange={this.handleInputChange}
        type="text"

        placeholder="Username"
        />
        </div>
        <div className="form-group">
        <input className="form-control"
        value={this.state.password}
        onChange={this.handleInputChange}
        type="text"

        placeholder="password"/>
        </div>
        <button className="btn btn-primary"
        onClick={this.handleFormSubmit}
        type="button">
        submit
        </button>
        </div>
    
)};
export default newUser;

