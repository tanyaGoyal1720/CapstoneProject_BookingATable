import React from 'react';
import {Link} from 'react-router-dom';

//pictures
import restaurantFood from "./restauranfood.jpg";
import greekSalad from "./greek salad.jpg";
import bruchetta from "./Bruchetta.jpg";
import lemonDessert from "./lemon dessert.jpg";
import restaurant from "./restaurant.jpg";
import chef from "./restaurant chef B.jpg";
import user from "./user.jpg"

function Main() {
    return (
        <main>
            <section id="intro" className="greenstyle">
                <div className="text">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button><Link to="/BookingPage">Reserve a Table</Link></button>
                </div>
                <img src={restaurantFood} alt='restaurant' className="round"/>
            </section>
            <section id="specials">
                <div id="tittle">
                    <h2>Specials</h2>
                    <button>Online Menu</button>
                </div>
                <div className="items">
                    <article className="dish">
                    <img src={greekSalad} alt='salad'/>
                        <div className="itemprice">
                            <h6>Greek Salad</h6>
                            <p className="price">$12.99</p>
                        </div>
                        <p className="description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <button className="order">Order a delivery</button>
                    </article>
                    <article className="dish">
                        <img src={bruchetta} alt='bruchetta'/>
                        <div className="itemprice">
                            <h6>Bruchetta</h6>
                            <p className="price">$5.99</p>
                        </div>
                        <p className="description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                        <button className="order">Order a delivery</button>
                    </article>
                    <article className="dish">
                        <img src={lemonDessert} alt='dessert'/>
                        <div className="itemprice">
                            <h6>Lemon Dessert</h6>
                            <p className="price">$5.00</p>
                        </div>
                        <p className="description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <button className="order">Order a delivery</button>
                    </article>
                </div>
            </section>
            <section id="testimonials">
                <div className="title">
                    <h2>Testimonials</h2>
                </div>
                <div className="items">
                    <article className="review">
                        <p className="Rating">5/5</p>
                        <div className="user">
                            <img src={user} alt='user'/>
                            <p className="Name">John</p>
                        </div>
                        <p className="description">This is their Review</p>
                    </article>
                    <article className="review">
                        <p className="Rating">5/5</p>
                        <div className="user">
                            <img src={user} alt='user'/>
                            <p className="Name">Maria</p>
                        </div>
                        <p className="description">This is their Review</p>
                    </article>
                    <article className="review">
                        <p className="Rating">5/5</p>
                        <div className="user">
                            <img src={user} alt='user'/>
                            <p className="Name">Marc</p>
                        </div>
                        <p className="description">This is their Review</p>
                    </article>
                    <article className="review">
                        <p className="Rating">5/5</p>
                        <div className="user">
                            <img src={user} alt='user'/>
                            <p className="Name">Lenny</p>
                        </div>
                        <p className="description">This is their Review</p>
                    </article>
                </div>
            </section>
            <section id="about" className="greenstyle">
                <div className="text">
                    <h3>Little Lemon</h3>
                    <h4>Chicago</h4>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                    </p>
                </div>
                <div className="pictures">
                    <img src={restaurant} alt='restaurant'/>
                    <img src={chef} alt='chef'/>
                </div>
            </section>
        </main>
    );
  }

  export default Main;