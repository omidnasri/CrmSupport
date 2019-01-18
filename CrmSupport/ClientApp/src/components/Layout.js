import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Layout extends Component
{
    displayName = Layout.name

    render()
    {
        return (
            <div>
                <div className="nav-menu fixed-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <nav className="navbar navbar-dark navbar-expand-lg">
                                    <a className="navbar-brand" href="index.html">
                                        <img src="images/logo.png" className="img-fluid" alt="logo" />
                                    </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                                    <div className="collapse navbar-collapse" id="navbar">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item"> <a className="nav-link" href="#home">خانــــــه <span className="sr-only">(current)</span></a> </li>
                                            <li className="nav-item"> <a className="nav-link" href="#features">پشتیبانی</a> </li>
                                            <li className="nav-item"> <a className="nav-link" href="#tutorial">آموزش</a> </li>
                                            <li className="nav-item"> <a className="nav-link" href="#commends">نظرات</a> </li>
                                            <li className="nav-item"> <a className="nav-link" href="#contact">تماس با ما</a> </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.children}
                <div className="go-up">
                    <i className="ti-angle-up" />
                </div>
                <div className="py-5" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className=" d-block d-sm-inline-block">
                                    <p className="mb-2">
                                        <span className="ti-email mr-2" />
                                        <a className="mr-4" href="mailto:omid.nasri@outlook.com">omid.nasri@outlook</a>
                                    </p>
                                </div>
                                <div className="d-block d-sm-inline-block">
                                    <p className="mb-0">
                                        <span className="ti-headphone-alt mr-2" />
                                        <a href="tel:09180892611">918-089-2611</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="my-5 text-center">
                    <p className="mb-2">
                        <small> ۱۳۹۷ - ۱۳۹۴© کلیه حقوق مطالب، تصاویر و طرح قالب برای سایت crm-support محفوظ است. </small>
                    </p>
                    <small>
                        <a href="#" className="m-2">PRESS</a>
                        <a href="#" className="m-2">TERMS</a>
                        <a href="#" className="m-2">PRIVACY</a>
                    </small>
                </footer>
            </div>
        );
    }
}
