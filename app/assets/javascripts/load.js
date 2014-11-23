$(document).ready(function(){
	$("#menu li a").click(function(){
		var mb=$(this).attr("data-wz")	
		var mbtop=$("#"+mb).position().top
		$("html,body").animate({scrollTop:mbtop},1000);
		return false;
		
	})
	demopage_switchslider()  
})


$(window).scroll(function(e){h();})
$(window).resize(function(){h();})

function h(){
	var scrolltop=$(document).scrollTop();	
	var docwidth=parseInt($(document).width())
	var winwidth=parseInt($(window).width())
	var mbleft
	if (docwidth>=winwidth)
	{
		mbleft=(parseInt(winwidth)-1007)/2
		
	}
	
	var mbtop2=$("#menu").position().top;
	if (scrolltop>579)
	{
		if (winwidth<=800)
		{$("#menu").css({"position":"fixed","top":"0px","left":"0px"})}
		else
		{$("#menu").css({"position":"fixed","top":"0px","left":mbleft+"px"})}
		
		
	}
	else
	{
		$("#menu").css({"position":"relative","top":"0","left":"0","margin-top":"0"})
		
	}
}


function demopage_switchslider(){  
    var a=window.location.href.substring(window.location.href.indexOf('#')+1);  
    if(a!==undefined&&a!==''&&window.location.href.indexOf('#')>0){  
	var top=$("."+a).position().top;
         $("html,body").animate({scrollTop:top-100},1000);
    }  
}