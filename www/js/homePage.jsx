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
