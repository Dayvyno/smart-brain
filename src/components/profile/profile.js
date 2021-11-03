import React from "react";
import './profile.css'

// isProfileOpen, toggleModal, user

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name: this.props.user.name,
      age: this.props.user.age,
      pet: this.props.user.pet
    }
  }

  onFormChange = (event) => {
    switch(event.target.name){
      case 'user-name':
        this.setState({name:event.target.value})
        break;
      case 'user-age':
        this.setState({age: event.target.value})
        break;
      case 'user-pet':
        this.setState({pet: event.target.value})
      default:
        break;
    }
  }

  onProfileUpdate = (data) => {
    fetch(`http://localhost:3001/profile/${this.props.user.id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': window.sessionStorage.getItem('token')
      },
      body: JSON.stringify({formInput:data})
    }).then(resp=>{
      if (resp.status===200 || resp.status===304){
        this.props.toggleModal();
        this.props.loadUser(Object.assign(this.props.user, data))
      }
    }).catch(console.log)
  }
  

  render(){
    const {toggleModal, user} =this.props
    const {name, age, pet} = this.state
    return (
      <div className='profile-modal'>
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" style={{backgroundColor:'white'}}>
          <main className="pa4 black-80 w-80" >
            <img src="http://tachyons.io/img/logo.jpg" className="br2 h3 w3 dib" 
            alt="avatar"/>
            <h1>{name}</h1>
            <h4>{`Image Submitted: ${user.entries} `}</h4>
            <p>{`Date Joined: ${new Date(user.joined).toLocaleDateString()}`}</p>
            <hr />
            <label htmlFor="user-name" className='mt2 fw6'>{`Name: ${user.name}`}</label>
            <input
              className="br3 pa2 ba w-100"
              placeholder={user.name}
              type="text"
              name="user-name"
              id="name"
              onChange={this.onFormChange}
            />
            <label htmlFor="age" className='mt2 fw6'>{`Age: ${age}`} </label>
            <input
              className="br3 pa2 ba w-100"
              placeholder={age}
              type="text"
              name="user-age"
              id="age"
              onChange={this.onFormChange}
            />
            <label htmlFor="user-name" className='mt2 fw6'>{`Pet: ${pet} `}</label>
            <input
              className="br3 pa2 ba w-100"
              placeholder={pet}
              type="text"
              name="user-pet"
              id="pet"
              onChange={this.onFormChange}
            />
            <div className='mt4' style={{display:'flex', justifyContent:'space-evenly'}}>
              <button className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20 br3'
              onClick={()=>this.onProfileUpdate({name, age, pet})}  >
                Save
              </button>
              <button className='b pa2 grow pointer hover-white w-40 bg-red b--black-20 br3'
              onClick={toggleModal}>
                Cancel
              </button>
            </div>
          </main>
          <div onClick={toggleModal} className='modal-close' >&times;</div>
        </article>
      </div>
    )
  }
}

export default Profile