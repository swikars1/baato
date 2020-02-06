/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import Header from 'components/Header';
import messages from './messages';
import './style.css';

export default function HomePage() {
  return (
    <>
      <div>
        {/* Navbar STart */}
        <header id="topnav" className="defaultscroll sticky">
          <div className="container">
            {/* Logo container */}
            <div>
              <a className="logo" href="index.html">
                Landrick<span className="text-primary">.</span>
              </a>
            </div>
            <div className="buy-button">
              <a
                href="https://1.envato.market/4n73n"
                target="_blank"
                className="btn btn-primary"
              >
                Buy Now
              </a>
            </div>
            {/* end login button */}
            {/* End Logo container */}
            <div className="menu-extras">
              <div className="menu-item">
                {/* Mobile menu toggle */}
                <a className="navbar-toggle">
                  <div className="lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </a>
                {/* End mobile menu toggle */}
              </div>
            </div>
            <div id="navigation">
              {/* Navigation Menu */}
              <ul className="navigation-menu">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="has-submenu">
                  <a href="javascript:void(0)">Landing</a>
                  <span className="menu-arrow" />
                  <ul className="submenu megamenu">
                    <li>
                      <ul>
                        <li>
                          <a href="index-saas.html">Saas</a>
                        </li>
                        <li>
                          <a href="index-agency.html">Agency</a>
                        </li>
                        <li>
                          <a href="index-apps.html">Application</a>
                        </li>
                        <li>
                          <a href="index-studio.html">Studio</a>
                        </li>
                        <li>
                          <a href="index-business.html">Business</a>
                        </li>
                        <li>
                          <a href="index-modern-business.html">
                            Modern Business
                          </a>
                        </li>
                        <li>
                          <a href="index-hotel.html">Hotel</a>
                        </li>
                        <li>
                          <a href="index-marketing.html">Marketing</a>
                        </li>
                        <li>
                          <a href="index-enterprise.html">Enterprise </a>
                        </li>
                        <li>
                          <a href="index-coworking.html">Coworking</a>
                        </li>
                        <li>
                          <a href="index-cloud-hosting.html">Cloud Hosting</a>
                        </li>
                        <li>
                          <a href="index-event.html">Event</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li>
                          <a href="index-course.html">Course </a>
                        </li>
                        <li>
                          <a href="index-personal.html">Personal </a>
                        </li>
                        <li>
                          <a href="index-single-product.html">Product </a>
                        </li>
                        <li>
                          <a href="index-portfolio.html">Portfolio </a>
                        </li>
                        <li>
                          <a href="index-services.html">Service </a>
                        </li>
                        <li>
                          <a href="index-payments.html">Payments </a>
                        </li>
                        <li>
                          <a href="index-crypto.html">Cryptocurrency </a>
                        </li>
                        <li>
                          <a href="index-software.html">Software </a>
                        </li>
                        <li>
                          <a href="index-job.html">
                            Job{' '}
                            <span className="badge badge-danger rounded">
                              {' '}
                              v1.6{' '}
                            </span>{' '}
                          </a>
                        </li>
                        <li>
                          <a href="index-customer.html">
                            Customer{' '}
                            <span className="badge badge-danger rounded">
                              {' '}
                              v1.6{' '}
                            </span>{' '}
                          </a>
                        </li>
                        <li>
                          <a href="index-onepage.html">
                            Saas{' '}
                            <span className="badge badge-warning rounded ml-2">
                              Onepage
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="index-rtl.html">
                            RTL Version{' '}
                            <span className="badge badge-primary rounded ml-2">
                              RTL
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="javascript:void(0)">Pages</a>
                  <span className="menu-arrow" />
                  <ul className="submenu">
                    <li>
                      <a href="page-aboutus.html"> About Us</a>
                    </li>
                    <li>
                      <a href="page-services.html">Services</a>
                    </li>
                    <li>
                      <a href="page-pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="page-team.html"> Team</a>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0)">
                        {' '}
                        Account{' '}
                        <span className="badge badge-danger rounded">
                          {' '}
                          v1.6{' '}
                        </span>
                      </a>
                      <span className="submenu-arrow" />
                      <ul className="submenu">
                        <li>
                          <a href="page-profile.html">
                            Profile{' '}
                            <span className="badge badge-primary rounded">
                              New
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="page-profile-edit.html">
                            Account Setting{' '}
                            <span className="badge badge-primary rounded">
                              New
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="page-invoice.html">
                            Invoice{' '}
                            <span className="badge badge-primary rounded">
                              New
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0)">
                        {' '}
                        Careers{' '}
                        <span className="badge badge-success rounded">
                          {' '}
                          Added{' '}
                        </span>
                      </a>
                      <span className="submenu-arrow" />
                      <ul className="submenu">
                        <li>
                          <a href="page-jobs.html">Jobs</a>
                        </li>
                        <li>
                          <a href="page-job-detail.html">Job Detail</a>
                        </li>
                        <li>
                          <a href="page-job-apply.html">Job Apply</a>
                        </li>
                        <li>
                          <a href="page-job-company.html">
                            Company{' '}
                            <span className="badge badge-success rounded">
                              {' '}
                              New{' '}
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="page-job-candidate.html">
                            Candidate{' '}
                            <span className="badge badge-success rounded">
                              {' '}
                              New{' '}
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0)"> Blog</a>
                      <span className="submenu-arrow" />
                      <ul className="submenu">
                        <li>
                          <a href="page-blog.html">Blog Grid</a>
                        </li>
                        <li>
                          <a href="page-blog-sidebar.html">Blog with Sidebar</a>
                        </li>
                        <li>
                          <a href="page-blog-detail.html">Blog Detail</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0)"> Works</a>
                      <span className="submenu-arrow" />
                      <ul className="submenu">
                        <li>
                          <a href="page-work.html">Works Grid</a>
                        </li>
                        <li>
                          <a href="page-work-detail.html">Work Detail</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0)"> User </a>
                      <span className="submenu-arrow" />
                      <ul className="submenu">
                        <li>
                          <a href="page-login.html">Login</a>
                        </li>
                        <li>
                          <a href="page-signup.html">Signup</a>
                        </li>
                        <li>
                          <a href="page-recovery-password.html">
                            Recovery Password
                          </a>
                        </li>
                        <li>
                          <a href="page-cover-login.html">Login 2</a>
                        </li>
                        <li>
                          <a href="page-cover-signup.html">Signup 2</a>
                        </li>
                        <li>
                          <a href="page-cover-re-password.html">
                            Recovery Password 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0)"> Utility </a>
                      <span className="submenu-arrow" />
                      <ul className="submenu">
                        <li>
                          <a href="page-terms.html">Terms of Services</a>
                        </li>
                        <li>
                          <a href="page-privacy.html">Privacy Policy</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0)"> Special </a>
                      <span className="submenu-arrow" />
                      <ul className="submenu">
                        <li>
                          <a href="page-comingsoon.html">Coming Soon</a>
                        </li>
                        <li>
                          <a href="page-comingsoon2.html">Coming Soon Two </a>
                        </li>
                        <li>
                          <a href="page-maintenance.html">Maintenance</a>
                        </li>
                        <li>
                          <a href="page-error.html">Error</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <a href="javascript:void(0)"> Contact </a>
                      <span className="submenu-arrow" />
                      <ul className="submenu">
                        <li>
                          <a href="page-contact-detail.html">Contact Detail </a>
                        </li>
                        <li>
                          <a href="page-contact-one.html">Contact One </a>
                        </li>
                        <li>
                          <a href="page-contact-two.html">Contact Two </a>
                        </li>
                        <li>
                          <a href="page-contact-three.html">Contact Three </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="javascript:void(0)">Docs</a>
                  <span className="menu-arrow" />
                  <ul className="submenu">
                    <li>
                      <a href="documentation.html">Documentation </a>
                    </li>
                    <li>
                      <a href="changelog.html">Changelog </a>
                    </li>
                    <li>
                      <a href="components.html">Components</a>
                    </li>
                    <li>
                      <a href="widget.html">
                        Widget{' '}
                        <span className="badge badge-success rounded">
                          {' '}
                          Added{' '}
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* end navigation menu */}
              {/* end login button */}
            </div>
            {/* end navigation */}
          </div>
          {/* end container */}
        </header>
        {/* end header */}
        {/* Navbar End */}
        {/* Hero Start */}
        <section className="bg-half-170" id="home">
          <div className="home-center">
            <div className="home-desc-center">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-7">
                    <div className="title-heading mt-4">
                      <h1 className="heading mb-3">
                        Our Creativity Is Your{' '}
                        <span className="text-primary">Success</span>{' '}
                      </h1>
                      <p className="para-desc text-muted">
                        Launch your campaign and benefit from our expertise on
                        designing and managing conversion centered bootstrap4
                        html page.
                      </p>
                      <div className="mt-4 pt-2">
                        <a
                          href="page-contact-one.html"
                          className="btn btn-primary mt-2 mr-2"
                        >
                          <i className="mdi mdi-email" /> Get Started
                        </a>
                        <a
                          href="documentation.html"
                          className="btn btn-outline-primary mt-2"
                        >
                          <i className="mdi mdi-book-outline" /> Documentation
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <img src="images/illustrator/Startup_SVG.svg" alt="" />
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
              </div>
              {/* end container */}
            </div>
            {/* end home desc center */}
          </div>
          {/* end home center */}
        </section>
        {/* end section */}
        {/* Hero End */}
        {/* Partners start */}
        <section className="pt-5 pb-5 border-bottom border-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-2 col-md-2 col-6 text-center">
                <img
                  src="images/client/amazon.svg"
                  className="avatar avatar-ex-sm"
                  alt=""
                />
              </div>
              {/* end col */}
              <div className="col-lg-2 col-md-2 col-6 text-center">
                <img
                  src="images/client/google.svg"
                  className="avatar avatar-ex-sm"
                  alt=""
                />
              </div>
              {/* end col */}
              <div className="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
                <img
                  src="images/client/lenovo.svg"
                  className="avatar avatar-ex-sm"
                  alt=""
                />
              </div>
              {/* end col */}
              <div className="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
                <img
                  src="images/client/paypal.svg"
                  className="avatar avatar-ex-sm"
                  alt=""
                />
              </div>
              {/* end col */}
              <div className="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
                <img
                  src="images/client/shopify.svg"
                  className="avatar avatar-ex-sm"
                  alt=""
                />
              </div>
              {/* end col */}
              <div className="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
                <img
                  src="images/client/spotify.svg"
                  className="avatar avatar-ex-sm"
                  alt=""
                />
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end section */}
        {/* Partners End */}
        {/* How It Work Start */}
        <section className="section bg-light border-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <div className="section-title mb-60">
                  <h4 className="title mb-4">How It Work ?</h4>
                  <p className="text-muted para-desc mb-0 mx-auto">
                    Start working with{' '}
                    <span className="text-primary font-weight-bold">
                      Landrick
                    </span>{' '}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                <img src="images/illustrator/SEO_SVG.svg" alt="" />
              </div>
              {/* end col */}
              <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title ml-lg-5">
                  <h4 className="title mb-4">
                    Change the way you build websites
                  </h4>
                  <p className="text-muted">
                    You can combine all the Landrick templates into a single
                    one, you can take a component from the Application theme and
                    use it in the Website.
                  </p>
                  <ul className="list-unstyled feature-list text-muted">
                    <li>
                      <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2" />
                      Digital Marketing Solutions for Tomorrow
                    </li>
                    <li>
                      <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2" />
                      Our Talented &amp; Experienced Marketing Agency
                    </li>
                    <li>
                      <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2" />
                      Create your own skin to match your brand
                    </li>
                  </ul>
                  <a href="javascript:void(0)" className="mt-3 text-primary">
                    Find Out More <i className="mdi mdi-chevron-right" />
                  </a>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
          <div className="container mt-100 mt-60">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="section-title">
                  <h4 className="title mb-4">
                    Speed up your development <br /> with{' '}
                    <span className="text-primary">Landrick.</span>
                  </h4>
                  <p className="text-muted">
                    Using Landrick to build your site means never worrying about
                    designing another page or cross browser compatibility. Our
                    ever-growing library of components and pre-designed layouts
                    will make your life easier.
                  </p>
                  <ul className="list-unstyled feature-list text-muted">
                    <li>
                      <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2" />
                      Digital Marketing Solutions for Tomorrow
                    </li>
                    <li>
                      <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2" />
                      Our Talented &amp; Experienced Marketing Agency
                    </li>
                    <li>
                      <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2" />
                      Create your own skin to match your brand
                    </li>
                  </ul>
                  <a href="javascript:void(0)" className="mt-3 text-primary">
                    Find Out More <i className="mdi mdi-chevron-right" />
                  </a>
                </div>
              </div>
              {/* end col */}
              <div className="col-lg-5 col-md-6 order-1 order-md-2">
                <div className="p-4 rounded bg-white feature-form border ml-lg-5">
                  <img
                    src="images/illustrator/Mobile_notification_SVG.svg"
                    alt=""
                  />
                  <div className="content mt-4 pt-2">
                    <form>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group position-relative">
                            <label>
                              Name : <span className="text-danger">*</span>
                            </label>
                            <i className="mdi mdi-account ml-3 icons" />
                            <input
                              type="text"
                              className="form-control pl-5"
                              placeholder="Name"
                              name="name"
                              required
                            />
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-12">
                          <div className="form-group position-relative">
                            <label>
                              Email : <span className="text-danger">*</span>
                            </label>
                            <i className="mdi mdi-email ml-3 icons" />
                            <input
                              type="email"
                              className="form-control pl-5"
                              placeholder="Email"
                              name="email"
                              required
                            />
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-12">
                          <div className="form-group position-relative">
                            <label>
                              Password : <span className="text-danger">*</span>
                            </label>
                            <i className="mdi mdi-key ml-3 icons" />
                            <input
                              type="password"
                              className="form-control pl-5"
                              placeholder="Password"
                              required
                            />
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-lg-12 mt-2 mb-0">
                          <button className="btn btn-primary w-100">
                            Download
                          </button>
                        </div>
                        {/* end col */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end section */}
        {/* How It Work End */}
        {/* Testi Start */}
        <section className="section pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <div className="section-title mb-60">
                  <h4 className="title mb-4">Our Happy Customers</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Start working with{' '}
                    <span className="text-primary font-weight-bold">
                      Landrick
                    </span>{' '}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-12">
                <div id="customer-testi" className="owl-carousel owl-theme">
                  <div className="customer-testi mr-2 ml-2 text-center p-4 rounded border">
                    <img
                      src="images/client/amazon.svg"
                      className="img-fluid avatar avatar-ex-sm mx-auto"
                      alt=""
                    />
                    <p className="text-muted mt-4">
                      " It seems that only fragments of the original text remain
                      in the Lorem Ipsum texts used today. "
                    </p>
                    <h6 className="text-primary">- Thomas Israel</h6>
                  </div>
                  <div className="customer-testi mr-2 ml-2 text-center p-4 rounded border">
                    <img
                      src="images/client/google.svg"
                      className="img-fluid avatar avatar-ex-sm mx-auto"
                      alt=""
                    />
                    <p className="text-muted mt-4">
                      " The most well-known dummy text is the 'Lorem Ipsum',
                      which is said to have originated in the 16th century. "
                    </p>
                    <h6 className="text-primary">- Carl Oliver</h6>
                  </div>
                  <div className="customer-testi mr-2 ml-2 text-center p-4 rounded border">
                    <img
                      src="images/client/lenovo.svg"
                      className="img-fluid avatar avatar-ex-sm mx-auto"
                      alt=""
                    />
                    <p className="text-muted mt-4">
                      " One disadvantage of Lorum Ipsum is that in Latin certain
                      letters appear more frequently than others. "
                    </p>
                    <h6 className="text-primary">- Barbara McIntosh</h6>
                  </div>
                  <div className="customer-testi mr-2 ml-2 text-center p-4 rounded border">
                    <img
                      src="images/client/paypal.svg"
                      className="img-fluid avatar avatar-ex-sm mx-auto"
                      alt=""
                    />
                    <p className="text-muted mt-4">
                      " Thus, Lorem Ipsum has only limited suitability as a
                      visual filler for German texts. "
                    </p>
                    <h6 className="text-primary">- Jill Webb</h6>
                  </div>
                  <div className="customer-testi mr-2 ml-2 text-center p-4 rounded border">
                    <img
                      src="images/client/shopify.svg"
                      className="img-fluid avatar avatar-ex-sm mx-auto"
                      alt=""
                    />
                    <p className="text-muted mt-4">
                      " There is now an abundance of readable dummy texts. These
                      are usually used when a text is required. "
                    </p>
                    <h6 className="text-primary">- Dean Tolle</h6>
                  </div>
                  <div className="customer-testi mr-2 ml-2 text-center p-4 rounded border">
                    <img
                      src="images/client/spotify.svg"
                      className="img-fluid avatar avatar-ex-sm mx-auto"
                      alt=""
                    />
                    <p className="text-muted mt-4">
                      "According to most sources, Lorum Ipsum can be traced back
                      to a text composed by Cicero. "
                    </p>
                    <h6 className="text-primary">- Christa Smith</h6>
                  </div>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end section */}
        {/* Testi End */}
        {/* Pricing Start */}
        <section className="section">
          <div className="container">
            <div className="row mt-lg-4 align-items-center">
              <div className="col-lg-5 col-md-12 text-center text-lg-left">
                <div className="section-title mb-60">
                  <h4 className="title mb-4">Our Comfortable Rates</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Start working with{' '}
                    <span className="text-primary font-weight-bold">
                      Landrick
                    </span>{' '}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>
                  <a
                    href="https://1.envato.market/4n73n"
                    target="_blank"
                    className="btn btn-primary mt-4"
                  >
                    Buy Now{' '}
                    <span className="badge badge-danger rounded ml-2">
                      v1.6
                    </span>
                  </a>
                </div>
              </div>
              {/* end col */}
              <div className="col-lg-7 col-md-12">
                <div className="row align-items-center ml-lg-5">
                  <div className="col-md-6 col-12 pl-md-0 pr-md-0">
                    <div className="pricing-rates starter-plan shadow bg-white pt-5 pb-5 p-4 rounded text-center">
                      <h2 className="title text-uppercase text-primary mb-4">
                        Starter
                      </h2>
                      <div className="d-flex justify-content-center mb-4">
                        <span className="h4 mb-0 mt-2">$</span>
                        <span className="price h1 mb-0">39</span>
                        <span className="h4 align-self-end mb-1">/mo</span>
                      </div>
                      <ul className="feature list-unstyled pl-0">
                        <li className="feature-list">
                          <i className="mdi mdi-check text-success h5 mr-1" />
                          Full Access
                        </li>
                        <li className="feature-list">
                          <i className="mdi mdi-check text-success h5 mr-1" />
                          Source Files
                        </li>
                        <li className="feature-list">
                          <i className="mdi mdi-check text-success h5 mr-1" />
                          Free Appointments
                        </li>
                        <li className="feature-list">
                          <i className="mdi mdi-check text-success h5 mr-1" />
                          Enhanced Security
                        </li>
                      </ul>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-primary mt-4"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                  {/* end col */}
                  <div className="col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0 pl-md-0 pr-md-0">
                    <div className="pricing-rates bg-light pt-5 pb-5 p-4 rounded text-center">
                      <h2 className="title text-uppercase mb-4">
                        Professional
                      </h2>
                      <div className="d-flex justify-content-center mb-4">
                        <span className="h4 mb-0 mt-2">$</span>
                        <span className="price h1 mb-0">59</span>
                        <span className="h4 align-self-end mb-1">/mo</span>
                      </div>
                      <ul className="feature list-unstyled pl-0">
                        <li className="feature-list">
                          <i className="mdi mdi-check text-success h5 mr-1" />
                          Full Access
                        </li>
                        <li className="feature-list">
                          <i className="mdi mdi-check text-success h5 mr-1" />
                          Enhanced Security
                        </li>
                        <li className="feature-list">
                          <i className="mdi mdi-check text-success h5 mr-1" />
                          Source Files
                        </li>
                        <li className="feature-list">
                          <i className="mdi mdi-check text-success h5 mr-1" />1
                          Domain Free
                        </li>
                      </ul>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-primary mt-4"
                      >
                        Try It Now
                      </a>
                    </div>
                  </div>
                  {/* end col */}
                </div>
                {/* end row */}
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
          <div className="container-fluid">
            <div className="row">
              <div className="home-shape-bottom">
                <img
                  src="images/shapes/shape-light.png"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
            {/* end row */}
          </div>{' '}
          {/* END CONTAINER */}
        </section>
        {/* end section */}
        {/* Pricing End */}
        {/* FAQ n Contact Start */}
        <section className="section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="faq-container">
                  <h4 className="question">
                    <i className="mdi mdi-help-circle text-primary mr-2 h4" />{' '}
                    How our <span className="text-primary">Landrick</span> work
                    ?
                  </h4>
                  <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                    Due to its widespread use as filler text for layouts,
                    non-readability is of great importance: human perception is
                    tuned to recognize certain patterns and repetitions in
                    texts.
                  </p>
                </div>
              </div>
              {/* end col */}
              <div className="col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="faq-container">
                  <h4 className="question">
                    <i className="mdi mdi-help-circle text-primary mr-2 h4" />{' '}
                    What is the main process open account ?
                  </h4>
                  <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                    If the distribution of letters and 'words' is random, the
                    reader will not be distracted from making a neutral
                    judgement on the visual impact
                  </p>
                </div>
              </div>
              {/* end col */}
              <div className="col-md-6 col-12 mt-4 pt-2">
                <div className="faq-container">
                  <h4 className="question">
                    <i className="mdi mdi-help-circle text-primary mr-2 h4" />{' '}
                    How to make unlimited data entry ?
                  </h4>
                  <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                    Furthermore, it is advantageous when the dummy text is
                    relatively realistic so that the layout impression of the
                    final publication is not compromised.
                  </p>
                </div>
              </div>
              {/* end col */}
              <div className="col-md-6 col-12 mt-4 pt-2">
                <div className="faq-container">
                  <h4 className="question">
                    <i className="mdi mdi-help-circle text-primary mr-2 h4" />{' '}
                    Is <span className="text-primary">Landrick</span> safer to
                    use with my account ?
                  </h4>
                  <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                    The most well-known dummy text is the 'Lorem Ipsum', which
                    is said to have originated in the 16th century. Lorem Ipsum
                    is composed in a pseudo-Latin language which more or less
                    corresponds to 'proper' Latin.
                  </p>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
            <div className="row mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center">
              <div className="col-12 text-center">
                <div className="section-title">
                  <h4 className="title mb-4">Have Question ? Get in touch!</h4>
                  <p className="text-muted para-desc mx-auto">
                    Start working with{' '}
                    <span className="text-primary font-weight-bold">
                      Landrick
                    </span>{' '}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>
                  <a
                    href="page-contact-two.html"
                    className="btn btn-primary mt-4"
                  >
                    <i className="mdi mdi-phone" /> Contact us
                  </a>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
          <div className="container-fluid">
            <div className="row">
              <div className="home-shape-bottom">
                <img
                  src="images/shapes/shape-dark.png"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
            {/* end row */}
          </div>{' '}
          {/* END CONTAINER */}
        </section>
        {/* end section */}
        {/* FAQ n Contact End */}
        {/* Footer Start */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                <a className="logo-footer" href="#">
                  Landrick<span className="text-primary">.</span>
                </a>
                <p className="mt-4">
                  Start working with Landrick that can provide everything you
                  need to generate awareness, drive traffic, connect.
                </p>
                <ul className="list-unstyled social-icon social mb-0 mt-4">
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-facebook" title="Facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-instagram" title="Instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-twitter" title="Twitter" />
                    </a>
                  </li>
                </ul>
                {/* end icon */}
              </div>
              {/* end col */}
              <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">Company</h4>
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <a href="page-aboutus.html" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> About us
                    </a>
                  </li>
                  <li>
                    <a href="page-services.html" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> Services
                    </a>
                  </li>
                  <li>
                    <a href="page-team.html" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> Team
                    </a>
                  </li>
                  <li>
                    <a href="page-pricing.html" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> Pricing
                    </a>
                  </li>
                  <li>
                    <a href="page-work.html" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> Project
                    </a>
                  </li>
                  <li>
                    <a href="page-jobs.html" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> Careers
                    </a>
                  </li>
                  <li>
                    <a href="page-blog.html" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> Blog
                    </a>
                  </li>
                  <li>
                    <a href="page-cover-login.html" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> Login
                    </a>
                  </li>
                </ul>
              </div>
              {/* end col */}
              <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">Usefull Links</h4>
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <a href="page-terms.html" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> Terms of
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="page-privacy.html" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> Privacy
                      Policy
                    </a>
                  </li>
                  <li>
                    <a href="documentation.html" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> Documentation
                    </a>
                  </li>
                  <li>
                    <a href="changelog.html" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> Changelog
                    </a>
                  </li>
                  <li>
                    <a href="components.html" className="text-foot">
                      <i className="mdi mdi-chevron-right mr-1" /> Components
                    </a>
                  </li>
                </ul>
              </div>
              {/* end col */}
              <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">Newsletter</h4>
                <p className="mt-4">
                  Sign up and receive the latest tips via email.
                </p>
                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="foot-subscribe form-group position-relative">
                        <label>
                          Write your email{' '}
                          <span className="text-danger">*</span>
                        </label>
                        <i className="mdi mdi-email ml-3 icons" />
                        <input
                          type="email"
                          name="email"
                          id="emailsubscribe"
                          className="form-control pl-5 rounded"
                          placeholder="Your email : "
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <input
                        type="submit"
                        id="submitsubscribe"
                        name="send"
                        className="btn btn-primary w-100"
                        defaultValue="Subscribe"
                      />
                    </div>
                  </div>
                </form>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </footer>
        {/* end footer */}
        <hr />
        <footer className="footer footer-bar">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="text-sm-left">
                  <p className="mb-0">
                    © 2019-20 Landrick. Design with{' '}
                    <i className="mdi mdi-heart text-danger" /> by{' '}
                    <a
                      href="http://www.shreethemes.in/"
                      target="_blank"
                      className="text-success"
                    >
                      Shreethemes
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled payment-cards text-sm-right mb-0">
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">
                      <img
                        src="images/payments/american-ex.png"
                        title="American Express"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">
                      <img
                        src="images/payments/discover.png"
                        title="Discover"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">
                      <img
                        src="images/payments/master-card.png"
                        title="Master Card"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">
                      <img
                        src="images/payments/paypal.png"
                        title="Paypal"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">
                      <img
                        src="app/images/payments/visa.png"
                        title="Visa"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* end container */}
        </footer>
        {/* end footer */}
        {/* Footer End */}
        {/* Back to top */}
        <a
          href="#"
          className="back-to-top rounded text-center"
          id="back-to-top"
        >
          Back to Top!!!
          <i className="mdi mdi-chevron-up d-block"> asdasdasd</i>
        </a>
        {/* Back to top */}
        {/* javascript */}
        {/* SLIDER */}
        {/* Main Js */}
      </div>
    </>
  );
}
