var ranges = {
	"lifeLessons": [
		// "description": "The Life Lessons range is made up of a series of satirical poems which came to me over the course of 24  hours.",
	{
		// "designBw": "images/LifeLessons/beetle-bw.jpg",
		"designColor": "images/LifeLessons/beetle-colour.jpg",
		// "description":
		"URL": "http://www.bstylee.co.uk/designs/lifelessons/beetle"
	},
	{
		// "designBw": "images/LifeLessons/tree-bw.jpg",
		"designColor": "images/LifeLessons/tree-colour.jpg",
		// "description":
		"URL": "http://www.bstylee.co.uk/designs/lifelessons/tree"		
	},
	{
		// "designBw": "images/LifeLessons/spider-bw.jpg",
		"designColor": "images/LifeLessons/spider-colour.jpg",
		// "description":
		"URL": "http://www.bstylee.co.uk/designs/lifelessons/spider"		
	},
	{
		// "designBw": "images/LifeLessons/worm-bw.jpg",
		"designColor": "images/LifeLessons/worm-colour.jpg",
		// "description":
		"URL": "http://www.bstylee.co.uk/designs/lifelessons/worm"		
	},
	{
		// "designBw": "images/LifeLessons/sun-bw.jpg",
		"designColor": "images/LifeLessons/sun-colour.jpg",
		// "description":
		"URL": "http://www.bstylee.co.uk/designs/lifelessons/sun"		
	},
	{
		// "designBw": "images/LifeLessons/bee-bw.jpg",
		"designColor": "images/LifeLessons/bee-colour.jpg",
		// "description":
		"URL": "http://www.bstylee.co.uk/designs/lifelessons/bee"
	},
	{
		// "designBw": "images/LifeLessons/koala-bw.jpg",
		"designColor": "images/LifeLessons/koala-colour.jpg",
		// "description":
		"URL": "http://www.bstylee.co.uk/designs/lifelessons/koala"
	},
	{
		// "designBw": "images/LifeLessons/penguin-bw.jpg",
		"designColor": "images/LifeLessons/penguin-colour.jpg",
		// "description":
		"URL": "http://www.bstylee.co.uk/designs/lifelessons/penguin"		
	},
	{
		// "designBw": "images/LifeLessons/bun-bw.jpg",
		"designColor": "images/LifeLessons/bun-colour.jpg",
		// "description":
		"URL": "http://www.bstylee.co.uk/designs/lifelessons/bun"
	}],

// Each image in sprite is 5in which is 480px
// To make this sprite work each image needs to have css background image with x and y coordinates or 0 and something x 480
// Add css inline in javascript by adding var rainbow then rainbow.style.background image.umm.....

// In CSS I would  give each an ID, of 1, 2, 3 etc, and then x, y coordinates.
// To test - transparent placeholder in <img tag> in html, then with id to see if sprite is right...
// then add that html to this json...

	"rainbow": [
	{
		// "designBw":
		"designColor": "images/Rainbow/love.jpg",
		// "description":
		"URL": "http://www.bstylee.co.uk/designs/rainbow/love"
	},
	{
		// "designBw":
		"designColor": "images/Rainbow/party.jpg",
		// "description":
		"URL": "http://www.bstylee.co.uk/designs/rainbow/love"
	},
	{
		// "designBw":
		"designColor": "images/Rainbow/mash-it-up.jpg",
		// "description":
		"URL": "http://www.bstylee.co.uk/designs/rainbow/love"
	},
	{
		// "designBw":
		"designColor": "images/Rainbow/happy.jpg",
		// "description":
		"URL": "http://www.bstylee.co.uk/designs/rainbow/love"
	},
	{
		// "designBw":
		"designColor": "images/Rainbow/beautiful-you.jpg",
		// "description":
		"URL": "http://www.bstylee.co.uk/designs/rainbow/love"
	}],

	"random": [
	{
		// "design-bw":
		"designColor": "images/random/humming-bird.jpg",
		// "description":
		"URL": "http://www.bstylee.co.uk/designs/random/humming-bird"
	},
	{
		"designColor": "images/random/LoveBomb.jpg",
		"URL" : "http://www.bstylee.co.uk/designs/random/lovebomb"
	},
	{
		"designColor": "images/random/LoveBox.jpg",
		"URL" : "http://www.bstylee.co.uk/designs/random/lovebox"
	},
	{
		// "design-bw":
		"designColor": "images/random/boom.jpg",
		// "description":
		"URL": "http://www.bstylee.co.uk/designs/random/boom"
	},
	{
		"designColor": "images/random/UnicornCard.jpg",
		"URL": "http://www.bstylee.co.uk/designs/random/unicorn"
	},
	{
		// "design-bw":
		"designColor": "images/random/wedding-patchwork.jpg",
		// "description":
		"URL": "http://www.bstylee.co.uk/designs/random/wedding"
	},
	{
		// "design-bw":
		"designColor": "images/random/anniversary.jpg",
		// "description":
		"URL": "http://www.bstylee.co.uk/designs/random/anniversary"
	},
	{
		// "design-bw":
		"designColor": "images/random/new-home.jpg",
		// "description":
		"URL": "http://www.bstylee.co.uk/designs/random/new-home"
	}],

};


