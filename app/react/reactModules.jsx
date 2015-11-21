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
			window.App.ShowNextPage();
		},
		render: function() {
			return (
				<button className="option-button" onClick={this.handleClick}>
					{this.props.option.name}
				</button>
			);
		}
	});

	var OptionsList = React.createClass({
		render: function() {
			var options = this.props.options.map(this.renderOptions);
			return (
				<div className="options-list">{ options }</div>
			);
		},
		renderOptions: function(option) {
			return (
				<div className="option"><OptionButton option={ option } /></div>
			);
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
					 &nbsp; 
					<span className="receipe-ingredient-measurement">
						{ this.props.measurement }
					</span>
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
					ingredient = { ingredient.ingredient }
					measurement = { ingredient.measurement } />
			);
		}
	});

	var Page = React.createClass({
		render: function() {
			return (
				<div className="page-content">
					{this.props.children}
				</div>
			)
		}
	});

	ReactModules.StartPage = React.createClass({
		render: function() {
			return (
				<StartButton text={this.props.buttonText} />
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
						<OptionDescription description={this.props.description} />
						<OptionsList options={this.props.options} />
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
							<div className="receipe-post-text">{ this.props.receipePostText }</div>
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