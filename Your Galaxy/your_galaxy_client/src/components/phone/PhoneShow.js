import React from 'react'
import { useParams } from 'react-router-dom'

const PhoneShow = ({ phone }) => {
  const { phoneId } = useParams()

  console.log(phoneId)

  if(phone.length === 0) return null
  const phones = phone.find((phone) => phone.phone_id === parseInt(phoneId))

  return (
    <div>
      {phone.title}
      {phone.image}
      {phone.pros}
      {phone.cons}
    </div>
  )

}

export default PhoneShow