// $("a#lifeLessons").on('click', function{
// 	window.open("file:///Users/Beth/Documents/bstylee-designs/no-jquery.html");
// });

var HTMLcolor = '<img src="%data%">';

function displayLifeLessons(){
	for (var i = 0; i < 5; i++) {
		var ColorPic = HTMLcolor.replace("%data%", ranges.lifeLessons[i].designColor);
		$("#lifeLessons").append(ColorPic);
		// I need to add a selector to the oarticular image in a gallery carousel so it shows this one and the others as thumbnails.
		// $("#lifeLessons").attr("href", "http://www.bstylee.co.uk/no-jquery.html");
	};
}

function displayRainbow(){
	for (var i = 0; i < 5; i++) {
		var ColorPic = HTMLcolor.replace("%data%", ranges.rainbow[i].designColor);
		$("#rainbows").append(ColorPic);
	};
}

function displayRandom(){
	for (var i = 0; i < 5; i++) {
		var ColorPic = HTMLcolor.replace("%data%", ranges.random[i].designColor);
		$("#random").append(ColorPic);
	};	
}

// function displayIndividual(){}
	// On {} URL page...
	// Can I iterate through each of the ranges objects array objects? Nested for loops?
	// Display this.designColor image + description
	// Plus a carousel of all the other images in that array with a background image of the negative strip.
	// use document.open() and document.write()


displayLifeLessons();
displayRainbow();
displayRandom();

console.log("and that's a wrap people!");




	// "brighton": [
	// {
	// 	"design-bw":
	// 	"design-color":
	// 	"description":
	// 	"URL":
	// },
	// {
	// 	"design-bw":
	// 	"design-color":
	// 	"description":
	// 	"URL":
	// },
	// {
	// 	"design-bw":
	// 	"design-color":
	// 	"description":
	// 	"URL":
	// }],

	// "new": [
	// {
	// 	"design-bw":
	// 	"design-color":
	// 	"description":
	// 	"URL":
	// },
	// {
	// 	"design-bw":
	// 	"design-color":
	// 	"description":
	// 	"URL":
	// },
	// {
	// 	"design-bw":
	// 	"design-color":
	// 	"description":
	// 	"URL":
	// }],

	// "christmas": [
	// {
	// 	"design-bw":
	// 	"design-color":
	// 	"description":
	// 	"URL":
	// },
	// {
	// 	"design-bw":
	// 	"design-color":
	// 	"description":
	// 	"URL":
	// },
	// {
	// 	"design-bw":
	// 	"design-color":
	// 	"description":
	// 	"URL":
	// },
	// {
	// 	"design-bw":
	// 	"design-color":
	// 	"description":
	// 	"URL":
	// },
	// {
	// 	"design-bw":
	// 	"design-color":
	// 	"description":
	// 	"URL":
	// },
	// {
	// 	"design-bw":
	// 	"design-color":
	// 	"description":
	// 	"URL":
	// },
	// {
	// 	"design-bw":
	// 	"design-color":
	// 	"description":
	// 	"URL":
	// },
	// {
	// 	"design-bw":
	// 	"design-color":
	// 	"description":
	// 	"URL":
	// },
	// {
	// 	"design-bw":
	// 	"design-color":
	// 	"description":
	// 	"URL":
	// },
	// {
	// 	"design-bw":
	// 	"design-color":
	// 	"description":
	// 	"URL":
	// }],





















