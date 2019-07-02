$('#i1').click(function(){
	$('.big-image').fadeIn();
	$('.img-big img').attr("src","img/galeri/6.jpg");
	flag = 1;
});
$('#i2').click(function(){
	$('.big-image').fadeIn();
	$('.img-big img').attr("src","img/galeri/2.jpg");
	flag = 2;
});
$('#i3').click(function(){
	$('.big-image').fadeIn();
	$('.img-big img').attr("src","img/galeri/3.jpg");
	flag = 3;
});
$('#i4').click(function(){
	$('.big-image').fadeIn();
	$('.img-big img').attr("src","img/galeri/4.jpg");
	flag = 4;
});


$(".next").click(function(){
	if (flag==1) {
		$('.img-big img').attr("src","img/galeri/2.jpg");
		flag = 2;
	}
	else if (flag==2) {
		$('.img-big img').attr("src","img/galeri/3.jpg");
		flag = 3;
	}
	else if (flag==3) {
		$('.img-big img').attr("src","img/galeri/4.jpg");
		flag = 4;
	}
	else if (flag==4) {
		$('.img-big img').attr("src","img/galeri/6.jpg");
		flag = 1;
	}
});

$(".prev").click(function(){
	if (flag==1) {
		$('.img-big img').attr("src","img/galeri/4.jpg");
		flag = 4;
	}
	else if (flag==2) {
		$('.img-big img').attr("src","img/galeri/6.jpg");
		flag = 1;
	}
	else if (flag==3) {
		$('.img-big img').attr("src","img/galeri/2.jpg");
		flag = 2;
	}
	else if (flag==4) {
		$('.img-big img').attr("src","img/galeri/3.jpg");
		flag = 3;
	}
});

$('.close').click(function(){
	$('.big-image').fadeOut();
});