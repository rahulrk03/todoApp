// use rfce for component snnipet
import React from 'react';
import './Todo.css';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';

function Todo(props) {
    return (
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Dummy Deadline" />
            </ListItem>

             {/* <li>{props.text}</li> */}
             </List>
    )
}

export default Todo
