/*
 * Validate multiple, comma separated emails with jQuery Validate.
 *
 * Usage:
 *
 * Include this script on your page after jQuery and jQuery Validate.
 *
 * Example:
 *
 * <input type="text" class="required multiEmail">
 *
 */

// JSLint Options:
/*global jQuery*/

(function ($) {


// Multiple, comma separated email validation 
$.validator.addMethod('multiEmail', function(value, element) {
    if (this.optional(element)) {
        return true;
    } else {
        var valid = true;

        $.each($.trim(value).replace(/,$/, '').split(','), $.proxy(function (index, email) {
            if (!$.validator.methods.email.call(this, $.trim(email), element)) {
                valid = false;
            }
        }, this));

        return valid; 
    }
}, 'One or more email addresses are invalid');


}(jQuery));