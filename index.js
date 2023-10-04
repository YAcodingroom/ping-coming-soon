function changeCSS() {
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
    required: "Whoops! It looks like you forgot to add your email",
    email: "Please provide a valid email address",
});
