import React, { useEffect, useState } from 'react'
import './styles/App.css'
import hurt from './assets/Heart.png'
import cart from './assets/Cart.png'
import avatar from './assets/Ellipse 2.png'
import search from './assets/Search.png'
import slider1 from './assets/1528 1.png'
import slider2 from './assets/2563956 1 (1).png'
import slider3 from './assets/Rectangle 48.png'
import linkTg from './assets/Vector (3).png'

import trophy from './assets/trophy 1.png'
import protect from './assets/Group.png'
import shopping from './assets/Vector.png'
import suport from './assets/customer-support.png'
import ProductItem from './componets/ProdctItem'
import inspirations1 from './assets/Rectangle 24.png'
import sliderInspirations1 from './assets/Rectangle 25.png'

import { products } from './productsArray'
import RadioInput from './componets/RadioInput'
import arrow from './assets/Vector 1.png'
import CircleButton from './componets/CircleButton'
import { Context } from './context/Context'
const App = () => {
  const [movePercent, setMovePercent] = useState(0)
  const [movePercentSecond, setMovePercentSecond] = useState(0)
  const [currItem, setCurrItem] = useState(2)
  const arrProducts = [...products]

  const nextSlide = (percent) => {
    setMovePercent((prev) => prev + percent)
  }

  const slideNext = (percent) => {
    setMovePercentSecond((prev) => prev + percent)
  }
  useEffect(() => {})
  console.log()

  return (
    <Context.Provider value={{ currItem, setCurrItem }}>
      <div className="wrapper">
        <div className="about">
          <div className="container">
            <div className="blur"></div>

            <div className="header">
              <div className="logo">
                <strong>Funiro.</strong>
              </div>
              <div className="header__navigation">
                <div className="header__navigation--products">products</div>
                <div className="header__navigation--rooms">rooms</div>
                <div className="header__navigation--inspirations">
                  inspirations
                </div>
              </div>
              <div className="header__input">
                <img src={search} alt="" className="header__input--search" />
                <input
                  type="text"
                  placeholder="            Search for minimalist chair"
                ></input>
              </div>
              <div className="header_interface">
                <img src={hurt} alt="" className="navigation-img_item" />
                <img src={cart} alt="" className="navigation-img_item" />
                <img src={avatar} alt="" className="avatar" />
              </div>
            </div>
            <div className="slider">
              <div className="info__box">
                <div className="info__box--content">
                  <div className="info__box--content-name">
                    <h2>
                      <strong>Bohauss</strong>
                    </h2>
                  </div>
                  <div className="info__box--content-type">
                    <p>Luxary big sofa 2-seat</p>
                  </div>

                  <div className="info__box--content-price">
                    <strong>Rp. 17.000.000</strong>
                  </div>
                </div>
              </div>
              <div className="slider__navigation">
                <div className="slider__navigation--content">
                  <div className="slider__discription">
                    <div className="slider__discription--content">
                      <h1>
                        <strong>High-Quality Furniture Just For You</strong>
                      </h1>
                      <p>
                        Our furniture is made from selected and best quality
                        materials that are suitable for your dream home
                      </p>
                      <button
                        className="button-classick"
                        style={{ width: 374, height: 78 }}
                      >
                        <h5>Shop Now</h5>
                      </button>
                    </div>
                  </div>
                  <div className="slider_radio--btn">
                    <div className="radio_active">
                      <RadioInput
                        movePercent={movePercent}
                        setMovePercent={setMovePercent}
                        defolt={window.innerWidth < 780 ? 0 : 812}
                        kef={window.innerWidth < 780 ? -100 : -812}
                      />
                    </div>
                  </div>
                  <div className="slider_button">
                    <CircleButton type={'default'} />
                    <CircleButton variant={'right'} type={'default'} />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slider__image"
              // style={{
              //   transform: `translateX(${movePercent}${
              //     window.innerWidth < 780 ? 'px' : '%'
              //   })`,
              style={{
                transform: `translateX(${movePercent}${
                  window.innerWidth < 780 ? '%' : 'px'
                })`,
              }}
            >
              <img src={slider2} alt="" className="slider__image--passive" />
              <img src={slider1} alt="" className="slider__image--passive" />
              <img src={slider3} alt="" className="slider__image--passive" />
              <img src={slider2} alt="" className="slider__image--passive" />
            </div>
          </div>
        </div>
        <div className="products">
          <div className="container">
            <div className="info--bar">
              <div className="quality">
                <img src={trophy} alt="" />
                <div className="info--bar-text">
                  <h4>High Quality</h4>
                  <p>crafted from top materials</p>
                </div>
              </div>
              <div className="protection">
                <img src={shopping} alt="" />
                <div className="info--bar-text">
                  <h4>Warrany Protection</h4>
                  <p>Over 2 year`s</p>
                </div>
              </div>
              <div className="shopping">
                <img src={protect} alt="" />
                <div className="info--bar-text">
                  <h4>Free shopping</h4>

                  <p>Order over 150$</p>
                </div>
              </div>
              <div className="support">
                <img src={suport} alt="" />
                <div className="info--bar-text">
                  <h4>24 / 7 Support</h4>

                  <p>Dedicated support</p>
                </div>
              </div>
            </div>
            <div className="products__section">
              <h2>Our Products</h2>
              <div className="products__list">
                {arrProducts.map((el) => (
                  <ProductItem
                    img={el.img}
                    discription={el.discription}
                    price={el.price}
                    title={el.title}
                    key={el.id}
                    isModify={el.isModify}
                  />
                ))}
              </div>
              <button className="button-show-more">Show more</button>
            </div>
          </div>
        </div>
        <div className="inspirations">
          <div className="container">
            <div className="inspirations__content">
              <div className="inspirations--text">
                <h2>50+ Beautiful rooms inspiration</h2>
                <p>
                  Our designer already made a lot of beautiful prototipe of
                  rooms that inspire you
                </p>
                <button className="button-classick">Explore more</button>
              </div>
              <div className="inspirations--inner">
                <img src={inspirations1} alt="" />
                <div
                  className="info__box"
                  style={{
                    left: '24px',
                    width: '217px',
                    top: 400,
                  }}
                >
                  <div className="info__box--content">
                    <div className="info__box--content-type">
                      <p>01 ―― Bed Room</p>
                    </div>
                    <div className="info__box--content-name">
                      <h1>
                        <h4>Inner Peace</h4>
                      </h1>
                    </div>
                    <div className="button-arrow">
                      <img src={arrow} alt="" className="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="inspirations--slider">
                <div className="inspirations--slider__images">
                  <div
                    className="slider__list--button-right"
                    style={{ right: 0 }}
                  >
                    <CircleButton
                      type={movePercentSecond < -33 ? 'gray' : 'white'}
                      setMovePercent={slideNext}
                      variant={'rightS'}
                      disabled={movePercentSecond < -33 ? 'disabled' : ''}
                    />
                  </div>
                  <img src={sliderInspirations1} alt="" />
                  <img src={sliderInspirations1} alt="" />
                  <img src={sliderInspirations1} alt="" />
                  <img src={sliderInspirations1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tipsTrick">
          <div className="container">
            <div className="slider__list--button-left">
              <CircleButton
                type={movePercentSecond >= 33 ? 'gray' : 'white'}
                setMovePercent={slideNext}
                disabled={movePercentSecond >= 33 ? 'disabled' : ''}
              />
            </div>

            <div className="slider__list--button-right">
              <CircleButton
                type={movePercentSecond < -33 ? 'gray' : 'white'}
                setMovePercent={slideNext}
                variant={'rightS'}
                disabled={movePercentSecond < -33 ? 'disabled' : ''}
              />
            </div>
            <div className="tipsTrick_slider">
              <div className="label">
                <h2>Tips & Triks</h2>
              </div>
              <div className="slider">
                <div
                  className="slider__list"
                  style={{ transform: `translateX(${movePercentSecond}%)` }}
                >
                  <div
                    className={`slider__list--item ${
                      currItem === 1 ? 'current' : ''
                    }`}
                  >
                    <img src={slider2} alt="" />
                    <div className="slider__list--item-text">
                      <h5>How to create a living room to love</h5>
                      <p>20 jan 2020</p>
                    </div>
                  </div>
                  <div
                    className={`slider__list--item ${
                      currItem === 2 ? 'current' : ''
                    }`}
                  >
                    <img src={slider2} alt="" />
                    <div className="slider__list--item-text">
                      <h5>Solution for clean look working space</h5>
                      <p>10 jan 2020</p>
                    </div>
                  </div>
                  <div
                    className={`slider__list--item ${
                      currItem === 3 ? 'current' : ''
                    }`}
                  >
                    <img src={slider2} alt="" />
                    <div className="slider__list--item-text">
                      <h5>
                        Make your cooking activity more fun with good setup
                      </h5>
                      <p>20 jan 2020</p>
                    </div>
                  </div>
                  <div
                    className={`slider__list--item ${
                      currItem === 4 ? 'current' : ''
                    }`}
                  >
                    <img src={slider2} alt="" />
                    <div className="slider__list--item-text">
                      <h5>How to create a living room to love</h5>
                      <p>20 jan 2020</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider__button">
                <RadioInput
                  movePercent={movePercentSecond}
                  setMovePercent={setMovePercentSecond}
                  defolt={33}
                  kef={-33}
                  type={'curr'}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="share">
          <div className="text_top">
            <p>Share your setup with</p>
            <h2>#FuniroFurniture</h2>
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <div className="footer_text">
              <div className="footer__about">
                <h5>Funiro.</h5>
                <p>
                  Worldwide furniture store since 2020. We sell over 1000+
                  branded products on our website
                </p>
                <p>Sawojajar Malang, Indonesia</p>
                <p>+6289 456 3455 www.funiro.com</p>
                <p>www.funiro.com</p>
              </div>

              <div className="footer__about">
                <h5>Menu</h5>
                <p>Products</p>
                <p>Rooms</p>
                <p>Inspirations</p>
                <p>About Us</p>
                <p>Terns & Policy</p>
              </div>
              <div className="footer__about">
                <h5>Account</h5>
                <p>My Account</p>
                <p>Checkout</p>
                <p>My Cart</p>
                <p>My catalog</p>
              </div>
              <div className="footer__about">
                <h5>Facebook</h5>
                <p>Instagram</p>
                <p>Twitter</p>
              </div>
              <div className="footer__about">
                <h5>Stay Updated</h5>
                <div className="footer_input">
                  <input type="text" placeholder="Enter Your email" />
                  <div className="lint_tg">
                    <img src={linkTg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  )
}

export default App
