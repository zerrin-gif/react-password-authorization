import React from 'react';


class Login extends React.Component {
constructor(props) {
  super(props);
  this.state={
    authorized:false,
    counter: 3
  }
this.authorize = this.authorize.bind(this);
}

authorize(){
  if(document.querySelector('.form-control').value === this.props.user.password){
    this.setState({
      authorized :true
  })
  }else{
    this.setState({
      counter:this.state.counter -1
  })
    console.log(this.state.counter);
    alert ("Please, enter correct password!")

    if(this.state.counter >= 0){
      document.querySelector('.form-control').disabled = true
    } 
  } 
}
enableInput(){
  setTimeout(() => {
    document.querySelector('.form-control').disabled = true
   }, 3000);
}
  render() {
    let contact=(
      <div className="card">
        <h2>Name:{this.props.user.name}</h2>
        <h3>Mail: {this.props.user.mail}</h3>
        <h3>phone:{this.props.user.phone}</h3>
        <img src={this.props.user.imgURL}/>
    </div>
    )
    
let login = (
  <div className="card">
        <form className="form-inline" action='#' onSubmit= {this.authorize}>
          <div className="form-group">
            <input type="password" className="form-control mx-sm-3" placeholder="Password" />
            <button type="submit" className="btn btn-primary" >Submit</button>
          </div>
        </form>
      </div>
);

return (
  <div id="authorization">
 {(this.state.authorized === false)? <h1>Enter the password</h1> : <h1>Contact profile</h1> }
    {this.state.authorized ? contact:login}
  </div>
)
  }
}


export default Login;