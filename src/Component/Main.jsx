import React from "react";

export default function mainComponent(){
    return(
        <div>
        <div id="next">
        <main id="homepage-1">
        <div className="ps-home-banner ps-home-banner--1">
            <div className="ps-container">
                <div className="ps-section__left">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                    <div className="carousel-item d-flex justify-content-center align-items-center active">
                        <img className="d-block" src="static/img/fb/1.jpg" alt="First slide" width="50%"/>
                    </div>
                    <div className="carousel-item d-flex justify-content-center align-items-center">
                        <img className="d-block" src="static/img/fb/1.jpg" alt="Second slide" width="50%" />
                    </div>
                    <div className="carousel-item d-flex justify-content-center align-items-center">
                        <img className="d-block" src="static/img/fb/1.jpg" alt="Third slide"  width="50%"/>
                    </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                    </a>
                </div>
                </div>
                <div className="ps-section__right"><a className="ps-collection" href="shop.html" target="blank"><img
                            src="https://beta.apinouthemes.com/uploads/promotion_1_d6deb591f0.jpeg" alt="martfury" /></a><a className="ps-collection"
                        href="shop.html" target="blank"><img src="https://beta.apinouthemes.com/uploads/promotion_2_d252453586.jpeg" alt="martfury" /></a></div>
            </div>
        </div>
        <div className="ps-site-features">
            <div className="ps-container">
                <div className="ps-block--site-features">
                    <div className="ps-block__item">
                        <div className="ps-block__left"><i className="icon-rocket"></i></div>
                        <div className="ps-block__right">
                            <h4>Free Delivery</h4>
                            <p>For all oders over $99</p>
                        </div>
                    </div>
                    <div className="ps-block__item">
                        <div className="ps-block__left"><i className="icon-sync"></i></div>
                        <div className="ps-block__right">
                            <h4>90 Days Return</h4>
                            <p>If goods have problems</p>
                        </div>
                    </div>
                    <div className="ps-block__item">
                        <div className="ps-block__left"><i className="icon-credit-card"></i></div>
                        <div className="ps-block__right">
                            <h4>Secure Payment</h4>
                            <p>100% secure payment</p>
                        </div>
                    </div>
                    <div className="ps-block__item">
                        <div className="ps-block__left"><i className="icon-bubbles"></i></div>
                        <div className="ps-block__right">
                            <h4>24/7 Support</h4>
                            <p>Dedicated support</p>
                        </div>
                    </div>
                    <div className="ps-block__item">
                        <div className="ps-block__left"><i className="icon-gift"></i></div>
                        <div className="ps-block__right">
                            <h4>Gift Service</h4>
                            <p>Support gift service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ps-deal-of-day">
            <div className="ps-container">
                <div className="ps-section__header">
                    <div className="ps-block--countdown-deal">
                        <div className="ps-block__left">
                            <h3>Deal of the day</h3>
                        </div>
                        <div className="ps-block__right">
                            <figure>
                                <figcaption>End in:</figcaption>
                                <ul className="ps-countdown">
                                    <li><span className="days mr-1"></span></li>
                                    <li><span className="hours ml-1 mr-1"></span></li>
                                    <li><span className="minutes ml-1 mr-1"></span></li>
                                    <li><span className="seconds ml-1"></span></li>
                                </ul>
                            </figure>
                        </div>
                    </div><a href="shop.html" target="blank">View all</a>
                </div>
                {/* <div className="ps-section__content">
                    <p>No product(s) found.</p>
                </div> */}
            </div>
        </div>
        <div className="ps-home-ads">
            <div className="ps-container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 "><a className="ps-collection"
                            href="shop.html" target="blank"><img src="static/img/fb/2.jpg" alt="martfury" /></a></div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 "><a className="ps-collection"
                            href="shop.html" target="blank"><img src="static/img/fb/3.jpg" alt="martfury" /></a></div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 "><a className="ps-collection"
                            href="shop.html" target="blank"><img src="static/img/fb/8.jpg" alt="martfury" /></a></div>
                </div>
            </div>
        </div>
        <div className="ps-top-categories">
            <div className="ps-container">
                <h3>Top categories of the month</h3>
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                        <div className="ps-block--category"><a className="ps-block__overlay" href="shop.html" target="blank"></a><img
                                src="static/img/categories/1.jpg" alt="martfury" />
                            <p>Electronics</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                        <div className="ps-block--category"><a className="ps-block__overlay" href="shop.html" target="blank"></a><img
                                src="static/img/categories/2.jpg" alt="martfury" />
                            <p>Clothings</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                        <div className="ps-block--category"><a className="ps-block__overlay" href="shop.html" target="blank"></a><img
                                src="static/img/categories/3.jpg" alt="martfury" />
                            <p>Computers</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                        <div className="ps-block--category"><a className="ps-block__overlay" href="shop.html" target="blank"></a><img
                                src="static/img/categories/4.jpg" alt="martfury" />
                            <p>Home &amp; Kitchen</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                        <div className="ps-block--category"><a className="ps-block__overlay" href="shop.html" target="blank"></a><img
                                src="static/img/categories/5.jpg" alt="martfury" />
                            <p>Health &amp; Beauty</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                        <div className="ps-block--category"><a className="ps-block__overlay" href="shop.html" target="blank"></a><img
                                src="static/img/categories/6.jpg" alt="martfury" />
                            <p>Health &amp; Beauty</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                       
                    </div><div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                       
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                        <div className="ps-block--category"><a className="ps-block__overlay" href="shop.html" target="blank"></a><img
                                src="static/img/categories/7.jpg" alt="martfury" />
                            <p>Jewelry &amp; Watch</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                        <div className="ps-block--category"><a className="ps-block__overlay" href="shop.html" target="blank"></a><img
                                src="static/img/categories/8.jpg" alt="martfury" />
                            <p>Technology Toys</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                       
                       </div>
                       <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                          
                       </div>
                </div>
            </div>
        </div>
        <div className="ps-product-list">
            <div className="ps-container">
                <div className="ps-section__header">
                    <h3>Consumer Electronics</h3>
                    <ul className="ps-section__links">
                        <li className="active"><a href="#">New Arrivals</a></li>
                        <li className=""><a href="#">Best seller</a></li>
                        <li className=""><a href="#">Most Popular</a></li>
                        <li><a href="shop.html" target="blank">View All</a></li>
                    </ul>
                </div>
                <div className="ps-section__content">
                <div className="ps-home-ads">
                    <div className="ps-container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 "><a className="ps-collection"
                                    href="shop.html" target="blank"><img src="static/img/fb/16.jpg" alt="martfury" /></a></div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 "><a className="ps-collection"
                                    href="shop.html" target="blank"><img src="static/img//fb/10.jpg" alt="martfury" /></a></div>
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="ps-product-list">
            <div className="ps-container">
                <div className="ps-section__header">
                    <h3>Fashion</h3>
                    <ul className="ps-section__links">
                        <li className="active"><a href="#">New Arrivals</a></li>
                        <li className=""><a href="#">Best seller</a></li>
                        <li className=""><a href="#">Most Popular</a></li>
                        <li><a href="shop.html" target="blank">View All</a></li>
                    </ul>
                </div>
                <div className="ps-section__content">
                <div className="ps-home-ads">
                    <div className="ps-container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 "><a className="ps-collection"
                                    href="shop.html" target="blank"><img src="static/img/fb/11.jpg" alt="martfury" /></a></div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 "><a className="ps-collection"
                                    href="shop.html" target="blank"><img src="static/img//fb/12.jpg" alt="martfury" /></a></div>
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="ps-product-list">
            <div className="ps-container">
                <div className="ps-section__header">
                    <h3>Garden &amp; Kitchen</h3>
                    <ul className="ps-section__links">
                        <li className="active"><a href="#">New Arrivals</a></li>
                        <li className=""><a href="#">Best seller</a></li>
                        <li className=""><a href="#">Most Popular</a></li>
                        <li><a href="shop.html" target="blank">View All</a></li>
                    </ul>
                </div>
                {/* <div className="ps-section__content">
                    <p>No product(s) found.</p>
                </div> */}
            </div>
        </div>
        <div className="ps-home-ads">
            <div className="ps-container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 "><a className="ps-collection"
                            href="shop.html" target="blank"><img src="static/img/fb/18.jpg" alt="martfury" /></a></div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 "><a className="ps-collection"
                            href="shop.html" target="blank"><img src="static/img/fb/19.jpg" alt="martfury" /></a></div>
                </div>
            </div>
        </div>
        <section className="ps-download-app">
            <div className="ps-container">
                <div className="ps-block--download-app">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                                <div className="ps-block__thumbnail"><img src="static/img/app.png" alt="martfury" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                                <div className="ps-block__content">
                                    <h3>Download App Now!</h3>
                                    <p>Shopping fastly and easily more with our app. Get a link to download the app
                                        on your phone</p>
                                    <form className="ps-form--download-app"
                                        action="https://reactstorefronts.com/do_action" method="post">
                                        <div className="form-group--nest"><input type="Email" className="form-control"
                                                placeholder="Email Address" /><button
                                                className="ps-btn">Subscribe</button></div>
                                    </form>
                                    <p className="download-link"><a href="#"><img src="static/img/google-play.png"
                                                alt="martfury" /></a><a href="#"><img src="static/img/app-store.png"
                                                alt="martfury" /></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="ps-product-list ps-new-arrivals">
            <div className="ps-container">
                <div className="ps-section__header">
                    <h3>Hot New Arrivals</h3>
                    <ul className="ps-section__links">
                        <li><a href="shop.html" target="blank">Technologies</a></li>
                        <li><a href="shop.html" target="blank">Electronic</a></li>
                        <li><a href="shop.html" target="blank">Furnitures</a></li>
                        <li><a href="shop.html" target="blank">Clothing &amp; Apparel</a></li>
                        <li><a href="shop9233.html?category=health-and-beauty">Health &amp; Beauty</a></li>
                        <li><a href="shop.html" target="blank">View All</a></li>
                    </ul>
                </div>
                </div>
                <div>
                    <div className="container">
                        {/* <p>not found</p> */}
                    </div>
                <div className="ps-home-ads">
            <div className="ps-container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 "><a className="ps-collection"
                            href="shop.html" target="blank"><img src="static/img/fb/23.jpg" alt="martfury" /></a></div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 "><a className="ps-collection"
                            href="shop.html" target="blank"><img src="static/img/fb/21.jpg" alt="martfury" /></a></div>
                </div>
            </div>
        </div>
            </div>
        </div>
        <section className="ps-newsletter">
            <div className="ps-container">
                <form className="ps-form--newsletter" action="https://reactstorefronts.com/do_action" method="post">
                    <div className="row">
                        <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div className="ps-form__left">
                                <h3>Newsletter</h3>
                                <p>Subcribe to get information about products and coupons</p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div className="ps-form__right">
                                <div className="form-group--nest"><input type="email" className="form-control"
                                        placeholder="Email address" /><button className="ps-btn">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </main>
    </div>
    </div>
    );
}