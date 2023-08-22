import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'

const RadioInput = ({ movePercent, setMovePercent, kef, defolt, type }) => {
  const { setCurrItem } = useContext(Context)
  const [check, setCheck] = useState('option1')
  useEffect(() => {
    if (kef !== -100) {
      if (movePercent === defolt) {
        if (type === 'curr') {
          setCurrItem(1)
        }
        setCheck('option1')
      }
      if (movePercent === defolt + kef) {
        if (type === 'curr') {
          setCurrItem(2)
        }
        setCheck('option2')
      }
      if (movePercent === kef) {
        if (type === 'curr') {
          setCurrItem(3)
        }
        setCheck('option3')
      }
      if (movePercent === kef * 2) {
        if (type === 'curr') {
          setCurrItem(4)
        }
        setCheck('option4')
      }
    }
    console.log(movePercent, kef, defolt, type)
  }, [movePercent])
  const changeHandler = (e) => {
    setCheck(e.target.value)
  }

  return (
    <div className="radio_active">
      <input
        type="radio"
        className="radio"
        value={`option1`}
        onChange={changeHandler}
        checked={check === `option1`}
        onClick={() => {
          setMovePercent(defolt)
          if (type === 'curr') {
            setCurrItem(1)
          }
        }}
      ></input>
      <input
        type="radio"
        className="radio"
        value={`option2`}
        onChange={changeHandler}
        checked={check === `option2`}
        onClick={() => {
          setMovePercent(defolt + kef)
          if (type === 'curr') {
            setCurrItem(2)
          }
        }}
      ></input>
      <input
        type="radio"
        className="radio"
        value={`option3`}
        onChange={changeHandler}
        checked={check === `option3`}
        onClick={() => {
          if (kef === -100) {
            setMovePercent(kef * 2)
          } else {
            setMovePercent(kef)
          }
          if (type === 'curr') {
            setCurrItem(3)
          }
        }}
      ></input>
      <input
        type="radio"
        className="radio"
        value={`option4`}
        onChange={changeHandler}
        checked={check === `option4`}
        onClick={() => {
          if (kef === -100) {
            setMovePercent(kef * 3)
          } else {
            setMovePercent(kef * 2)
          }

          if (type === 'curr') {
            setCurrItem(4)
          }
        }}
      ></input>
    </div>
  )
}

export default RadioInput
