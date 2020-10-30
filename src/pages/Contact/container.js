import React, { useState } from 'react'
import View from './view'

const Contact = () => {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const onChange = (e) => {
    const { name } = e.target
    const { value } = e.target
    setForm({ ...form, [name]: value })
  }

  return (
    <View
      onChange={onChange}
      onClickNext={() => setStep(step + 1)}
      onClickPrev={() => setStep(step - 1)}
      form={form}
      step={step}
    />
  )
}
export default Contact
