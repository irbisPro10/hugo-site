$(document).ready(
function()
{
	var a;
	$(window).scroll(function()
	{	a=$(window).scrollTop();

		if(a>=50) 
			{
				$('.contacts').css("display", "none");
				$('.header').css("height", "50px");	
				$('nav').css("top", "25px");		
				$('#up').css("display", "block");
			}	
			else
			{
				$('.contacts').css("display", "block");	
				$('.header').css("height", "100px");
				$('nav').css("top", "50px");
				$('#up').css("display", "none");
			}
	});

	$('#up').click(
		function()
			{
				$(window).scrollTop(0);
			}
		);
		


	
	
});