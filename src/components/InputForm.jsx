/* eslint-disable react/prop-types */
// import React from 'react'

const InputForm = ({ label, name, type }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-bold text-lg">{label}</label>
      <input type={type} name={name} id={name} className="w-full md:w-4/5 shadow-sm border border-slate-500 px-2 py-2"/>
    </div>
  )
}

export default InputForm