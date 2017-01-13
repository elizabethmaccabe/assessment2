//Hamburger Menu
$(function()
{
    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function()
    {
        $( ".menu" ).slideToggle( "slow", function()
        {
            $( ".hamburger" ).hide();
            $( ".cross" ).show();
        });
    });

    $( ".cross" ).click(function()
    {
        $( ".menu" ).slideToggle( "slow", function()
        {
            $( ".cross" ).hide();
        $( ".hamburger" ).show();
        });
    });
});

//
jQuery(document).ready(function ($)
{
	var slideCount = $('.slider ul li').length;
	var slideWidth = $('.slider ul li').width();
	var slideHeight = $('.slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('.slider').css({ width: slideWidth, height: slideHeight });
	
	$('.slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('.slider ul li:last-child').prependTo('.slider ul');

    function moveLeft() {
        $('.slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('.slider ul li:last-child').prependTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('.slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('.slider ul li:first-child').appendTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    };

    $('.prev').click(function () {
        moveLeft();
    });

    $('.next').click(function () {
        moveRight();
    });

});

function validate()
{
    var form = document.querySelector('.contact');
    form.addEventListener("submit", contactValidate);
}

function contactValidate()
{
    var myForm = document.querySelector('.contact');
    
    if (myForm.name.value == "")
        {
            formValid = false;
            
            document.querySelector('.errName').style.border = "solid 1px red";
            event.preventDefault();
        }
    else
        {
            document.querySelector('.errName').style.border = "none";
        }
    
    if (myForm.email.value == "")
        {
            formValid = false;
            
            document.querySelector('.errEmail').style.border = "solid 1px red";
            event.preventDefault();
        }
    else
        {
            document.querySelector('.errEmail').style.border = "none";
        }
    
    if (myForm.message.value == "")
        {
            formValid = false;
            
            document.querySelector('.errMessage').style.border = "solid 1px red";
            event.preventDefault();
        }
    else
        {
            document.querySelector('.errMessage').style.border = "none";
        }
}