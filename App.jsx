import React, {Component} from 'react';
import {AddItemForm} from './components/AddItemForm';
import {List} from './components/List';
import { ListItem } from './ListItem';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
        this.handlDeleteItem = this.handlDeleteItem.bind(this);
        this.addItemToList = this.addItemToList.bind(this);
    }

    addItemToList(newItem) {
        this.setState(prevState => {
            const items = [...prevState.items];
            items.push(newItem);
            return {items};
        });
    }

    handlDeleteItem(id) {
        // const index = this.state.items.findIndex(item => {
        //     item.id === id
        // });
        this.setState(() => {
            const newItems = this.state.items.filter(item => item.id !== id);
            return ({
                items: newItems,
            })
        });
    }

    render() {
        return (
            <>
                <List items={this.state.items} handlDeleteItem={this.handlDeleteItem}/>
                <AddItemForm onSubmit={this.addItemToList} />
            </>
        );
    }
};