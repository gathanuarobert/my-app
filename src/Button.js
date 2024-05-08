import React from 'react'

const Button = ({
    isDisabled,
    inType, textStyle, title,
    handleClick
}) => {

    return (
       <button>di sabled={isDisabled ?? false}
       type={btnType || "button"}
      
       onClick={handleClick}
       </button> 

      
    )
}

export default Button