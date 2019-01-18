import React, { Component } from 'react';
import { ScrollToTop } from './ScrollToTop';

export class DidarCrm extends Component
{
    displayName = DidarCrm.name

    render()
    {
        return (
            <div>
                <ScrollToTop />
                <header className="bg-gradient" />
                <div className="section light-bg">
                    <div className="container">
                        <div className="section-title">
                            <h3>سیستم مدیریت ارتباط با مشتری دیدار</h3>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-4 mb-4">
                                <div className="card features text-right">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="media-body">
                                                <h4 className="card-title">پیــام گســــتر</h4>
                                                <p className="card-text">
                                                    با ارائه راهکارهای یکپارچه مدیریت ارتباط با مشتری، به سازمان شما در افزایش فروش، حفظ مشتریان، افزایش وفاداری مشتری، جذب مشتری جدید و ارائه خدمات پس از فروش ، کمک می کند.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 mb-4">
                                <div className="card features text-right">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="media-body">
                                                <h4 className="card-title">داینامیک سی آر ام</h4>
                                                <p className="card-text">
                                                    سی آر ام صرفا مجموعه‌ای از فرمها و گزارشات نیست، بلکه بایستی در طراحی آن بینش و نگرش مدیریت ارتباط با مشتری لحاظ شده باشد و این نرم افزار بسیار زیبا و عمیق طراحی شده است.
                                    </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 mb-4">
                                <div className="card features text-right">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="media-body">
                                                <h4 className="card-title">سرونو</h4>
                                                <p className="card-text">
                                                    به گونه‌ای که با تکیه بر امکانات متعدد خود، زمینه بهبود عملکرد واحد فروش و دستیابی به اهداف اصلی این واحد از جمله نفوذ به بازارهای جدید و کسب درآمد و سود بیشتر را فراهم می‌آورد.
                                    </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
