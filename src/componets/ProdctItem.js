import share from '../assets/Vector (1).png'
import like from '../assets/Vector (2).png'

import React, { useRef } from 'react'
import useHover from '../hooks/useHover'

const ProductItem = ({ img, title, discription, price, isModify }) => {
  const ref = useRef(null)
  const isHover = useHover(ref)
  const isModif = isModify.split(' ')

  return (
    <div
      className={`prodocts_item ${
        isModif[0] === 'disctint' && isModif[0] !== 'none'
          ? 'prodocts_item--disctinct'
          : ''
      } ${
        isModif[0] === 'new' && isModif[0] !== 'none'
          ? 'prodocts_item--new'
          : ''
      }`}
      data-content={`${isModif[1]}`}
      data-color={'255'}
      ref={ref}
    >
      <div
        className="prodocts_item--hover"
        style={{ display: isHover ? 'flex' : 'none' }}
      >
        <button className="button-show-more">Show more</button>
        <div className="links">
          <div className="links__share">
            <img src={share} alt="" />
            <h6>Share</h6>
          </div>
          <div className="links__like">
            <img src={like} alt="" />
            <h6>Share</h6>
          </div>
        </div>
      </div>
      <img src={img} alt="" />
      <div className="prodocts_item--text">
        <h5>{title}</h5>
        <p>{discription}</p>
        <div className="prodocts_item--text-price">
          <h6>{price}</h6>
          <p>{isModif[0] === 'disctint' ? 'R̶p̶ ̶7.̶5̶0̶0̶.̶5̶0̶0̶' : ''}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
