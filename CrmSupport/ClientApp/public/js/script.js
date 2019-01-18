$(function ()
{
    "use strict";

    function menuscroll()
    {
        var $navmenu = $('.nav-menu');
        if ($(window).scrollTop() > 50)
        {
            $navmenu.addClass('is-scrolling');
        } else
        {
            $navmenu.removeClass("is-scrolling");
        }
    }

    menuscroll();

    $(window).on('scroll', function ()
    {
        menuscroll();
    });

    $('.navbar-nav > li:not(.dropdown) > a').on('click', function ()
    {
        $('.navbar-collapse').collapse('hide');
    });

    var siteNav = $('#navbar');
    siteNav.on('show.bs.collapse', function (e)
    {
        $(this).parents('.nav-menu').addClass('menu-is-open');
    });

    siteNav.on('hide.bs.collapse', function (e)
    {
        $(this).parents('.nav-menu').removeClass('menu-is-open');
    });

    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function (event)
    {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname)
        {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length)
            {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function ()
                    {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus"))
                        { // Checking if the target was focused
                            return false;
                        } else
                        {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
            }
        }
    });

    var $testimonialsDiv = $('.testimonials');
    if ($testimonialsDiv.length && $.fn.owlCarousel)
    {
        $testimonialsDiv.owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>']
        });
    }

    var $galleryDiv = $('.img-gallery');
    if ($galleryDiv.length && $.fn.owlCarousel)
    {
        $galleryDiv.owlCarousel({
            nav: false,
            center: true,
            loop: true,
            autoplay: true,
            dots: true,
            navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>']
        });
    }

    $(".go-up").click(function () { $("html,body").animate({ scrollTop: 0 }, 700) });

    $("[can-submit-form]").click(function ()
    {
        if (this.attr("can-submit-form") != "true")
            return;
        else
        {
            var email = $("[name='email']").val();
            var message = $("[name='message']").val();
            var name = $("[name='name']").val();
            $.get("http://omidnasri-001-site4.gtempurl.com/RegisterRequest/CrmSupport?companyName={0}&content={1}&email={2}".f(name, message, email));
            this.innerText = "درخواست شخصی سازی با موفقیت ارسال شد.";
            this.attributes["can-save"] = false;
            $("[name='email']").val('');
            $("[name='message']").val('');
            $("[name='name']").val('');
        }
    });

    String.prototype.format = function ()
    {
        var s = this,
            i = arguments.length;

        while (i--)
        {
            s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
        }
        return s;
    };
});