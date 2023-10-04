function changeCSS() {
    $(".error-text").css("display", "block");
    $(".email").css("border", "1px solid hsl(354, 100%, 66%)");
}

$(".subscribe-form").validate({
    invalidHandler: function () {
        changeCSS();
    },
    onfocusout: function () {
        changeCSS();
    }
});

jQuery.extend(jQuery.validator.messages, {
    required: "",
    email: "",
});