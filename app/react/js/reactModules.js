'use strict';

(function() {
	window.App = window.App || {};
	window.App.ReactModules = window.App.ReactModules || {};
	
	var ReactModules = window.App.ReactModules; 

	var Heading = React.createClass({displayName: "Heading",
	    render: function() {
	        return (
	        	React.createElement("h1", null, this.props.title)
	        );
	    }
	});

	var StartButton = React.createClass({displayName: "StartButton",
		handleClick: function() {
			window.App.ShowNextPage();
		},
		render: function() {
			return (
				React.createElement("button", {className: "start-button", onClick: this.handleClick}, 
					this.props.text
				)
			);
		}
	});

	var OptionButton = React.createClass({displayName: "OptionButton",
		handleClick: function() {
			this.props.handleClick(this.props.value);
		},
		render: function() {
			return (
				React.createElement("button", {className: "option-button", onClick: this.handleClick}, 
					this.props.name
				)
			);
		}
	});

	var OptionsList = React.createClass({displayName: "OptionsList",
		render: function() {
			var options = this.props.ingredient.measurementOptions.map(this.renderOptions);

			return (
				React.createElement("div", {className: "options-list"},  options )
			);
		},
		renderOptions: function(measurementOptions) {
			measurementOptions.handleClick = this.handleClick;
			var option = React.createElement(OptionButton, measurementOptions);
			return (
				React.createElement("div", {className: "option"}, 
					 option 
				)
			);
		},
		handleClick: function(measurement) {
			this.props.ingredient.measurement = measurement;
			window.App.HandleOptionClick(this.props.ingredient);
		}
	});

	var OptionDescription = React.createClass({displayName: "OptionDescription",
		render: function() {
			return (
				React.createElement("div", {className: "option-description"},  this.props.description)
			);
		}
	});

	var ResultDescription = React.createClass({displayName: "ResultDescription",
		render: function() {
			return (
				React.createElement("div", {className: "result-description"},  this.props.description)
			);
		}
	});

	var ReceipeIngredient = React.createClass({displayName: "ReceipeIngredient",
		render: function() {
			console.log(this.props);
			return (
				React.createElement("div", {className: "receipe-ingredient"}, 
					React.createElement("span", {className: "receipe-ingredient-description"}, 
						 this.props.description
					), 
					React.createElement("br", null), 
					React.createElement("span", {className: "receipe-ingredient-name"}, 
						 this.props.ingredient
					), 
					 " ",  
					React.createElement("span", {className: "receipe-ingredient-measurement"}, 
						 this.props.measurement
					)
				)
			);
		}
	});

	var IngredientList = React.createClass({displayName: "IngredientList",
		render: function() {
			var ingredientsList = this.props.ingredients.map(this.renderIngredients);

			return (
				React.createElement("div", {className: "ingredients-list"},  ingredientsList )
			);
		},
		renderIngredients: function(ingredient) {
			return (
				React.createElement(ReceipeIngredient, {
					description:  ingredient.description, 
					ingredient:  ingredient.name, 
					measurement:  ingredient.measurement})
			);
		}
	});

	// var Page = React.createClass({
	// 	render: function() {
	// 		return (
	// 			<div className="page-content">
	// 				{ this.props.children }
	// 			</div>
	// 		)
	// 	}
	// });

	ReactModules.StartPage = React.createClass({displayName: "StartPage",
		render: function() {
			return (
				React.createElement(StartButton, {text:  this.props.buttonText})
			);
		}
	});


	ReactModules.QuestionPage = React.createClass({displayName: "QuestionPage",
		render: function() {
			return (
				React.createElement("div", {className: "page"}, 
					React.createElement("div", {className: "header"}, 
						React.createElement(Heading, {title: this.props.title})
					), 
					React.createElement("div", {className: "question"}, 
						React.createElement(OptionDescription, {description:  this.props.description}), 
						React.createElement(OptionsList, {ingredient:  this.props.ingredient})
					)
				)
			);
		}
	});

	ReactModules.ResultPage = React.createClass({displayName: "ResultPage",
		render: function() {
			return (
				React.createElement("div", {className: "page"}, 
					React.createElement("div", {className: "header"}, 
						React.createElement(Heading, {title: this.props.title})
					), 
					React.createElement("div", {className: "receipe-glass-wrapper"}, 
						React.createElement("div", {className: "receipe"}, 
							React.createElement("div", {className: "receipe-title"},  this.props.receipeTitle), 
							React.createElement(IngredientList, {ingredients:  this.props.ingredients}), 
							React.createElement("div", {className: "receipe-post-text"},  this.props.receipePostText)
						), 
						React.createElement("div", {className: "cocktail-glass-area-outer"}, 
							React.createElement("div", {className: "cocktail-glass-area-inner"})
						)
					)
				)	
			);
		}
	});
})();