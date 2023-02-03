
/*------------- #flatpickr code js --------------*/
$(".date-input").flatpickr({
    //enableTime: true,
    //mode: "range"
    dateFormat: "Y-m-d",

});


/*------------- #intlTelInput code js  --------------*/
var phoneInput = document.querySelectorAll(".phone-input");
phoneInput.forEach(items =>{

    intlTelInput(items, {

        initialCountry: "bg",
        autoPlaceholder: "aggressive",
        placeholderNumberType: "MOBILE",
        separateDialCode: true,
        preferredCountries: ['cl', 'sa'],
        excludeCountries: ["il"],
        geoIpLookup: function(callback) {
            $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
                var countryCode = (resp && resp.country) ? resp.country : "us";
                callback(countryCode);
            });
        },
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js",
    });

});





jQuery(function ($) {

    'use strict';
    var position = $(window).scrollTop();
    var navbar   = $('#header');
    var toTop    = $('#scroll-to-top');

    $(document).ready(function() {
        if (position > 0) {
            navbar.addClass('navbar-sticky');
        }
        toTop.hide();
    })

})
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// $(document).ready(function () {
//     $("#show_hide_password a").on("click", function (event) {
//         event.preventDefault();
//         if ($("#show_hide_password input").attr("type") == "text") {
//             $("#show_hide_password input").attr("type", "password");
//             $("#show_hide_password i").addClass("fa-eye-slash");
//             $("#show_hide_password i").removeClass("fa-eye");
//         } else if ($("#show_hide_password input").attr("type") == "password") {
//             $("#show_hide_password input").attr("type", "text");
//             $("#show_hide_password i").removeClass("fa-eye-slash");
//             $("#show_hide_password i").addClass("fa-eye");
//         }
//     });
// });
