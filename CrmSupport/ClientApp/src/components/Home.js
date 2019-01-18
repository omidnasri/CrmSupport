import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ScrollToTop } from './ScrollToTop';

export class Home extends Component
{
    displayName = Home.name

    render()
    {
        return (
            <div>
                <ScrollToTop />
                <header className="bg-gradient" id="home">
                    <div className="container mt-5">
                        <h1>پشتیبان نرم‌افزارهای مدیریت ارتباط با مشتری</h1>
                        <p className="tagline">
                            مدیریت ارتباط با مشتری، رویکردی فراگیر برای ایجاد، حفظ و توسعه روابط با مشتریان است.
                        </p>
                    </div>
                    <div className="img-holder mt-3">
                        <img src="images/iphonex.png" alt="phone" className="img-fluid" />
                    </div>
                </header>
                <div className="section light-bg" id="features">
                    <div className="container">
                        <div className="section-title">
                            <h3>سیستم‌های مدیریت ارتباط با مشتری</h3>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-4 mb-4">
                                <div className="card features text-right">
                                    <div className="card-body">
                                        <a href="https://www.payamgostar.com/" target="_blank" title="پیام گستر سی‌آرام">
                                            <div className="media">
                                                <div className="media-body">
                                                    <h4 className="card-title">پیــام گســــتر</h4>
                                                    <p className="card-text">
                                                        با ارائه راهکارهای یکپارچه مدیریت ارتباط با مشتری، به سازمان شما در افزایش فروش، حفظ مشتریان، افزایش وفاداری مشتری، جذب مشتری جدید و ارائه خدمات پس از فروش ، کمک می کند.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 mb-4">
                                <div className="card features text-right">
                                    <div className="card-body">
                                        <a href="http://www.crmfa.com/" target="_blank" title="داینامیک سی‌آرام">
                                            <div className="media">
                                                <div className="media-body">
                                                    <h4 className="card-title">داینامیک سی‌آرام</h4>
                                                    <p className="card-text">
                                                        سی آر ام صرفا مجموعه‌ای از فرمها و گزارشات نیست، بلکه بایستی در طراحی آن بینش و نگرش مدیریت ارتباط با مشتری لحاظ شده باشد و این نرم افزار بسیار زیبا و عمیق طراحی شده است.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 mb-4">
                                <div className="card features text-right">
                                    <div className="card-body">
                                        <a href="https://www.sarvcrm.com/" target="_blank" title="سرونو سی‌آرام">
                                            <div className="media">
                                                <div className="media-body">
                                                    <h4 className="card-title">سرونو</h4>
                                                    <p className="card-text">
                                                        به گونه‌ای که با تکیه بر امکانات متعدد خود، زمینه بهبود عملکرد واحد فروش و دستیابی به اهداف اصلی این واحد از جمله نفوذ به بازارهای جدید و کسب درآمد و سود بیشتر را فراهم می‌آورد.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 mb-4">
                                <div className="card features text-right">
                                    <div className="card-body">
                                        <a href="https://didarcrm.ir/" target="_blank" title="دیدار سی‌آرام">
                                            <div className="media">
                                                <div className="media-body">
                                                    <h4 className="card-title">دیـــــدار</h4>
                                                    <p className="card-text">
                                                        جدا از تمام مزیت‌های اساسی نرم‌افزار مثل: کاهش حجم کار، ادغام با نرم افزارهای دیگر، اختصاص فضای ابری، ایجاد پایگاه مرکزی داده ها و.... مزیت‌های ارزشمند دیگری وجود دارد که می‌تواند دلایل مهمی برای انتخاب باشد.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 mb-4">
                                <div className="card features text-right">
                                    <div className="card-body">
                                        <div className="media">
                                            <a href="https://shahrenovin.com/" target="_blank" title="هما سی‌آرام">
                                                <div className="media-body">
                                                    <h4 className="card-title">همــــــا</h4>
                                                    <p className="card-text">
                                                        یکپارچگی در سیستم نرم‌افزارهای هما، زمانی که یک کاربر جدید در قسمت پرسنل تعریف می‌شود، می‌تواند با توجه به دسترسی‌های خود از تمام قسمت‌ها استفاده کند و نیاز نیست که برای هر قسمت بار دیگر گردد.
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 mb-4">
                                <div className="card features text-right">
                                    <div className="card-body">
                                        <a href="https://www.ganjafzar.com/crm/" target="_blank" title="گنج‌افزار سی‌آرام">
                                            <div className="media">
                                                <div className="media-body">
                                                    <h4 className="card-title">گنج افزار</h4>
                                                    <p className="card-text">
                                                        سیستم مدیریت ارتباط با مشتری گنج افزار یعنی ایجاد جلب رضایت و حفظ ارتباط شخصی شده با مشتریان سود آور، سازمانی از طریق استفاده مناسب از فناوري هاي  اطلاعات و ارتباطات.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 mb-4">
                                <div className="card features text-right">
                                    <div className="card-body">
                                        <div className="media">
                                            <a href="http://pandacrm.ir/" target="_blank" title="پاندار سی‌آرام">
                                                <div className="media-body">
                                                    <h4 className="card-title">پاندا</h4>
                                                    <p className="card-text">
                                                        پاندا یک استراتژی است که با آموزش دادن و هدایت کردن کارمندان، به شما نحوه چگونگی درک و فهم نیاز‌های بیشتر مشتریان را آموزش داده تا روابط افراد یک سازمان و مشتریان آن را استحکام بیشتری ببخشد.
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 mb-4">
                                <div className="card features text-right">
                                    <div className="card-body">
                                        <a href="http://www.crm-ideal.com" target="_blank" title="سی‌آرام ایده‌ال">
                                            <div className="media">
                                                <div className="media-body">
                                                    <h4 className="card-title">سی‌آرام ایده‌ال</h4>
                                                    <p className="card-text">
                                                        بطور کلی به همه فرآیندها و فناوری‌هایی گفته می‌شود که در شرکت‌های بزرگ و کوچک برای شناسایی مشتری، گسترش دامنه مشتریان، شناخت بهتر بازار هدف مشتریان، حفظ مشتریان، مدیریت بازاریابی مشتریان ...
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 mb-4">
                                <div className="card features text-right">
                                    <div className="card-body">
                                        <a href="http://democrm.ir/" target="_blank" title="بهین تک گستر سی‌آرام">
                                            <div className="media">
                                                <div className="media-body">
                                                    <h4 className="card-title">بهین تک گستر</h4>
                                                    <p className="card-text">
                                                        قابلیت گزارش گیری، دریافت کامل گردش کار، فرصت‌های فروش، مدیریت و زمان بندی جلسات در هر یک از پلت فرم‌ها و فناوری جدیدی با امکان اتصال به کلیه افزونه‌ها و ماژول‌ها را در اختیار شما قرار می‌دهد.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section" id="tutorial">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-6 text-right">
                                <h2>مشاوره و آموزش رایــــــــــــگان</h2>
                                <p className="mb-4">
                                    تیم پشتیبان نرم‌افزارهای مدیریت ارتباط با مشتری، علاوه بر پشتیبانی نرم‌افزار به صورت رایگان در هر ساعت از شبانه روز پاسخگو شما خواهند بود.
                    </p>
                            </div>
                        </div>
                        <div className="perspective-phone">
                            <img src="images/perspective.png" alt="perspective phone" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="section light-bg">
                    <div className="container">
                        <div className="section-title">
                            <h3>ماژول‌های برتر ایجاد شده</h3>
                        </div>
                        <ul className="nav nav-tabs nav-justified" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#communication">ارسال سریع پیامک</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#schedule">جستجو پیشرفته</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#messages">صدور پیش‌فاکتور</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#livechat">سرویس پیش‌فاکتور</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade" id="communication">
                                <div className="d-flex flex-column flex-lg-row text-right">
                                    <img src="images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                                    <div>
                                        <h3>قابلیت ارسال پیامک خودکار</h3>
                                        <p>
                                            در فرآیند کارتابل‌ها ماژول دیگری که ما برای شما فراهم آورده‌ایم، قابلیت ارسال پیامک در صورت برقراری شرط‌ها چند کارتابلی است. بدین معنی شما بر روی چند کارتابل شرط بسته و در صورت برقراری شروط پیامک برای شخص مورد نظر ارسال خواهد شود.
                                                    </p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="schedule">
                                <div className="d-flex flex-column flex-lg-row text-right">
                                    <div>
                                        <h3>نسخه دوم فیلتر پیشرفته</h3>
                                        <p>
                                            در هر یک از سی آر ام‌ها، فیلتر پیشرفته تعبیه گردیده است اما این فیلتر گاهاً نیاز به فیلدهای دیگری هم دارد جهت فیلتر که از سمت مشتری درخواست داده می‌شود که شرکت‌های سازنده سی آر ام از آن سر باز می‌دارند. مفتخریم -فیلتر پیشرفته نسخه دوم را ما برای شما پیاده خواهیم کرد.
                            </p>
                                    </div>
                                    <img src="images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="messages">
                                <div className="d-flex flex-column flex-lg-row text-right">
                                    <img src="images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                                    <div>
                                        <h3>صدور پیش‌فاکتور از روی نوع فرم</h3>
                                        <p>
                                            یکی از این سرویس‌ها که در میان بیشتر شرکت‌ها درخواست داده شده است، قابلیت انتقال فیلدهای اضافه نوع فرم به پیش‌فاکتور است. با تایید نهایی فرم کلیه فیلدهای اضافه موجود به پیش‌فاکتور ارسال خواهند شد.
                            </p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade show active" id="livechat">
                                <div className="d-flex flex-column flex-lg-row text-right">
                                    <div>
                                        <h3>ذخیره پیش فاکتور بدون دسترسی به سامانه</h3>
                                        <p>
                                            سرویس پیش‌فاکتور یکی دیگر از ماژول‌های است که کاربران سامانه بدون نیاز به ورود به سی آر ام و با استفاده از موبایل خود قادر به ثبت پیش‌فاکتور خواهند بود. پیش نمایش، ثبت موقت از دیگر قابلیت‌های است که قادر به استفاده در این ماژول می‌باشید.
                            </p>
                                    </div>
                                    <img src="images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container ltr-direction">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="images/dualphone.png" alt="dual phone" className="img-fluid" />
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <div className="text-right">
                                    <h3>شروع مدیریت کسب و کار</h3>
                                    <p className="mb-4">
                                        ۳۰ درصد بیشتر بفروشید، ۶۰ درصد پشتیبانی بهتری بدهید و ۱۰۰ درصد روابط خود را با مشتریانتان مدیریت کنید.
                        </p>
                                    <a href="http://www.mycontrolpanel.ir/" className="btn btn-primary">ثبت درخواست</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section light-bg ltr-direction">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 d-flex align-items-center text-right">
                                <ul className="list-unstyled ui-steps">
                                    <li className="media">
                                        <div className="circle-icon mr-4">۱</div>
                                        <div className="media-body rtl-direction">
                                            <h5>ثبت درخواست شخصی سازی</h5>
                                            <p>
                                                برای ثبت یک شخصی سازی، درخواست شخصی سازی سی آر ام را از پنل ثبت درخواست شخصی سازی ثبت نماید. تیم پشتیبانی با شما تماس خواهند گرفت.
                                </p>
                                        </div>
                                    </li>
                                    <li className="media my-4">
                                        <div className="circle-icon mr-4">۲</div>
                                        <div className="media-body rtl-direction">
                                            <h5>پیگیری درخواست شخصی سازی</h5>
                                            <p>
                                                در این مرحله، درخواست شخصی سازی از طرف تیم پشتیبانی پیگیری و زمان و هزینه انجام درخواست برای شما ارسال خواهد شد که در صورت تایید، ماژول جدید ایجاد می‌گردد.
                                </p>
                                        </div>
                                    </li>
                                    <li className="media">
                                        <div className="circle-icon mr-4">۳</div>
                                        <div className="media-body rtl-direction">
                                            <h5>ارائه آپدیت جدید نرم افزار</h5>
                                            <p>
                                                در مرحله پایانی سیستم جامع مدیریت فروش، آپدیت می‌گردد. این  بسته به مدت 3 ماه رایگان پشتیبانی خواهد شد.
                                </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <img src="images/iphonex.png" alt="iphone" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section" id="commends">
                    <div className="container">
                        <div className="section-title">
                            <h3>نظرات برخی از مشتریان شرکت</h3>
                        </div>
                        <div className="testimonials owl-carousel">
                            <div className="owl-item active">
                                <div className="testimonials-single">
                                    <img src="images/هاشمی_پور.png" alt="client" className="client-img" />
                                    <blockquote className="blockquote">
                                        بعد از گذشت یک سال کار با سی‌آرام، نیازهای جدیدی احساس شد که در سی‌آرام موجود نبود، اکنون که با تیم پشتیبان فنی سی‌آرام آشنا شدیم هر گونه نیاز شد شخصی سازی انجام خواهیم داد.
                                    </blockquote>
                                    <h5 className="mt-4 mb-2">هاشمی‌پور</h5>
                                </div>
                            </div>
                            <div className="testimonials-single">
                                <img src="images/فضائلی.png" alt="client" className="client-img" />
                                <blockquote className="blockquote">
                                    نخستین درخواست شخصی سازی سی آر ام را با تیم پشتیبانی نرم‌افزارهای مدیریت ارتباط با مشتری انجام پذیرفت. این تازه شروع ماجراست.
                                </blockquote>
                                <h5 className="mt-4 mb-2">فضائلی</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section light-bg">
                    <div className="container">
                        <div className="section-title">
                            <h3>ممکن است این سوال را بپرسید؟</h3>
                        </div>
                        <div className="row pt-4 text-center">
                            <div className="col-md-6">
                                <h4 className="mb-3">چرا ما، با وجود شرکت توسعه‌دهنده؟</h4>
                                <p className="light-font">
                                    بدون شک زمان تحویل هر نرم‌افزاری از سمت تیم فروش، هر درخواست توسط مشتری بدون تردید توسط تیم توسعه‌دهنده نرم‌افزار انجام پذیر است. این یک رویه برای فروش است و هیچ گاه در صنعت محصول نرم‌افزاری انجام پذیر نخواهد بود.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <h4 className="mb-3">کار با ما چگونه شروع خواهد شد؟</h4>
                                <p className="light-font">
                                    تیم، نخست درخواست مشتریان را گوش داده، سپس شروع به کار خواهند کرد. ماژول درخواستی با توجه به گفته مشتری ایجاد شده به مدت یک هفته رایگان در اختیار مشتری قرار خواهد گرفت تا از صحت عملکرد ماژول اطمینان حاصل نماید.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section bg-gradient">
                    <div className="container">
                        <div className="call-to-action">
                            <div className="box-icon"><span className="ti-mobile gradient-fill ti-3x"></span></div>
                            <h2>دسترسی سریع و آسان</h2>
                            <p className="tagline">
                                ما نرم‌افزار سی آر ام که در اختیار دارید را به صورت یک App موبایل برای شما قابل دسترس خواهیم کرد که در هر مکان و موقعیتی، بدون اینترنت بتوانید به وظایف ارجاع شده رسیدگی کنید.
                            </p>
                            <div className="my-4">
                                <a href="javascript:;" className="btn btn-light"><img src="images/appleicon.png" alt="icon" /> App Store</a>
                                <a href="javascript:;" className="btn btn-light"><img src="images/playicon.png" alt="icon" /> Google play</a>
                            </div>
                            <p className="text-primary"><small><i>نرم‌افزار در گوگل پلی و اپ استور برای دانلود قابل دسترس خواهد بود.</i></small></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
