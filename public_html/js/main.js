$(document).ready(function(){
    //ANIMATION
    function animation() {
        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }


    $(window).scroll(function () {
        animation();
    });
    animation();
    
    //validate form

    if ($('.contact-form-group').length > 0) {
        $('.contact-form-group').validate({
            highlight: function (element) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhighlight: function (element) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            },
            onfocusout: function (element) {
            this.element(element);
        },
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: 'The Name* field is required',
            minlength: 'Your name must be at least 3 characters'
                },
                email: {
                    required: 'The Email* field is required',
                    email: 'Please provide a valid email address'
                },
                subject: {
                    required: 'The Subject* field is required'
                },
                message: {
                    required: 'The Message* field is required',
                    minlength: 'Your message must be at least 10 characters'
                }
            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo(element.closest(".form-group").find(".error-msg")).html(error);
            }
        });
    }
    
    
});

