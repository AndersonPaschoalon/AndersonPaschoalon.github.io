class BoltText extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    componentWillMount()
    {

    }

    render()
    {
        let displayValue = this.props.children
        console.log("displayValue:" + displayValue);
        return <b>{displayValue}</b>
    }
}
