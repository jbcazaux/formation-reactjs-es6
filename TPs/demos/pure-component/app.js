import React, {Fragment} from "react";

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.state = {items: [0, 1]};
    }

    render() {
        return (
            <Fragment>
                <button onClick={this.addItem}>Add !</button>
                <ItemList items={this.state.items}/>
            </Fragment>);
    }

    addItem(){
        this.setState(prevState => {
            prevState.items.push(prevState.items.length);
            return {items: prevState.items};
        });
    }
}

class ItemList extends React.Component {
//class ItemList extends React.PureComponent {
    render() {
        return <ul>
            {this.props.items.map(item => <li key={item}>{item}</li>)}
        </ul>
    }
}