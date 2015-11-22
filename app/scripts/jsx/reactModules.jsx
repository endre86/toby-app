'use strict';

(function() {
	window.App = window.App || {};
	window.App.ReactModules = window.App.ReactModules || {};
	
	var ReactModules = window.App.ReactModules; 

	var Heading = React.createClass({
	    render: function() {
	        return (
	        	<h1>{this.props.title}</h1>
	        );
	    }
	});

	var StartButton = React.createClass({
		handleClick: function() {
			window.App.ShowNextPage();
		},
		render: function() {
			return (
				<button className="start-button" onClick={this.handleClick}>
					{this.props.text}
				</button>
			);
		}
	});

	var OptionButton = React.createClass({
		handleClick: function() {
			this.props.handleClick(this.props.value);
		},
		render: function() {
			return (
				<button className="option-button" onClick={this.handleClick}>
					{this.props.name}
				</button>
			);
		}
	});

	var OptionsList = React.createClass({
		render: function() {
			var options = this.props.ingredient.measurementOptions.map(this.renderOptions);

			return (
				<div className="options-list">{ options }</div>
			);
		},
		renderOptions: function(measurementOptions) {
			measurementOptions.handleClick = this.handleClick;
			var option = React.createElement(OptionButton, measurementOptions);
			return (
				<div className="option">
					{ option }
				</div>
			);
		},
		handleClick: function(measurement) {
			this.props.ingredient.measurement = measurement;
			window.App.HandleOptionClick(this.props.ingredient);
		}
	});

	var OptionDescription = React.createClass({
		render: function() {
			return (
				<div className="option-description">{ this.props.description }</div>
			);
		}
	});

	var ResultDescription = React.createClass({
		render: function() {
			return (
				<div className="result-description">{ this.props.description }</div>
			);
		}
	});

	var ReceipeIngredient = React.createClass({
		render: function() {
			return (
				<div className="receipe-ingredient">
					<span className="receipe-ingredient-description">
						{ this.props.description }
					</span>
					<br />
					<span className="receipe-ingredient-name">
						{ this.props.ingredient }
					</span>
					<span className="receipe-ingredient-measurement">
						{ this.props.measurement }
					</span>
				</div>
			);
		}
	});

	var SimpleReceipeIngredient = React.createClass({
		render: function() {
			return (
				<div className="receipe-additional-ingredient">
					<div className="receipe-additional-ingredient-name">
						{ this.props.ingredient.name }
					</div>
					<div className="receipe-additional-ingredient-ingredient">
						{ this.props.ingredient.ingredient }
					</div>
				</div>
			);
		}
	});

	var IngredientList = React.createClass({
		render: function() {
			var ingredientsList = this.props.ingredients.map(this.renderIngredients);

			return (
				<div className="ingredients-list">{ ingredientsList }</div>
			);
		},
		renderIngredients: function(ingredient) {
			return (
				<ReceipeIngredient 
					description = { ingredient.description }
					ingredient = { ingredient.name }
					measurement = { ingredient.measurement } />
			);
		}
	});

	var SimpleIngredientList = React.createClass({
		render: function() {
			var simpleIngredientList = this.props.ingredients.map(this.renderIngredients);
			
			return (
				<div className="simple-ingredient-list"> { simpleIngredientList } </div>
			);
		},
		renderIngredients: function(ingredient) {
			return (
				<SimpleReceipeIngredient ingredient={ ingredient } />
			);
		}
	});

	ReactModules.StartPage = React.createClass({
		render: function() {
			return (
				<div className="start-button-wrapper">
					<br /><br /><br /><br /> <br />
					<br /><br /><br /><br /> <br />
					<br />
					<StartButton text={ this.props.buttonText } />
				</div>
			);
		}
	});


	ReactModules.QuestionPage = React.createClass({
		render: function() {
			return (
				<div className="page">
					<div className="header">
						<Heading title={this.props.title} />
					</div>
					<div className="question">
						<OptionDescription description={ this.props.description } />
						<OptionsList ingredient={ this.props.ingredient } />
					</div>
				</div>
			);
		}
	});

	ReactModules.ResultPage = React.createClass({
		render: function() {
			return (
				<div className="page">
					<div className="header">
						<Heading title={this.props.title} />
					</div>
					<div className="receipe-glass-wrapper">
						<div className="receipe">
							<div className="receipe-title">{ this.props.receipeTitle }</div>
							<IngredientList ingredients={ this.props.ingredients } />
							<SimpleIngredientList ingredients={ this.props.additionalIngredients } />
						</div>
						<div className="cocktail-glass-area-outer">
							<div className="cocktail-glass-area-inner"></div>
						</div>
					</div>
				</div>	
			);
		}
	});
})();