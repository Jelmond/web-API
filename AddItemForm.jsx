import React, {Component} from 'react';

export class AddItemForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            item: '',
        }
    }

    handleChange(event) {
        this.setState({
            item: event.target.value.trim(),
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.item);
        this.setState({item: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type={'text'}
                    name={'item'}
                    value={this.state.item}
                    onChange={this.handleChange}
                />
                <input type={'submit'} />
            </form>
        )
    }
};