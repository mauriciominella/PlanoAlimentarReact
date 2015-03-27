var Header = React.createClass({
    render: function () {
        return (
            <header className="bar bar-nav">
                <a href="#" className={"icon icon-left-nav pull-left" + (this.props.back==="true"?"":" hidden")}></a>
                <h1 className="title">{this.props.text}</h1>
            </header>
        );
    }
});


var MealPlanListItem = React.createClass({
    render: function () {
        return (
            <li className="table-view-cell media">
                <a href={"#meals/" + this.props.meal.Name}>
                    <img className="media-object small pull-left" src={"pics/" + "Amy" + "_" + "Jones" + ".jpg" }/>
                    <p>{this.props.meal.Name}</p>
                </a>
            </li>
        );
    }
});

var MealPlanList = React.createClass({
    render: function () {
        var items = this.props.meals.map(function (meal) {
            return (
                <MealPlanListItem key={meal.Name} meal={meal} />
            );
        });
        return (
            <ul  className="table-view">
                {items}
            </ul>
        );
    }
});

var MealDetailList = React.createClass({
    render: function () {
      alert(this.props.meals[0]);
        var items = this.props.meals.map(function (meal) {
            return (
                <MealPlanListItem meal={meal} />
            );
        });
        return (
            <ul  className="table-view">
                {items}
            </ul>
        );
    }
});

var MealDetailItem = React.createClass({
    render: function () {
        return (
            <li className="table-view-cell media">
              <p>
                {this.props.meal.Dishes.m_StringValue}
              </p>
            </li>
        );
    }
});


var HomePage = React.createClass({
    render: function () {
        return (
            <div>
                <Header text="Plano Alimentar" back="false"/>
                <div className="content">
                    <MealPlanList meals={this.props.meals}/>
                </div>
            </div>
        );
    }
});

var MealPlanPage = React.createClass({
    getInitialState: function() {
        return {meals: {}};
    },
    componentDidMount: function() {
        this.props.service.findByName(this.props.mealPlanName).done(function(result) {
            alert(result);
            this.setState({meals: result.Meals});
        }.bind(this));
    },
    render: function () {
        return (
            <div>
                <Header text="Meal Plan" back="true"/>
                <MealDetailList meals={this.state.meals}/>
            </div>
        );
    }
});

var App = React.createClass({
  getInitialState: function() {

    var tempMeals;
    var tempPage = null;

    mealPlanService.getAll().done(function(meals) {
        tempMeals = meals;
        tempPage = <HomePage meals={meals}/>;
        //this.setState({meals: meals, page: <HomePage meals={meals}/>});
    }.bind(this));

      return {
          meals: tempMeals,
          page: tempPage
      }
    },
    componentDidMount: function() {
        router.addRoute('', function() {
            this.setState({page: <HomePage meals={this.state.meals}/>});
        }.bind(this));
        router.addRoute('meals/:name', function(name) {
            this.setState({page: <MealPlanPage mealPlanName={name} service={mealPlanService}/>});
        }.bind(this));
        router.start();
    },
    render: function() {
        return this.state.page;
    }
});

React.render(<App/>, document.body);
