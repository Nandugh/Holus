$(document).ready(function() {
	$(".informacoes").hide();
	$(".btn-itens").click(function() {
		$(this).toggleClass("active").next().slideToggle("fast");
		return false;
	});
    $('#menu ol li a').on('click', function(e) {
        e.preventDefault();
        console.log('sou o menu')
        var scrollAnchorMenu = $(this).attr('data-scroll'),
        scrollPointMenu = $('body >[data-anchor="' + scrollAnchorMenu + '"]').offset().top - 100;
        $('body,html').animate({
            scrollTop: scrollPointMenu
        }, 500);
        return false;
     });
});