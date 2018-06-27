imgLazy = function () {
	$j("img[data-src]").each(function () {
		var windowPosition = $j(window).scrollTop(),
			windowHeight = $j(window).height(),
			elementPosition = $j(this).offset().top;
		if( elementPosition < (windowHeight + windowPosition) ) {
			$j(this).attr("src", $j(this).attr("data-src"));
			$j(this).removeAttr("data-src");
		}
	});
};
/**

    $('img').load(function() {
        // image has successfully loaded
    });
    You can also determine if the image has failed to load:

    $('img').error(function() {
        // image has failed to load
    });
    Web API
    img.addEventListener('load', function() {
        // image has successfully loaded
    });
    And if the image should fail to load?

    img.addEventListener('error', function() {
        // image has failed to load
    });

*/