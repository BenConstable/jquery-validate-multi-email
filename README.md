#Validate Multiple Email Addresses

A tiny extra method to validate multiple, comma separated, email addresses with jQuery Validate.

##Usage

Include this script however you like. It depends on jQuery and [jQuery Validate](http://bassistance.de/jquery-plugins/jquery-plugin-validation/).

It gives you access to a new `multiEmail` option. Valid input consists of any number of valid email addresses separated by commas. Leading and trailing whitespace around addresses is ignored, and a single trailing comma is allowed.

##Example

```html
<input type="text" class="required multiEmail">
```