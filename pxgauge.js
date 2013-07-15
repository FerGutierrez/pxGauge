  var over = null;
  function deltaX(){ 
    var ray1 =  $(document).find(".pixel-gauge-hor") ,
      ray2 = ray1.next(),
		distance = Math.abs(ray2.offset().left - ray1.offset().left) - 1 ;
    if ( distance != -1 ) return distance + 'px' ;
	else return 'overlap' ;
  }
  function deltaY(){ 
    var ray1 =  $(document).find(".pixel-gauge-ver") ,
	    ray2 = ray1.next(),
		distance = Math.abs(ray2.offset().top - ray1.offset().top) - 1 ;
    if ( distance != -1 ) return distance + 'px' ;
	else return 'overlap' ;
  }  
  $(document).ready(function() {	

  	$('<!-- pixel gauge --><!-- 06 : horizontal measurment ; rays as divs, not img; improved jquery --><!--[if IE 7]>  <div class="pixel-gauge-display pgd-ie7"> <![endif]--><!--[if IE 8]>  <div class="pixel-gauge-display pgd-ie8"> <![endif]--><!--[if gt IE 8]><!--><div class="pixel-gauge-display"> <!--<![endif]--><p>&#916x : <span class="pixel-gauge-X">--px</span></p><p>&#916y : <span class="pixel-gauge-Y">--px</span></p><div class="pgd-controls"><a href="https://github.com/FerGutierrez/Pixel-Gauge/">git</a><button class="pgd-select-green selected"></button><button class="pgd-select-yellow"></button><button class="pgd-select-blue"></button><button class="pgd-select-red"></button></div></div><div class="pixel-gauge-ray pixel-gauge-hor" style="left:10px;"><div></div></div><div class="pixel-gauge-ray pixel-gauge-hor" style="left:21px;"><div></div></div><div class="pixel-gauge-ray pixel-gauge-ver" style="top:10px;"><div></div></div><div class="pixel-gauge-ray pixel-gauge-ver" style="top:21px;"><div></div></div>').appendTo('body');	
	
	$(".pixel-gauge-X").html(deltaX());
	$(".pixel-gauge-Y").html(deltaY());
	var rayColor = $(".pixel-gauge-display .selected").css("background-color");
	$(".pixel-gauge-ray div").css("background",rayColor);
		
    $(".pixel-gauge-display").draggable();
	$(".pixel-gauge-hor").draggable({
		axis: "x" ,
        drag: function() { 
			$(".pixel-gauge-X").html(deltaX());
		}
    });
	$(".pixel-gauge-ver").draggable({
		axis: "y" ,
        drag: function() { 
			$(".pixel-gauge-Y").html(deltaY());
		}
    });
	
	$(".pixel-gauge-hor").mouseover(function(){
	    over = $(this);
	});
	$(".pixel-gauge-ver").mouseover(function(){
	    over = $(this);
	});

	$(document).keyup(function(event) {
		switch (event.which) {
		case 37:
			var ray = over.filter(".pixel-gauge-hor");
			var left = ray.offset().left;
			if ( left + Math.floor(ray.outerWidth()/2) > 0 ){
				ray.offset({ top: 0, left: left - 1 });
				$(".pixel-gauge-X").html(deltaX());
			}
			else alert("Document limits");
			break;
		case 38:
			var ray = over.filter(".pixel-gauge-ver");
			var top = ray.offset().top;
			if ( top + Math.floor(ray.outerHeight()/2) > 0 ){
				ray.offset({ top: top -1, left: 0 });
				$(".pixel-gauge-Y").html(deltaY());
			}
			else alert("Document limits");
			break;
		case 39:
			var ray = over.filter(".pixel-gauge-hor");
			var left = ray.offset().left;
			if ( left + Math.ceil(ray.outerWidth()/2) < $(document).width() ){
				ray.offset({ top: 0, left: left + 1 });
				$(".pixel-gauge-X").html(deltaX());
			}
			else alert("Document limits");
			break;
		case 40:
			var ray = over.filter(".pixel-gauge-ver");
			var top = ray.offset().top;
			if ( top + Math.ceil(ray.outerHeight()/2) < $(document).height() ){
				ray.offset({ top: top + 1, left: 0 });
				$(".pixel-gauge-Y").html(deltaY());
			}
			else alert("Document limits");
			break;
		}
	});	

	
	
	$(".pixel-gauge-display button").click( function(){
		$(this).parent().find(".selected").removeClass("selected");
		$(this).addClass("selected");
		var rayColor = $(".pixel-gauge-display .selected").css("background-color");
		$(".pixel-gauge-ray div").css("background",rayColor);
	});

	 

  });

