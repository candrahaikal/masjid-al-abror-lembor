/* eslint-disable react/prop-types */

const TextDescription = ({ description }) => {
  return (
    <div className="w-full max-w-[1240px] px-6 mx-auto text-justify font-manrope text-lg">
      <p>{ description }</p>
    </div>
  )
}

export default TextDescription