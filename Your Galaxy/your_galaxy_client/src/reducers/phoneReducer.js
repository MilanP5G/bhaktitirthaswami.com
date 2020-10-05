// import uuid from 'uuid'

export const phoneReducer = (state = {phones: []}, action) => {
    switch (action.type) {
        case 'ADD_PHONE':

        // const phone = {
        //   id: uuid(),
        //   payload: action.payload
        // }

          return { ...state, phones: [ ...state.phones, action.payload ]};

        case 'FETCH_PHONES':

          return { ...state, phones: action.payload }

        case 'DELETE_PHONE':

          return { ...state, phones: state.phones.filter(phone => phone.id !== action.payload.id)}

        default:
        return state;
    }
}
