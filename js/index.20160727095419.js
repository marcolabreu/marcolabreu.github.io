(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

function em1(){var c="nbsdpbouupoojpAhnbjm/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);location.href=addr;}

$(document).ready(function() {
if(! document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
$('.js-6').attr('src', 'images/flickr-white-logo-60.png');
$('.js-7').attr('src', 'images/linkedin-white-logo-60.png');
$('.js-8').attr('src', 'images/mail-white-logo-60.png');

}
var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-2')[0], "1.00s", "1.00s", 1, 100);
wl.addAnimation($('.js-3')[0], "1.00s", "2.00s", 1, 100);
wl.addAnimation($('.js-4')[0], "1.00s", "3.00s", 1, 100);
wl.addAnimation($('.js-5')[0], "1.00s", "5.00s", 1, 100);
wl.start();

});