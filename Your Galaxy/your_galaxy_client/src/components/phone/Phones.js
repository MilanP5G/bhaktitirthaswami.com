import React, { Component } from 'react';
import Phone from './Phone'
import { Link } from 'react-router-dom'

class Phones extends Component {

  render() {
    return(
      <div>
        {this.props.phones.map(phone => (
          <Phone phone={phone} key={phone.id} />
        ))}
        <Link to='/phones/add' >
          <button className='add-phone'>Add Device</button>
        </Link>
      </div>
    );
  }
};

export default Phones
