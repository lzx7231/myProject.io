$('.province').click(function(e){
	$('.hiden').show()
	$('.province').css({'background':'#fff', 'border-color':'#ccc #ccc transparent #ccc', 'border':'1px solid #ccc'})
	e.stopPropagation();  //指定点击的对象为当前对象，非document
})

$('.hiden').click(function(e){
	e.stopPropagation();  //指定点击的对象为当前对象，非document
})

$('.hiden li').click(function(){
	$(this).addClass('chosen').siblings().removeClass('chosen')
})

$('#close_this').click(function(){
	$(this).parent().parent().hide();
	$('.province').removeAttr('style')
})

$(document).click(function(){
	$('.hiden').hide()
	$('.province').css({'border':'none', 'background':'transparent'})
})

$('.top li').hover(
	function(){
		$(this).children('span').show(200)
	},function(){
		$(this).children('span').hide(200)
	}
)

$('#returnTop').click(function(){
	$('html,body').animate({scrollTop: 0}, 500)
})

$('.type_change ol li').click(function(){
	var $index = $(this).index();
	$(this).addClass('active').siblings().removeClass('active')
	$('.type_container ul').stop().animate({'margin-top': -($index*305)+'px'},300)
})
