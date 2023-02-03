jQuery(($) => {

    const $inputWrapper = $(".input-wrapper");
    const $input = $(".input-wrapper .input");

    $input.on("click", function() {
        $input.add($inputWrapper).removeClass("border-success");
        $(this).add($(this.dataset.target)).addClass("border-success");
    });

});



/*------------- #flatpickr code js --------------*/
$(".date-input").flatpickr({
    //enableTime: true,
    //mode: "range"
    dateFormat: "Y-m-d",
    static: true
});
$(".time-input").flatpickr({
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    static: true

});

/*------------- #intlTelInput code js  --------------*/
var phoneInput = document.querySelectorAll(".phone-input");
phoneInput.forEach(items =>{

    intlTelInput(items, {

        initialCountry: "auto",
        autoPlaceholder: "aggressive",
        placeholderNumberType: "MOBILE",
        separateDialCode: true,
        preferredCountries: ['eg', 'sa'],
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



/*------------- #select2 code js  --------------*/
$('select:not(.normal)').each(function () {
    let placeholder = $(this).attr("placeholder");
    console.log(placeholder);
    $(this).select2({
        dir: "rtl",
        dropdownAutoWidth: true,
        dropdownParent: $(this).parent(),
        placeholder:placeholder,
    });

});




/* *** qty *** */
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}

/* *** qty *** */
function increaseValue1() {
    var value = parseInt(document.getElementById('number1').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number1').value = value;
}

function decreaseValue1() {
    var value = parseInt(document.getElementById('number1').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number1').value = value;
}




$("#rowAdder").click(function () {
    newRowAdd =
       '<div class="input-group m-3 input-group-prepend">' +
        '                            <div class="input-wrapper">' +
        '                                <svg class="right-svg" xmlns="http://www.w3.org/2000/svg" width="29.984" height="9.185" viewBox="0 0 29.984 9.185">' +
        '                                    <g id="visa" transform="translate(0 0)">' +
        '                                        <path id="Path_19659" data-name="Path 19659" d="M124.247,158.049l1.516-8.9h2.425l-1.518,8.9Zm11.187-8.707a6.264,6.264,0,0,0-2.174-.374c-2.4,0-4.085,1.207-4.1,2.937-.014,1.279,1.205,1.992,2.125,2.418.944.436,1.262.714,1.257,1.1-.006.6-.754.869-1.451.869a5.087,5.087,0,0,1-2.283-.467l-.313-.141-.34,1.992a7.677,7.677,0,0,0,2.7.475c2.55,0,4.2-1.193,4.224-3.04.009-1.012-.637-1.783-2.036-2.418-.848-.412-1.367-.686-1.361-1.1,0-.37.439-.765,1.389-.765a4.475,4.475,0,0,1,1.815.341l.217.1Zm6.242-.192H139.8a1.207,1.207,0,0,0-1.27.738l-3.6,8.155h2.547s.416-1.1.511-1.337l3.106,0c.073.312.3,1.333.3,1.333h2.251l-1.963-8.893ZM138.7,154.9c.2-.513.966-2.488.966-2.488-.014.024.2-.515.322-.849l.164.767s.464,2.124.562,2.57H138.7Zm-16.514-5.746-2.375,6.068-.253-1.233a6.945,6.945,0,0,0-3.359-3.733l2.171,7.782,2.566,0,3.819-8.882h-2.569" transform="translate(-113.655 -148.968)" fill="#0e4595"/>' +
        '                                        <path id="Path_19660" data-name="Path 19660" d="M64.139,152.96H60.228l-.031.185a8.027,8.027,0,0,1,5.892,4.656l-.85-4.089a1.015,1.015,0,0,0-1.1-.751" transform="translate(-60.197 -152.779)" fill="#f2ae14"/>' +
        '                                    </g>' +
        '                                </svg>' +
        '' +
        '' +
        '                                <input type="text" class="form-control" placeholder="ادخل رقم بطاقتك" value="**** **** **** 3461" />' +
        '                                <svg class="left-svg d-none" xmlns="http://www.w3.org/2000/svg" width="20.478" height="20.478" viewBox="0 0 20.478 20.478">' +
        '                                    <path id="check" d="M10.238,20.478A10.239,10.239,0,0,1,3,3,10.238,10.238,0,1,1,17.478,17.478,10.172,10.172,0,0,1,10.238,20.478ZM6.372,9.814a.251.251,0,0,0-.191.107l-.029.03c-.035.035-.469.492-.818.858l-.293.308a.5.5,0,0,1-.05.055.239.239,0,0,0,0,.293l.068.068c.035.034,3.548,3.411,3.607,3.469l.007.007a.322.322,0,0,0,.226.125c.084,0,.154-.075.205-.13l.028-.029,6.358-8.159a.242.242,0,0,0,.045-.151.261.261,0,0,0-.059-.16l-1.4-1.1a.252.252,0,0,0-.16-.06.262.262,0,0,0-.16.065L8.671,11.944l-.839-.806C7.276,10.6,6.644,9.995,6.614,9.964l-.023-.024A.317.317,0,0,0,6.372,9.814Z" fill="#007bff"/>' +
        '                                </svg>' +
        '' +
        '                            </div>' +
        '                        </div>';

    $('#newinput').append(newRowAdd);
});
function showOffCanvas() {
document.getElementById("cart-details-container").style.display="flex";
}






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
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
