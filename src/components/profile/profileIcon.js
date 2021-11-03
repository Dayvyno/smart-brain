import React from 'react'
import { 
  Dropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem 
} from 'reactstrap';


class ProfileIcon extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dropdownOpen: false
    }
  }
  toggle = () =>this.setState(prevState=>({dropdownOpen:!prevState.dropdownOpen}))

  signOutDeleteSession = () =>{
    window.sessionStorage.removeItem("token");
    this.props.onRouteChange('signout')
    //Assignment: Also delete the redis token during signout
  }


  render(){
    const {dropdownOpen} = this.state
    return (
      <div className='pa4 tc' >
        <Dropdown isOpen={dropdownOpen} toggle={this.toggle}> 
        <DropdownToggle
          tag="span"
          data-toggle="dropdown"
          aria-expanded={dropdownOpen}
        >
          <img src="http://tachyons.io/img/logo.jpg" className="br4 h3 w3 dib" alt="avatar"/>
        </DropdownToggle>
          <DropdownMenu className="shadow-5 b mr5"  style={{backgroundColor:'rgba(121, 166, 210, 0.5)', borderRadius:'7px'}}>
            <DropdownItem className="hover-red" style={{borderRadius:'7px', color:'green'}}
            onClick={this.props.toggleModal}
            >
              View Profile
            </DropdownItem>

            <DropdownItem style={{borderRadius:'7px', color:'#990000'}}
            onClick={this.signOutDeleteSession}
            >
              Sign-Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}

export default ProfileIcon