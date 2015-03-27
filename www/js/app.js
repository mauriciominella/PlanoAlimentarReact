var MealDetailList = React.createClass({
    render: function () {
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



var PlanPage = React.createClass({
    getInitialState: function() {
        return {
          meals: {},
          PlanName: ''
        };
    },
    componentWillMount: function() {
        this.props.service.findByName(this.props.PlanName).done(function(result) {
            this.setState({meals: result[0].Meals});
        }.bind(this));
    },
    render: function () {
        return (
            <div>
                <Header text={this.props.PlanName} back="true"/>
                <div className="card">
                    <ul className="table-view">
                      <MealDetailList meals={this.state.meals}/>
                      </ul>
                </div>
            </div>
        );
    }
});

var App = React.createClass({
  getInitialState: function() {

    var tempPlans;
    var tempPage = null;

    mealPlanService.getAll().done(function(plans) {
        tempPlans = plans;
        tempPage = <HomePage plans={plans}/>;
        this.setState({plans: tempPlans, page: tempPage});
    }.bind(this));

      return {
          plans: tempPlans,
          page: tempPage
      }
    },
    componentDidMount: function() {
        router.addRoute('', function() {
            this.setState({page: <HomePage plans={this.state.plans}/>});
        }.bind(this));
        router.addRoute('planDetail/:name', function(name) {
            this.setState({page: <PlanPage PlanName={name} service={mealPlanService}/>});
        }.bind(this));
        router.start();
    },
    render: function() {
        return this.state.page;
    }
});

React.render(<App/>, document.body);
