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
