window.onload = function(){
	$( '.column-image-wrap' ).on({
		'mouseenter': function(){
			$( this ).find( '.gallary-overlay' ).css( "display", "flex" );
			$( this ).find( 'img' ).css( "transform", "scale(1.1)" );
		},
		'mouseleave': function(){
			$(this).find( '.gallary-overlay' ).css( "display", "none" );
			$(this).find( 'img' ).css( "transform", "scale(1)" );
		}
	});
	const image_box = document.getElementsByClassName( 'column-image-wrap' );
	for ( var i = 0; i < image_box.length; i++ ){
		if ( isInsideViewportOnload( image_box[i] ) ){image_box[i].classList.add( "image-show" );}
	}
	//popup box
	$( '.column-image-wrap' ).on('click', function(){
		$( '#popup-box' ).css("display", "flex");
		const pop_img = $( this ).find( 'img' )[0].src ;
		$( '#popup-box' ).find( 'img' )[0].src = pop_img;
	});
	//close popup box
	$( '#popup-box' ).on( 'click', function(){
		$( this ).css( "display", "none" );
	});

	//show boxes when it's inside the viewport
	function isInsideViewport( el ){
		const rect = el.getBoundingClientRect();
		return ( rect.top - window.innerHeight + 100 < 0 );
	}
	function isInsideViewportOnload( el ){
		const rect = el.getBoundingClientRect();
		return ( rect.top - window.innerHeight < 0 );
	}
	const image_box_top = document.getElementsByClassName( 'column-image-wrap' );
	const info_box = document.getElementById( 'info-wrap' );
	const left_box = document.querySelector( '.info-left' );
	const right_box = document.querySelector( '.info-right' );
	const footer_logo = document.querySelector( '.footer-logo' );
	console.log(image_box);
	document.addEventListener( 'scroll', function(){
		//check if the image is inside the viewport
		for ( var j = 0; j < image_box.length; j++ ){
			if ( isInsideViewport( image_box[j] ) ){image_box[j].classList.add( "image-show" );}
		}
		//check if info box is insite the viewport and show info box
		if ( isInsideViewport( info_box ) ){
			left_box.classList.add( "left-show" );
			right_box.classList.add( "right-show" );
		}
		//check if the footer title is inside the viewport
		if ( isInsideViewport( footer_logo ) ){footer_logo.classList.add( "text-show" );}
	});

	//set image for each box
	const img_array = [
		"images/pexels-helena-lopes-1862000.jpg",
		"images/pexels-kevin-villaruz-1660603.jpg",
		"images/pexels-aleksandar-pasaric-3372408.jpg",
		"images/pexels-umar-mukhtar-1538177.jpg",
		"images/pexels-aleksandar-pasaric-3372408.jpg",
		"images/pexels-helena-lopes-1862000.jpg",
		"images/pexels-helena-lopes-1862000.jpg",
		"images/pexels-umar-mukhtar-1538177.jpg",
		"images/pexels-umar-mukhtar-1538177.jpg",
		"images/pexels-aleksandar-pasaric-3372408.jpg",
		"images/pexels-umar-mukhtar-1538177.jpg",
		"images/pexels-aleksandar-pasaric-3372408.jpg"
	];
	//set images for three columns
	const c1 = document.getElementById( 'gallary-column-1' );
	const c2 = document.getElementById( 'gallary-column-2' );
	const c3 = document.getElementById( 'gallary-column-3' );
	for (var i = 0; i < img_array.length/3; i++){
		c1.getElementsByTagName( 'img' )[i].src = img_array[i*3]
	}
	for (var i = 0; i < img_array.length/3; i++){
		c2.getElementsByTagName( 'img' )[i].src = img_array[i*3+1]
	}
	for (var i = 0; i < img_array.length/3; i++){
		c3.getElementsByTagName( 'img' )[i].src = img_array[i*3+2]
	}
	//change layout when the screen size changes
	window.onresize = function(){
		const screen_width = screen.width;
		if (screen_width < 768 ){
			c3.style.display = "none"
		} else {
			c3.style.display = "block"
		}
	}
}





