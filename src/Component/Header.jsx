import React from 'react';

export default function headerComponent() {
    return (
        <div>
            <div id="next">
                <header className="header header--1" data-sticky="true" id="headerSticky">
                    <div className="header__top">
                        <div className="ps-container">
                            <div className="header__left"><a className="ps-logo" href="" >
                                {/* <img src="static/img/logo_light.png" alt="" /> */}
                                <h1>Demo</h1>
                            </a>
                                <div className="menu--product-categories">
                                    <div className="menu__toggle"><i className="icon-menu"></i><span>Shop by Department</span></div>
                                    <div className="menu__content">
                                        <ul className="menu--dropdown">
                                            <li><a href="Componets.Blog.js" ><i className="icon-star"></i>Hot Promotions</a></li>
                                            <li className="menu-item-has-children has-mega-menu"><a href="shop.html" ><i
                                                className="icon-laundry"></i>Consumer Electronic</a>
                                                <div className="mega-menu">
                                                    <div className="mega-menu__column">
                                                        <h4>Electronic</h4>
                                                        <ul className="mega-menu__list">
                                                            <li><a href="shop.html" >Home Audio &amp; Theathers</a></li>
                                                            <li><a href="shop.html" >TV &amp; Videos</a></li>
                                                            <li><a href="shop.html" >Camera, Photos &amp; Videos</a></li>
                                                            <li><a href="shop.html" >Cellphones &amp; Accessories</a></li>
                                                            <li><a href="shop.html" >Headphones</a></li>
                                                            <li><a href="shop.html" >Videosgames</a></li>
                                                            <li><a href="shop.html" >Wireless Speakers</a></li>
                                                            <li><a href="shop.html" >Office Electronic</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-menu__column">
                                                        <h4>Accessories &amp; Parts</h4>
                                                        <ul className="mega-menu__list">
                                                            <li><a href="shop.html" >Digital Cables</a></li>
                                                            <li><a href="shop.html" >Audio &amp; Video Cables</a></li>
                                                            <li><a href="shop.html" >Batteries</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li><a href="shop.html" ><i className="icon-shirt"></i>Clothing &amp; Apparel</a></li>
                                            <li><a href="shop.html" ><i className="icon-lampshade"></i>Home, Garden &amp; Kitchen</a>
                                            </li>
                                            <li><a href="shop.html" ><i className="icon-heart-pulse"></i>Health &amp; Beauty</a></li>
                                            <li><a href="shop.html" ><i className="icon-diamond2"></i>Yewelry &amp; Watches</a></li>
                                            <li className="menu-item-has-children has-mega-menu"><a href="shop.html" ><i
                                                className="icon-desktop"></i>Computer &amp; Technology</a>
                                                <div className="mega-menu">
                                                    <div className="mega-menu__column">
                                                        <h4>Computer &amp; Technologies</h4>
                                                        <ul className="mega-menu__list">
                                                            <li><a href="shop.html" >Computer &amp; Tablets</a></li>
                                                            <li><a href="shop.html" >Laptop</a></li>
                                                            <li><a href="shop.html" >Monitors</a></li>
                                                            <li><a href="shop.html" >Networking</a></li>
                                                            <li><a href="shop.html" >Drive &amp; Storages</a></li>
                                                            <li><a href="shop.html" >Computer Components</a></li>
                                                            <li><a href="shop.html" >Security &amp; Protection</a></li>
                                                            <li><a href="shop.html" >Gaming Laptop</a></li>
                                                            <li><a href="shop.html" >Accessories</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li><a href="shop.html" ><i className="icon-baby-bottle"></i>Babies &amp; Moms</a></li>
                                            <li><a href="shop.html" ><i className="icon-baseball"></i>Sport &amp; Outdoor</a></li>
                                            <li><a href="shop.html" ><i className="icon-smartphone"></i>Phones &amp; Accessories</a>
                                            </li>
                                            <li><a href="shop.html" ><i className="icon-book2"></i>Books &amp; Office</a></li>
                                            <li><a href="shop.html" ><i className="icon-car-siren"></i>Cars &amp; Motocycles</a></li>
                                            <li><a href="shop.html" ><i className="icon-wrench"></i>Home Improments</a></li>
                                            <li><a href="shop.html" ><i className="icon-tag"></i>Vouchers &amp; Services</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="header__center">
                                <form className="ps-form--quick-search" method="get" action="https://reactstorefronts.com/">
                                    <div className="ps-form__categories"><select className="form-control">
                                        <option value="All">All</option>
                                        <option value="Babies &amp; Moms">Babies &amp; Moms</option>
                                        <option value="Books &amp; Office">Books &amp; Office</option>
                                        <option value="Cars &amp; Motocycles">Cars &amp; Motocycles</option>
                                        <option value="Clothing &amp; Apparel">Clothing &amp; Apparel</option>
                                        <option value=" Accessories"> Accessories</option>
                                        <option value="Bags">Bags</option>
                                        <option value="Kid’s Fashion">Kid’s Fashion</option>
                                        <option value="Mens">Mens</option>
                                        <option value="Shoes">Shoes</option>
                                        <option value="Sunglasses">Sunglasses</option>
                                        <option value="Womens">Womens</option>
                                        <option value="Computers &amp; Technologies">Computers &amp; Technologies</option>
                                        <option value="Desktop PC">Desktop PC</option>
                                        <option value="Laptop">Laptop</option>
                                        <option value="Smartphones">Smartphones</option>
                                        <option value="Consumer Electrics">Consumer Electrics</option>
                                        <option value="Air Conditioners">Air Conditioners</option>
                                        <option value="Accessories">Accessories</option>
                                        <option value="Type Hanging Cell">Type Hanging Cell</option>
                                        <option value="Audios &amp; Theaters">Audios &amp; Theaters</option>
                                        <option value="Headphone">Headphone</option>
                                        <option value="Home Theater System">Home Theater System</option>
                                        <option value="Speakers">Speakers</option>
                                        <option value="Car Electronics">Car Electronics</option>
                                        <option value="Audio &amp; Video">Audio &amp; Video</option>
                                        <option value="Car Security">Car Security</option>
                                        <option value="Radar Detector">Radar Detector</option>
                                        <option value="Vehicle GPS">Vehicle GPS</option>
                                        <option value="Office Electronics">Office Electronics</option>
                                        <option value="Printers">Printers</option>
                                        <option value="Projectors">Projectors</option>
                                        <option value="Scanners">Scanners</option>
                                        <option value="Store &amp; Business">Store &amp; Business</option>
                                        <option value="Refrigerators">Refrigerators</option>
                                        <option value="TV Televisions">TV Televisions</option>
                                        <option value="4K Ultra HD TVs">4K Ultra HD TVs</option>
                                        <option value="LED TVs">LED TVs</option>
                                        <option value="OLED TVs">OLED TVs</option>
                                        <option value="Washing Machines">Washing Machines</option>
                                        <option value="Type Drying Clothes">Type Drying Clothes</option>
                                        <option value="Type Horizontal">Type Horizontal</option>
                                        <option value="Type Vertical">Type Vertical</option>
                                        <option value="Garden &amp; Kitchen">Garden &amp; Kitchen</option>
                                        <option value="Cookware">Cookware</option>
                                        <option value="Decoration">Decoration</option>
                                        <option value="Furniture">Furniture</option>
                                        <option value="Garden Tools">Garden Tools</option>
                                        <option value="Home Improvement">Home Improvement</option>
                                        <option value="Powers And Hand Tools">Powers And Hand Tools</option>
                                        <option value="Utensil &amp; Gadget">Utensil &amp; Gadget</option>
                                        <option value="Health &amp; Beauty">Health &amp; Beauty</option>
                                        <option value="Equipments">Equipments</option>
                                        <option value="Hair Care">Hair Care</option>
                                        <option value="Perfumer">Perfumer</option>
                                        <option value="Wine Cabinets">Wine Cabinets</option>
                                    </select></div>
                                    <div className="ps-form__input"><input type="text" className="form-control" value=""
                                        placeholder="I&#x27;m shopping for..." /></div><button>Search</button>
                                    <div className="ps-panel--search-result">
                                        <div className="ps-panel__content">
                                            <p>No product found.</p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="header__right">
                                <div className="header__actions"><a className="header__extra" href="account/compare.html" ><i
                                    className="icon-chart-bars"></i><span><i>0</i></span></a><a className="header__extra"
                                        href="account/wishlist.html" ><i className="icon-heart"></i><span><i>0</i></span></a>
                                    <div className="ps-cart--mini"><a className="header__extra" href="#"><i
                                        className="icon-bag2"></i><span><i>0</i></span></a>
                                        <div className="ps-cart__content">
                                            <div className="ps-cart__items"><span>No products in cart</span></div>
                                        </div>
                                    </div>
                                    <div className="ps-block--user-header">
                                        <div className="ps-block__left"><i className="icon-user"></i></div>
                                        <div className="ps-block__right"><a href="account/login.html" >Login</a><a
                                            href="account/register.html" >Register</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="navigation">
                        <div className="ps-container">
                            <div className="navigation__left">
                                <div className="menu--product-categories">
                                    <div className="menu__toggle"><i className="icon-menu"></i><span>Shop by Department</span></div>
                                    <div className="menu__content">
                                        <ul className="menu--dropdown">
                                            <li><a href="/Promotion" ><i className="icon-star"></i>Hot Promotions</a></li>
                                            <li className="menu-item-has-children has-mega-menu"><a href="shop.html" ><i
                                                className="icon-laundry"></i>Consumer Electronic</a>
                                                <div className="mega-menu">
                                                    <div className="mega-menu__column">
                                                        <h4>Electronic</h4>
                                                        <ul className="mega-menu__list">
                                                            <li><a href="shop.html" >Home Audio &amp; Theathers</a></li>
                                                            <li><a href="shop.html" >TV &amp; Videos</a></li>
                                                            <li><a href="shop.html" >Camera, Photos &amp; Videos</a></li>
                                                            <li><a href="shop.html" >Cellphones &amp; Accessories</a></li>
                                                            <li><a href="shop.html" >Headphones</a></li>
                                                            <li><a href="shop.html" >Videosgames</a></li>
                                                            <li><a href="shop.html" >Wireless Speakers</a></li>
                                                            <li><a href="shop.html" >Office Electronic</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-menu__column">
                                                        <h4>Accessories &amp; Parts</h4>
                                                        <ul className="mega-menu__list">
                                                            <li><a href="shop.html" >Digital Cables</a></li>
                                                            <li><a href="shop.html" >Audio &amp; Video Cables</a></li>
                                                            <li><a href="shop.html" >Batteries</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li><a href="shop.html" ><i className="icon-shirt"></i>Clothing &amp; Apparel</a></li>
                                            <li><a href="shop.html" ><i className="icon-lampshade"></i>Home, Garden &amp; Kitchen</a>
                                            </li>
                                            <li><a href="shop.html" ><i className="icon-heart-pulse"></i>Health &amp; Beauty</a></li>
                                            <li><a href="shop.html" ><i className="icon-diamond2"></i>Yewelry &amp; Watches</a></li>
                                            <li className="menu-item-has-children has-mega-menu"><a href="shop.html" ><i
                                                className="icon-desktop"></i>Computer &amp; Technology</a>
                                                <div className="mega-menu">
                                                    <div className="mega-menu__column">
                                                        <h4>Computer &amp; Technologies</h4>
                                                        <ul className="mega-menu__list">
                                                            <li><a href="shop.html" >Computer &amp; Tablets</a></li>
                                                            <li><a href="shop.html" >Laptop</a></li>
                                                            <li><a href="shop.html" >Monitors</a></li>
                                                            <li><a href="shop.html" >Networking</a></li>
                                                            <li><a href="shop.html" >Drive &amp; Storages</a></li>
                                                            <li><a href="shop.html" >Computer Components</a></li>
                                                            <li><a href="shop.html" >Security &amp; Protection</a></li>
                                                            <li><a href="shop.html" >Gaming Laptop</a></li>
                                                            <li><a href="shop.html" >Accessories</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li><a href="shop.html" ><i className="icon-baby-bottle"></i>Babies &amp; Moms</a></li>
                                            <li><a href="shop.html" ><i className="icon-baseball"></i>Sport &amp; Outdoor</a></li>
                                            <li><a href="shop.html" ><i className="icon-smartphone"></i>Phones &amp; Accessories</a>
                                            </li>
                                            <li><a href="shop.html" ><i className="icon-book2"></i>Books &amp; Office</a></li>
                                            <li><a href="shop.html" ><i className="icon-car-siren"></i>Cars &amp; Motocycles</a></li>
                                            <li><a href="shop.html" ><i className="icon-wrench"></i>Home Improments</a></li>
                                            <li><a href="shop.html" ><i className="icon-tag"></i>Vouchers &amp; Services</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="navigation__right">
                                <ul className="menu">
                                    <li className="menu-item-has-children dropdown"><a href="index.html" >Home</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item-has-children dropdown"><a href="index.html" >Marketplace Full
                                                Width</a></li>
                                            <li className="menu-item-has-children dropdown"><a href="home/auto-part.html" >Home Auto
                                                Parts</a></li>
                                            <li className="menu-item-has-children dropdown"><a href="home/technology.html" >Home
                                                Technology</a></li>
                                            <li className="menu-item-has-children dropdown"><a href="home/organic.html" >Home
                                                Organic</a></li>
                                            <li className="menu-item-has-children dropdown"><a href="home/market-place.html" >Home
                                                Marketplace V1</a></li>
                                            <li className="menu-item-has-children dropdown"><a href="home/market-place-2.html" >Home
                                                Marketplace V2</a></li>
                                            <li className="menu-item-has-children dropdown"><a href="home/market-place-3.html" >Home
                                                Marketplace V3</a></li>
                                            <li className="menu-item-has-children dropdown"><a href="home/market-place-4.html" >Home
                                                Marketplace V4</a></li>
                                            <li className="menu-item-has-children dropdown"><a href="home/electronic.html" >Home
                                                Electronic</a></li>
                                            <li className="menu-item-has-children dropdown"><a href="home/furniture.html" >Home
                                                Furniture</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children has-mega-menu"><a href="../Store" >Shop</a>
                                        <div className="mega-menu">
                                            <div className="mega-menu__column">
                                                <h4>Catalog Pages</h4>
                                                <ul className="mega-menu__list">
                                                    <li><a href="shop.html" >Shop Default</a></li>
                                                    <li><a href="shop/shop-fullwidth.html" >Shop Fullwidth</a></li>
                                                    <li><a href="shop/shop-categories.html" >Shop Categories</a></li>
                                                    <li><a href="shop/shop-sidebar.html" >Shop Sidebar</a></li>
                                                    <li><a href="shop/shop-sidebar-without-banner.html" >Shop Without Banner</a>
                                                    </li>
                                                    <li><a href="shop/shop-carousel.html" >Shop Carousel</a></li>
                                                </ul>
                                            </div>
                                            <div className="mega-menu__column">
                                                <h4>Product Layout</h4>
                                                <ul className="mega-menu__list">
                                                    <li><a href="product/3.html" >Default</a></li>
                                                    <li><a href="product/extended/7.html" >Extended</a></li>
                                                    <li><a href="product/full-content/7.html" >Full Content</a></li>
                                                    <li><a href="product/boxed/7.html" >Boxed</a></li>
                                                    <li><a href="product/sidebar/7.html" >Sidebar</a></li>
                                                </ul>
                                            </div>
                                            <div className="mega-menu__column">
                                                <h4>Product Types</h4>
                                                <ul className="mega-menu__list">
                                                    <li><a href="product/3.html" >Simple</a></li>
                                                    <li><a href="product/image-swatches/11.html" >Image swatches</a></li>
                                                    <li><a href="product/countdown/10.html" >Countdown</a></li>
                                                    <li><a href="product/affiliate/7.html" >Affiliate</a></li>
                                                    <li><a href="product/on-sale/7.html" >On sale</a></li>
                                                    <li><a href="product/groupped/22.html" >Grouped</a></li>
                                                    <li><a href="product/out-of-stock/7.html" >Out Of Stock</a></li>
                                                </ul>
                                            </div>
                                            <div className="mega-menu__column">
                                                <h4>Ecomerce Pages</h4>
                                                <ul className="mega-menu__list">
                                                    <li><a href="account/shopping-cart.html" >Shopping Cart</a></li>
                                                    <li><a href="account/checkout.html" >Checkout</a></li>
                                                    <li><a href="account/wishlist.html" >Whishlist</a></li>
                                                    <li><a href="account/compare.html" >Compare</a></li>
                                                    <li><a href="account/order-tracking.html" >Order Tracking</a></li>
                                                    <li><a href="account/login.html" >My Account</a></li>
                                                    <li><a href="account/login.html" >Login / Register</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-item-has-children has-mega-menu"><a href="index.html" >Pages</a>
                                        <div className="mega-menu">
                                            <div className="mega-menu__column">
                                                <h4>Basic Page</h4>
                                                <ul className="mega-menu__list">
                                                    <li><a href="/About" >About Us</a></li>
                                                    <li><a href="page/contact-us.html" >Contact</a></li>
                                                    <li><a href="page/faqs.html" >Faqs</a></li>
                                                    <li><a href="page/page-404.html" >404 Page</a></li>
                                                </ul>
                                            </div>
                                            <div className="mega-menu__column">
                                                <h4>Vendor Pages</h4>
                                                <ul className="mega-menu__list">
                                                    <li><a href="vendor/become-a-vendor.html" >Become a Vendor</a></li>
                                                    <li><a href="store/global-office.html" >Vendor Store</a></li>
                                                    <li><a href="stores.html" >Store List</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="menu-item-has-children has-mega-menu"><a href="/Blog" >Blogs</a>
                                        <div className="mega-menu">
                                            <div className="mega-menu__column">
                                                <h4>Blog Layout</h4>
                                                <ul className="mega-menu__list">
                                                    <li><a href="blog.html" >Grid</a></li>
                                                    <li><a href="blog/blog-small-thumbnail.html" >Small Thumb</a></li>
                                                    <li><a href="blog/blog-left-sidebar.html" >Left Sidebar</a></li>
                                                    <li><a href="blog/blog-right-sidebar.html" >Right Sidebar</a></li>
                                                </ul>
                                            </div>
                                            <div className="mega-menu__column">
                                                <h4>Single Blog</h4>
                                                <ul className="mega-menu__list">
                                                    <li><a href="post/default.html" >Single 1</a></li>
                                                    <li><a href="post/detail-2.html" >Single 2</a></li>
                                                    <li><a href="post/detail-3.html" >Single 3</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="navigation__extra">
                                    <li><a href="vendor/become-a-vendor.html" >Sell on</a></li>
                                    <li><a href="account/order-tracking.html" >Tract your order</a></li>
                                    <li>
                                        <div className="ps-dropdown"><a href="index.html" >USD</a>
                                            <ul className="ps-dropdown-menu">
                                                <li><a href="index.html" >USD</a></li>
                                                <li><a href="index.html" >EURO</a></li>
                                                <li><a href="index.html" >GBP</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="ps-dropdown language"><a href="#"><img src="static/img/flag/en.png"
                                            alt="martfury" />English</a>
                                            <ul className="ps-dropdown-menu">
                                                <li><a href="#"><img src="static/img/flag/germany.png"
                                                    alt="martfury" />Germany</a></li>
                                                <li><a href="#"><img src="static/img/flag/fr.png" alt="martfury" />France</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <header className="header header--mobile">
                    <div className="header__top">
                        <div className="header__left">
                            <p>Welcome to Online Shopping Store !</p>
                        </div>
                        <div className="header__right">
                            <ul className="navigation__extra">
                                <li><a href="vendor/become-a-vendor.html" >Sell on</a></li>
                                <li><a href="account/order-tracking.html" >Tract your order</a></li>
                                <li>
                                    <div className="ps-dropdown"><a href="index.html" >USD</a>
                                        <ul className="ps-dropdown-menu">
                                            <li><a href="index.html" >USD</a></li>
                                            <li><a href="index.html" >EURO</a></li>
                                            <li><a href="index.html" >GBP</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="ps-dropdown language"><a href="#"><img src="static/img/flag/en.png"
                                        alt="martfury" />English</a>
                                        <ul className="ps-dropdown-menu">
                                            <li><a href="#"><img src="static/img/flag/germany.png" alt="martfury" />Germany</a>
                                            </li>
                                            <li><a href="#"><img src="static/img/flag/fr.png" alt="martfury" />France</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navigation--mobile">
                        <div className="navigation__left"><a className="ps-logo" href="index.html" ><img src="static/img/logo_light.png"
                            alt="martfury" /></a></div>
                        <div className="navigation__right"><a className="header__extra" href="#"><i
                            className="icon-bag2"></i><span><i>0</i></span></a>
                            <div className="header__extra"><i className="icon-user"></i></div>
                        </div>
                    </div>
                    <div className="ps-search--mobile">
                        <form className="ps-form--search-mobile" action="https://reactstorefronts.com/" method="get">
                            <div className="form-group--nest"><input type="text" className="form-control"
                                placeholder="Search something..." /><button><i className="icon-magnifier"></i></button></div>
                        </form>
                    </div>
                </header>
            </div>
        </div>    
    );
    }


  