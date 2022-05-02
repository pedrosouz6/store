import { FaTrashAlt } from 'react-icons/fa'

import ButtonBack from '../ButtonBack/index';
import StoreTotal from '../Total';

import { Container } from "./style";

export default function StoreCart() {
    return (
        <Container>
            <div className="center--store">
                <ButtonBack />
                <div className="store--cart__container">
                    <div className="store--cart__products">
                        <h1>Seu carrinho</h1>
                        <p>Total (6 produtos) R$ 539.00</p>

                        <div className="store--cart__products__cards">
                            <div className="store--cart__card">
                                <div className="store--cart__img">
                                    <img src="https://capputeeno-ricmaloy.vercel.app/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fxesque-dev%2Fchallenge-images%2Fcamiseta-03.jpg&w=640&q=75" alt="" />
                                </div>
                                <div className="store--cart__content">
                                    <div className="store--cart__title">
                                        <h3>Produto nome</h3>
                                        <button><FaTrashAlt /></button>
                                    </div>
                                    <div className="store--cart__description">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio consequatur expedita nulla exercitationem voluptates, sint quaerat deleniti, velit, nostrum dolorum sequi aperiam quos quas harum sunt soluta tempora iusto accusantium.</p>
                                    </div>
                                    <div className="store--cart__price">
                                        <select>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                        <span>R$ 432,00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="store--cart__card">
                                <div className="store--cart__img">
                                    <img src="https://capputeeno-ricmaloy.vercel.app/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fxesque-dev%2Fchallenge-images%2Fcamiseta-03.jpg&w=640&q=75" alt="" />
                                </div>
                                <div className="store--cart__content">
                                    <div className="store--cart__title">
                                        <h3>Produto nome</h3>
                                        <button><FaTrashAlt /></button>
                                    </div>
                                    <div className="store--cart__description">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio consequatur expedita nulla exercitationem voluptates, sint quaerat deleniti, velit, nostrum dolorum sequi aperiam quos quas harum sunt soluta tempora iusto accusantium.</p>
                                    </div>
                                    <div className="store--cart__price">
                                        <select>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                        <span>R$ 432,00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="store--cart__card">

                                <div className="store--cart__img">
                                    <img src="https://capputeeno-ricmaloy.vercel.app/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fxesque-dev%2Fchallenge-images%2Fcamiseta-03.jpg&w=640&q=75" alt="" />
                                </div>
                                <div className="store--cart__content">
                                    <div className="store--cart__title">
                                        <h3>Produto nome</h3>
                                        <button><FaTrashAlt /></button>
                                    </div>
                                    <div className="store--cart__description">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio consequatur expedita nulla exercitationem voluptates, sint quaerat deleniti, velit, nostrum dolorum sequi aperiam quos quas harum sunt soluta tempora iusto accusantium.</p>
                                    </div>
                                    <div className="store--cart__price">
                                        <select>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                        <span>R$ 432,00</span>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <StoreTotal />
                </div>
            </div>
        </Container>
    )
} 