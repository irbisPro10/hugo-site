$(document).ready(
	function()
	{
		$('#blog-categories li').click(
			function()
			{	var temp =[];
				var tmp = $(this).html();
				$('.post-item').css('display','block');
				$('.post-item input[type=hidden]').each(
					function()
					{	

						if(tmp!=$(this).val())
						{
							$(this).closest('.post-item').css('display','none');
						}
					});
				
			}
			);

	}
	);