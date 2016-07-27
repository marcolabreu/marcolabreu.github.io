(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=768){cw++;}if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="nbsdpbouupoojpAhnbjm/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);location.href=addr;}

$(document).ready(function() {
if(! document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
$('.js-19').attr('src', 'images/linkedin-white-logo-60.png');
$('.js-20').attr('src', 'images/flickr-white-logo-60.png');
$('.js-21').attr('src', 'images/mail-white-logo-60.png');

}
if('ontouchstart' in window) { $("html").addClass("nofixed"); }var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "0.70s", "0.00s", 1, 100);
wl.addAnimation($('.js-2')[0], "0.70s", "1.00s", 1, 100);
wl.addAnimation($('.js-3')[0], "0.70s", "2.00s", 1, 100);
wl.addAnimation($('.js-4')[0], "0.70s", "3.00s", 1, 100);
wl.addAnimation($('.js-5')[0], "0.70s", "4.00s", 1, 100);
wl.addAnimation($('.js-6')[0], "3.00s", "6.00s", 1, 100);
wl.start();

});