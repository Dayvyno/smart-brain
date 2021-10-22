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

  mousingOverItem1=()=>{
    document.getElementById('fColor1').style.backgroundColor="#d6d6c2"
  }
  mousingOutItem1=()=>{
    document.getElementById('fColor1').style.backgroundColor="white"
  }

  mousingOverItem2=()=>{
    document.getElementById('fColor2').style.backgroundColor="#d6d6c2"
  }
  mousingOutItem2=()=>{
    document.getElementById('fColor2').style.backgroundColor="white"
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
        </DropdownToggle >
          <DropdownMenu className="shadow-5 b mr5"  style={{backgroundColor:'rgba(121, 166, 210, 0.5)', borderRadius:'7px'}}>
            <DropdownItem style={{borderRadius:'7px', color:'green'}}
            id="fColor1" onMouseOver={this.mousingOverItem1} 
            onMouseOut={this.mousingOutItem1}
            >
              View Profile
            </DropdownItem>

            <DropdownItem style={{borderRadius:'7px', color:'#990000'}}
            id="fColor2" onMouseOver={this.mousingOverItem2} 
            onMouseOut={this.mousingOutItem2}
            onClick={() => this.props.onRouteChange('signout')}
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