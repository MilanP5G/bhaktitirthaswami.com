export const addPhone = phone => {
  return dispatch => {
    return fetch("http://localhost:3001/phones", {
      method: "POST",
      body: JSON.stringify({ phone: phone }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(resp => resp.json())
      .then(phone => {
        dispatch({ type: "ADD_PHONE", payload: phone });
      });
  };
}

export const fetchPhones = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/phones')
        .then(resp => {
            return resp.json()
        })
        .then(phones => {
          console.log(phones)
            dispatch({ type: 'FETCH_PHONES', payload: phones })
        })
    }
}

export const deletePhone = (phone) => {
  return dispatch => {
    fetch(`http://127.0.0.1:3001/phones/${phone.id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(phone)
    })
    dispatch({ type: 'DELETE_PHONE', payload: phone })
  }
}
