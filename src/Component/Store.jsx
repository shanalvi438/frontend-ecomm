import React from "react";

export default function storeComponent() {
    return(
    <div>
        <div id="__next">
            <div className="ps-page--single ps-page--vendor">
                <div className="ps-breadcrumb">
                    <div className="container">
                        <ul className="breadcrumb">
                            <li><a href="index.html" target="blank">Home</a></li>
                            <li>Stores</li>
                        </ul>
                    </div>
                </div>
                <section className="ps-store-list">
                    <div className="container">
                        <div className="ps-section__header">
                            <h3>Store list</h3>
                        </div>
                        <div className="ps-section__content">
                            <div className="ps-section__search row">
                                <div className="col-md-4">
                                    <div className="form-group"><button><i className="icon-magnifier"></i></button><input
                                        type="text" className="form-control" placeholder="Search vendor..." /></div>
                                </div>
                            </div>
                            <div className="ps-stores-items row">
                                <p>No store found.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
                <section className="ps-newsletter">
                    <div className=" container">
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
                                            placeholder="Email address" /><button className="ps-btn">Subscribe</button></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
        </div>
    </div>
    );
}