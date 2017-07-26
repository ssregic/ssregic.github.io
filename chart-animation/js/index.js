var col = $('.graph-col');
var colLen = col.length;
var dot = $('<div class="dot"></div>');
var graph = $('.graph');
var stuff = $('.graph-stuff');
var loader = $('.loader');
var i;

// hide everything until all the dots are in the dom
$('.wrapper').css('opacity', '0');

// append a ton of dots to the graph
for (i = 0; i < colLen; i++ ) {
	var c = dot.clone();
	col.eq(i).append(c);
	
	// not exactly sure how this loop works but it works...
	for (j = 0; j < i; j++) {
		j+=0.9;
		var d = c.clone();
		col.eq(i).append(d);
	}
}

// show everything
if ($('.dot').length === 97) {
	$('.wrapper').css('opacity', '1');
}

// after 'angularJS' has been typed, show the css loader, then animate in the dots.
$('.typedjs').typed({
	strings: ['AngularJS ^500'],
	typeSpeed: 20,
	onStringTyped: function() {
		loader.addClass('active');
		$('.typed-cursor').css('display', 'none');
		setTimeout(function() {
			loader.removeClass('active');
			$('.dot').css('transform', 'scale(1)');
			stuff.addClass('active');
		}, 2000);
	}
});