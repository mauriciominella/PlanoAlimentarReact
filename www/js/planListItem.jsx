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
