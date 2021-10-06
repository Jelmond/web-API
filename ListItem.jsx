import React, {Component} from "react";

export class ListItem extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        this.props.onDelete(this.props.item.id);
    }

    render() { 
        const {item} = this.props;
        return (
            <li>
                {item.content}
            <button
                onClick={
                    this.handleDelete()
                    }>
            </button>
            </li>
        )
    }
}