"use strict";$(document).ready(function(){$(".slider").slick({arrows:!1,dots:!0,infinite:!0,speed:500});var i=$("<div class='main-nav'><div class='row'><div class='col-12'></div></div>"),d=$("<div class='main-logo'><div class='row'><div class='col-md-6'></div><div class='col-md-6'></div></div></div>"),n=$("<div class='row'><div class='col-md-6'></div><div class='col-md-6'></div></div>");$(".main-menu__btn").click(function(){$(".main-menu__nav").slideToggle("fast")}),screen.width>=768&&($(".top-bar").after(i,d),$(".main-menu").prepend(n),$(".main-menu__btn").remove(),$(".top-links").appendTo($(".main-menu .row .col-md-6:nth-child(1)")),$(".social").appendTo($(".main-menu .row .col-md-6:nth-child(2)")).addClass("float-md-right"),$(".logo").appendTo(".main-logo .row .col-md-6:nth-child(1)"),$(".search-form").appendTo(".main-logo .row .col-md-6:nth-child(2)"),$(".main-links").appendTo(".main-nav .row .col-12"),$(".main-links li").click(function(){$(".main-links li ").removeClass("is-active"),$(this).addClass("is-active")}))});