$(document).ready(function(){

	/*See little comment on line 53. You were almost there!
	Also, the intent was to replace the word's in CAPS with
	the inputs on the screen, but I see that you understand
	the concept anyway, nice job!
	*/

	$('input#makeLetter').click(function(){

		// var Adjective = $('input#adjective').val();
		var texts = new Array();

		var nouns = new Array();

		var occupation = new Array();

		var adjectives = new Array();

		adjectives[0] = $('input#adjective1').val()

		adjectives[1] = $('input#adjective2').val()

		adjectives[2] = $('input#adjective3').val()

		adjectives[3] = $('input#adjective4').val()

		adjectives[4] = $('input#adjective5').val()

		adjectives[5] = $('input#adjective6').val()

		adjectives[6] = $('input#adjective7').val()

		adjectives[7] = $('input#adjective8').val()

		adjectives[8] = $('input#adjective9').val()

		nouns[0] = $('input#company').val()

		nouns[1] = $('input#noun1').val()

		nouns[2] = $('input#noun2').val()

		nouns[3] = $('input#noun3').val()

		nouns[4] = $('input#noun4').val()

		nouns[5] = $('input#noun5').val()

		occupation[0] = $('input#occupation').val()

		occupation[1] = $('input#occupation2').val()

		occupation[2] = $('input#occupation3').val()

		occupation[3] = $('input#occupation4').val()

		texts[0] = 	'Dear ' + nouns[0] + ':';

		texts[1] = 'FRIENDS NAME worked for me as my assistant for LENGTH OF TIME. I recommend her without ' + nouns[1] + ' for the ' + occupation[0] + ' program.';

		texts[2] = 'While working in ' + nouns[1] + ' production, I often relied on FRIENDS NAME to put together ' + adjectives[0] + ' presentations, for which she described and VERB ENDING IN "ED" the artistic approach to the project, researching ' + nouns[2] + ' and photographic ' + adjectives[1] + ' materials. Her creativity, resourcefulness and ability to see a project through really made these presentations ' + adjectives[2] + ' and ' + adjectives[3];// '' <-- This little bugger here was causing you're only issue

		texts[3] = 'When we went into production on the feature film NAME OF MOVIE, FRIENDS NAME was able to observe every ' + nouns[3] + ' of the process, VERB ENDING IN "ING" in on meetings and working with ANIMAL (PL) in all areas of the production from the moment the production was set in motion through the release of the film LENGTH OF TIME later.';

		texts[4] = 'During this time, she was an ADJECTIVE #5 ' + occupation[1] + ', often serving as my liason to scattered NOUN #3 (PL) of the crew. She also coordinated projects involving ADJECTIVE #6 people, and her ability to work ADVERB #1 while guiding the project quickly and ADVERB #2 was ADJECTIVE #7. For example, when we suddenly needed to reconceive several action NOUN #5 (PL) that had already been storyboarded, FRIENDS NAME quickly found a new storyboard ' + occupation[2] + ' on location and worked with him, the stunt coordinator and the ' + occupation[3] + ' through several drafts to make sure the new ' + nouns[5] + ' worked, and then VERB ENDING IN "ED" with crew ' + nouns[3] + ' from all departments, making sure everyone was up-to-date on the changes that were relevant to them. She even VERB ENDING IN "ED" #2 in to draw a few last-minute ADJECTIVE #8 changes herself.';

		texts[5] = 'FRIENDS NAME\'s sensitivity, ' + nouns[1] + ', energy and sense of ' + nouns[2] + ' made working with her a/an ' + nouns[3] + '. I highly recommend her as a/an ADJECTIVE #9 addition to the program.';

		texts[6] = 'Sincerely,';

		texts[7] = 'YOUR NAME';

		$(texts).each(function(index, text){

			$('div.output').append('<p>' + text + '</p>');

		});

	});


});