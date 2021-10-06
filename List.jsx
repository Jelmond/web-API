import React, {Component} from 'react';
import { ListItem } from './ListItem';

export class List extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.items.map(item => (
                        <ListItem 
                        key = {item.id} 
                        item={item}
                        onDelete = {this.props.handleDeleteItem}
                        />
                    ))
                };
            </ul>
            )
        }}