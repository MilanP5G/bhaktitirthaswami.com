import React, { Component } from 'react'
import Phones from '../components/phone/Phones'
import { connect } from 'react-redux'
import { fetchPhones } from '../actions/PhoneAction'

class PhonesContainer extends Component {

  componentDidMount(){
    this.props.fetchPhones()
  }

  render() {
    return (
      <div>
        <Phones phones={this.props.phones} deletePhone={this.props.deletePhone}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  phones: state.phones.phones
})

// const mapDispatchToProps = dispatch => ({
//   deletePhone: id => dispatch({ type: 'DELETE_PHONE', id })
// })


export default connect(mapStateToProps, { fetchPhones })(PhonesContainer)
