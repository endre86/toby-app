'use strict';

(function() {
	window.App = window.App || {};
	var App = window.App;

	// ----
	// Page render functions
	// ----
	var ReactModules = App.ReactModules;
	
	var renderQuestionPage = function (pageContent) {
		ReactDOM.render(
			React.createElement(ReactModules.QuestionPage, {
				title: pageContent.title,
				description: pageContent.description,
				options: pageContent.options
			}),
			document.getElementById('container')
		);
	}

	var renderStartPage = function(pageContent) {
		ReactDOM.render(
			React.createElement(ReactModules.StartPage, pageContent),
			document.getElementById('container')
		);
	}

	var renderResultPage = function(pageContent) {
		ReactDOM.render(
			React.createElement(ReactModules.ResultPage, pageContent),
			document.getElementById('container')
		);
	}	

	// ----
	// Page data
	// ----
	var startPage = {
		data: {
			buttonText: 'Here is your next conversation.'
		},
		renderEngine: renderStartPage
	}

	var questionPage1 = {
		data: {
			title: 'Complex / Deep - Bitter',
			description: 'Do want you feel like having a light talk, a more mind opening discussion or a possible mood and mind altering conversation?',
			options: [
				{ name: 'Mild', value: '0.5 cl' },
				{ name: 'Very', value: '1.0 cl' },
				{ name: 'Depressed artist', value: '1.5 cl' }
			],
		},
		renderEngine: renderQuestionPage
	};

	var questionPage2 = {
		data: {
			title: 'Entertaining / Fun - Spice',
			description: 'Would you like to feel a little tingle to an entertaining day/evening? Or would you like to start things off with a bang?',
			options: [
				{ name: 'Mild', value: '2 dashes' },
				{ name: 'Very', value: '4 dashes' }
			]
		},
		renderEngine: renderQuestionPage
	};

	var questionPage3 = {
		data: {
			title: 'Loudness / Forewardness - Ron Zacapa',
			description: 'How direct, lound and bombastic would you enjoy your conversational partner?',
			options: [
				{ name: 'Low', value: '2.0 cl' },
				{ name: 'Mild', value: '2.5 cl' },
				{ name: 'Very', value: '1.5 cl' }
			]
		},
		renderEngine: renderQuestionPage
	};

	var resultPage = {
		data: {
			title: 'Here is your next conversation',
			receipeTitle: 'Receipe for your next conversation:',
			ingredients: [
				{ 
					description: 'Complex',
					ingredient: 'Sialogogue Reduction',
					measurement: '1.0 cl'
				},
				{ 
					description: 'Entertaining / fun',
					ingredient: 'Black pepper tincture',
					measurement: '2 dashes'
				},
				{ 
					description: 'Loundness / forewardness',
					ingredient: 'Ron Zacapa 23',
					measurement: '2.5 cl'
				}
			],
			receipePostText: 'Enjoy and welcome back!'
		},
		renderEngine: renderResultPage
	}

	App.State = App.State || {};

	App.ShowNextPage = function() {
		var newPage = App.Pages[App.State.nextPage];
		newPage.renderEngine(newPage.data);
		App.State.nextPage++;
	}

	App.Initialize = function() {
		// Set pages
		App.Pages = [
			startPage,
			questionPage1,
			questionPage2,
			questionPage3,
			resultPage
		];

		// Set which page should be shown
		App.State.nextPage = 0;

		// Show page
		App.ShowNextPage();
	}

	App.Initialize();
})();