import React from 'react'

const FinalButton = ({text, onClick}) => {
  return (
    <div>
        <button
          type="submit"
          onClick={onClick}
          className="p-2 w-full h-14 bg-primary-600 text-white rounded-md"
        >{text}</button>
    </div>
  )
}

export default FinalButton