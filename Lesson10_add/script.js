window.addEventListener("DOMContentLoaded", function() {
    'use strict';
    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select()
        }
    }

    function mask(event) {
        let matrix = "+7 (___) ___ __ __", // Our phone input mask
            i = 0,
            def = matrix.replace(/\D/g, ""), // Replace all non-digit symbols with nothing
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        }); // Returns matrix with
        if (event.type == "blur") { // If focus moves away from the input
            if (this.value.length == 2) this.value = "" // Delete all content from the field if there are no more than 2 symbols
        } else setCursorPosition(this.value.length, this) // Else preserve all symbols
    };

    let input = document.querySelector("#phone");
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);

    let colors = ['blue', 'red'],
        i = 0;

    function psychodelic() {
        document.getElementById('colorChange').style.color = colors[i++];
        if (i > colors.length) {
            i = 0;
        }
        setTimeout(psychodelic, 200);
    }

    psychodelic();
});
    