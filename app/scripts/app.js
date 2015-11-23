'use strict';

(function() {
	window.App = window.App || {};
	window.App.ReactModules = window.App.ReactModules || {};
	window.App.State = window.App.State || {};
	window.App.Pages = window.App.Pages || {};
	window.App.Pages.Questions = window.App.Questions || [];
	
	var App = window.App;

	// ----
	// Page render functions
	// ----	
	var renderQuestionPage = function (pageContent) {
		ReactDOM.render(
			React.createElement(App.ReactModules.QuestionPage, pageContent),
			document.getElementById('container')
		);
	}

	var renderStartPage = function(pageContent) {
		ReactDOM.render(
			React.createElement(App.ReactModules.StartPage, pageContent),
			document.getElementById('container')
		);
	}

	var renderResultPage = function(pageContent) {
		ReactDOM.render(
			React.createElement(App.ReactModules.ResultPage, pageContent),
			document.getElementById('container')
		);
	}

	App.Pages.StartPage = {
		data: {
			buttonText: 'Your next conversation.'
		},
		renderEngine: renderStartPage
	}

	App.Pages.Questions.push({
		data: {
			title: 'Complex / Deep',
			description: 'Do you feel like having a light talk, a more mind opening discussion or a possible mood and mind altering conversation?',
			ingredient: {
				description: 'Complex / Deep',
				name: 'Sialogogue reduction',
				measurement: 'not set',
				measurementOptions: [
					{ name: 'Light Talk', value: '0.5 cl' },
					{ name: 'Mind Opening', value: '1.0 cl' },
					{ name: 'Depressed Artist', value: '1.5 cl' }
				]
			},
		},
		renderEngine: renderQuestionPage
	});

	App.Pages.Questions.push({
		data: {
			title: 'Entertaining / Fun',
			description: 'Would you like to feel a little tingle to an entertaining day/evening? Or would you like to start things off with a bang?',
			ingredient: {
				description: 'Entertaining / Fun',
				name: 'Black pepper tincture',
				measurement: 'not set',
				measurementOptions: [
					{ name: 'Tingle', value: '4 dashes' },
					{ name: 'Possible Bang', value: '8 dashes' }
				]
			}
		},
		renderEngine: renderQuestionPage
	});

	App.Pages.Questions.push({
		data: {
			title: 'Loudness / Forewardness',
			description: 'How direct, loud and bombastic would you enjoy your conversational partner?',
			ingredient: {
				description: 'Loudness / Forewardness',
				name: 'Ron Zacapa 23',
				measurement: 'not set',
				measurementOptions: [
					{ name: 'Shy', value: '2.0 cl' },
					{ name: 'Mild', value: '2.5 cl' },
					{ name: 'Bombastic', value: '3.0 cl' }
				]
			}
		},
		renderEngine: renderQuestionPage
	});

	App.Pages.ResultPage = {
		data: {
			title: 'Here is your next conversation',
			receipeTitle: 'Recipe:',
			ingredients: [],
			receipePostText: 'Top',
			additionalIngredients: [
				{
					name: 'Top',
					ingredient: 'Davenne Crémant de Bourgogne'
				},
				{
					name: 'Add',
					ingredient: '1 x Black sugar cube'
				}
			]
		},
		renderEngine: renderResultPage
	}

	App.ShowPage = function(page) {
		page.renderEngine(page.data);
	}

	App.ShowNextPage = function() {
		if(App.State.nextPage >= App.Pages.Questions.length) {
			App.Pages.ResultPage.data.ingredients = App.State.ingredientList;
			App.ShowPage(App.Pages.ResultPage);
			return;
		}

		var nextPage = App.Pages.Questions[App.State.nextPage]
		App.ShowPage(nextPage);
		App.State.nextPage++;
	}

	App.HandleOptionClick = function(ingredient) {
		App.RegisterIngredientChoice(ingredient);
		App.ShowNextPage();
	}

	App.RegisterIngredientChoice = function(ingredient) {
		App.State.ingredientList.push(ingredient);	
	}

	App.Initialize = function() {
		// Set which page should be shown
		App.State.nextPage = 0;

		// Storage for ingredient list
		App.State.ingredientList = [];

		// Show start page
		App.ShowPage(App.Pages.StartPage);
		// App.ShowPage(App.Pages.Questions[0]);
		// App.Pages.ResultPage.data.ingredients = [
		// 	{
		// 		description: 'Description',
		// 		name: 'Name',
		// 		measurement: 'over 3000'
		// 	},
		// 	{
		// 		description: 'Description',
		// 		name: 'Name',
		// 		measurement: 'over 3000'
		// 	},
		// 	{
		// 		description: 'Description',
		// 		name: 'Name',
		// 		measurement: 'over 3000'
		// 	}
		// ];
		// App.ShowPage(App.Pages.ResultPage);
	}
})();