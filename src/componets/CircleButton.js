import React from 'react'
import line from '../assets/Line.png'
import lineRev from '../assets/Line (1).png'

const CircleButton = ({
  variant,
  type,
  movePercent,
  setMovePercent,
  children,
  disabled,
}) => {
  console.log(812 % -812)

  return (
    <button
      className={`circle--btn--${variant === 'right' ? 'right' : 'left'}  ${
        movePercent > 28 && variant !== 'right' ? 'disabled' : ''
      } ${disabled === 'disabled' ? 'disabled' : ''}`}
      onClick={() => {
        console.log(type)
        if (type === undefined) {
          return variant === 'right'
            ? setMovePercent(-100)
            : setMovePercent(100)
        } else if (type === 'default') {
          return ''
        } else {
          return variant === 'rightS' ? setMovePercent(-33) : setMovePercent(33)
        }
      }}
      style={{
        backgroundColor: type ? `${type}` : '',
      }}
    >
      {children}
      <img src={variant === 'right' ? line : lineRev} alt="" />
    </button>
  )
}

export default CircleButton
