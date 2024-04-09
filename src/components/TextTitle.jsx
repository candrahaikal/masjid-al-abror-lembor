/* eslint-disable react/prop-types */

const TextTitle = ({ title }) => {
  return (
    <div className="flex justify-between items-center w-full max-w-[1240px] mx-auto py-8 px-6 gap-10 mt-10">
      <h1 className="whitespace-nowrap font-philosopher font-bold text-2xl md:text-4xl">{title}</h1>
      <hr className="block w-full h-[3px] bg-slate-200 rounded-md"/>
    </div>
  )
}

export default TextTitle