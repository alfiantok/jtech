$('#i1').click(function(){
	$('.big-image').fadeIn();
	$('.img-big img').attr("src","img/galeri/1.jpg");
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
$('#i5').click(function(){
	$('.big-image').fadeIn();
	$('.img-big img').attr("src","img/galeri/5.jpg");
	flag = 5;
});
$('#i6').click(function(){
	$('.big-image').fadeIn();
	$('.img-big img').attr("src","img/galeri/6.jpg");
	flag = 6;
});
$('#i7').click(function(){
	$('.big-image').fadeIn();
	$('.img-big img').attr("src","img/galeri/7.jpg");
	flag = 7;
});
$('#i8').click(function(){
	$('.big-image').fadeIn();
	$('.img-big img').attr("src","img/galeri/8.jpg");
	flag = 8;
});
$('#i9').click(function(){
	$('.big-image').fadeIn();
	$('.img-big img').attr("src","img/galeri/9.jpg");
	flag = 9;
});
$('#i10').click(function(){
	$('.big-image').fadeIn();
	$('.img-big img').attr("src","img/galeri/10.jpg");
	flag = 10;
});
$('#i11').click(function(){
	$('.big-image').fadeIn();
	$('.img-big img').attr("src","img/galeri/11.jpg");
	flag = 11;
});
$('#i12').click(function(){
	$('.big-image').fadeIn();
	$('.img-big img').attr("src","img/galeri/12.jpg");
	flag = 12;
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
		$('.img-big img').attr("src","img/galeri/5.jpg");
		flag = 5;
	}
	else if (flag==5) {
		$('.img-big img').attr("src","img/galeri/6.jpg");
		flag = 6;
	}
	else if (flag==6) {
		$('.img-big img').attr("src","img/galeri/7.jpg");
		flag = 7;
	}
	else if (flag==7) {
		$('.img-big img').attr("src","img/galeri/8.jpg");
		flag = 8;
	}
	else if (flag==8) {
		$('.img-big img').attr("src","img/galeri/9.jpg");
		flag = 9;
	}
	else if (flag==9) {
		$('.img-big img').attr("src","img/galeri/10.jpg");
		flag = 10;
	}
	else if (flag==10) {
		$('.img-big img').attr("src","img/galeri/11.jpg");
		flag = 11;
	}
	else if (flag==11) {
		$('.img-big img').attr("src","img/galeri/12.jpg");
		flag = 12;
	}
	else if (flag==12) {
		$('.img-big img').attr("src","img/galeri/1.jpg");
		flag = 1;
	}
});

$(".prev").click(function(){
	if (flag==1) {
		$('.img-big img').attr("src","img/galeri/12.jpg");
		flag = 12;
	}
	else if (flag==2) {
		$('.img-big img').attr("src","img/galeri/1.jpg");
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
	else if (flag==5) {
		$('.img-big img').attr("src","img/galeri/4.jpg");
		flag = 4;
	}
	else if (flag==6) {
		$('.img-big img').attr("src","img/galeri/5.jpg");
		flag = 5;
	}
	else if (flag==7) {
		$('.img-big img').attr("src","img/galeri/6.jpg");
		flag = 6;
	}
	else if (flag==8) {
		$('.img-big img').attr("src","img/galeri/7.jpg");
		flag = 7;
	}
	else if (flag==9) {
		$('.img-big img').attr("src","img/galeri/8.jpg");
		flag = 8;
	}
	else if (flag==10) {
		$('.img-big img').attr("src","img/galeri/9.jpg");
		flag = 9;
	}
	else if (flag==11) {
		$('.img-big img').attr("src","img/galeri/10.jpg");
		flag = 10;
	}
	else if (flag==12) {
		$('.img-big img').attr("src","img/galeri/11.jpg");
		flag = 11;
	}
});

$('.close').click(function(){
	$('.big-image').fadeOut();
});