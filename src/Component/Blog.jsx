import React from "react";

export default function blogComponent() {
    return (
        <div>
            <div id="__next">
                <div className="ps-page--blog">
                    <div className="container">
                        <div className="ps-page__header">
                            <h1>Our Press</h1>
                            <div className="ps-breadcrumb 2">
                                <ul className="breadcrumb">
                                    <li><a href="" target="blank">Home</a></li>
                                    <li>Our Press</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="ps-blog--sidebar reverse">
                            <div className="ps-blog__left">
                                <div className="ps-post-items">
                                    <div className="row">

                                        <div className="col-md-6">
                                            <article className="ps-post">
                                                <div className="ps-post__thumbnail">
                                                    <a className="ps-post__overlay" href="/post/1"></a>
                                                    <img src="https://beta.apinouthemes.com/uploads/1_6eb2deb2c6.jpg" alt="img" />
                                                </div>
                                                <div className="ps-post__content">
                                                    <div className="ps-post__meta">
                                                        <a href="/categories/technology">Technology</a>
                                                    </div>
                                                    <a className="ps-post__title" href="/post/1">Harman Kadon Onyx Studio Mini, Reviews &amp; Experiences</a>
                                                    <p>Feb 21, 2021 by <a href="#">drfurion</a></p>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="col-md-6">
                                            <article className="ps-post">
                                                <div className="ps-post__thumbnail">
                                                    <a className="ps-post__overlay" href="/post/2"></a>
                                                    <img src="https://beta.apinouthemes.com/uploads/2_7a54743a94.jpg" alt="img" />
                                                </div>
                                                <div className="ps-post__content">
                                                    <div className="ps-post__meta">
                                                        <a href="/categories/entertaiment">Entertainment</a>
                                                    </div>
                                                    <a className="ps-post__title" href="/post/2">Experience Great Sound With Beats’s Headphone</a>
                                                    <p>Feb 21, 2021 by <a href="#">drfurion</a></p>
                                                </div>
                                            </article>
                                        </div>

                                    </div>
                                    <div className="ps-pagination">
                                        <ul className="pagination">
                                            <li className="active"><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">Next Page<i className="icon-chevron-right"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="ps-blog__right">
                                <aside className="widget widget--blog widget--search">
                                    <form className="ps-form--widget-search" action="https://reactstorefronts.com/blog/do_action"
                                        method="get"><input type="text" className="form-control"
                                            placeholder="Search..." /><button><i className="icon-magnifier"></i></button></form>
                                </aside>
                                <aside className="widget widget--blog widget--categories">
                                    <h3 className="widget__title">Categories</h3>
                                    <div className="widget__content">
                                        <ul>
                                            <li><a href="../blog.html" target="blank">Business</a></li>
                                            <li><a href="../blog.html" target="blank">Entertaiment</a></li>
                                            <li><a href="../blog.html" target="blank">Fashion</a></li>
                                            <li><a href="../blog.html" target="blank">Life style</a></li>
                                            <li><a href="../blog.html" target="blank">Technology</a></li>
                                            <li><a href="../blog.html" target="blank">Others</a></li>
                                        </ul>
                                    </div>
                                </aside>
                                <aside className="widget widget--blog widget--recent-post">
                                    <h3 className="widget__title">Recent Posts</h3>
                                    <div className="widget__content">
                                        <p>Loading...</p>
                                    </div>
                                </aside>
                                <aside className="widget widget--blog widget--recent-comments">
                                    <h3 className="widget__title">Recent Comments</h3>
                                    <div className="widget__content">
                                        <p><a className="author" href="../blog.html" target="blank">drfurion </a>on <a href="../blog.html" target="blank">
                                            Dashboard</a></p>
                                        <p><a className="author" href="../blog.html" target="blank">logan </a>on <a href="../blog.html" target="blank">
                                            Rayban Rounded Sunglass Brown Color</a></p>
                                        <p><a className="author" href="../blog.html" target="blank">logan </a>on <a href="../blog.html" target="blank">
                                            Sound Intone I65 Earphone White Version</a></p>
                                        <p><a className="author" href="../blog.html" target="blank">logan</a>on<a href="../blog.html" target="blank"> Sleeve Linen
                                            Blend Caro Pane Shirt</a></p>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="ps-newsletter">
                    <div className=" container">
                        <form className="ps-form--newsletter" action="https://reactstorefronts.com/blog/do_action" method="post">
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