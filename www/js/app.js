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


var HomePage = React.createClass({
    render: function () {
        return (
            <div>
                <Header text="Plano Alimentar" back="false"/>
                <div className="content">
                    <PlanList plans={this.props.plans}/>
                </div>
            </div>
        );
    }
});


var PlanList = React.createClass({
    render: function () {
        var items = this.props.plans.map(function (plan) {
            return (
                <PlanListItem key={plan.Name} plan={plan} />
            );
        });
        return (
            <ul  className="table-view">
                {items}
            </ul>
        );
    }
});

var PlanListItem = React.createClass({
    render: function () {
        return (
            <li className="table-view-cell media">
                <a href={"#planDetail/" + this.props.plan.Name}>
                    <img className="media-object small pull-left" src={"pics/" + "hamburger" + ".png" }/>
                    <p>{this.props.plan.Name}</p>
                </a>
            </li>
        );
    }
});



var MeallList = React.createClass({
    render: function () {
        var items = this.props.meals.map(function (meal) {
            return (
                <MealListItem meal={meal} />
            );
        });
        return (
            <div>
            <ul  className="table-view">
                {items}
            </ul>
            </div>
        );
    }
});



var MealListItem = React.createClass({
    render: function () {
        return (
            <li className="table-view-cell media">
                <a href="#openModal">
                    <Modal meal={this.props.meal} />
                    <img className="media-object small pull-left" src={"pics/" + "hamburger" + ".png" }/>
                    <p>{this.props.meal.Name}</p>
                </a>
            </li>
        );
    }
});

var Modal = React.createClass({
    render: function () {
        return (
          <div id="myModalexample" className="modal">
            <header className="bar bar-nav">
              <a className="icon icon-close pull-right" href="#closeModal"></a>
              <h1 className="title">{this.props.meal.Name}</h1>
            </header>

            <div className="content">
              <p className="content-padded">
                  <MealDetailItem meal={this.props.meal} />
              </p>
            </div>
          </div>
        );
    }
});

var MealDetailItem = React.createClass({
    render: function () {
        return (
              <p>
                {this.props.meal.Dishes.m_StringValue}
              </p>
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
                      <MeallList meals={this.state.meals}/>
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
        router.addRoute('openModal/:name', function(name) {
          $("#myModalexample").addClass("active")
        }.bind(this));
        router.addRoute('closeModal', function(name) {
          $("#myModalexample").removeClass("active")
        }.bind(this));
        router.start();
    },
    render: function() {
        return this.state.page;
    }
});

React.render(<App/>, document.body);
