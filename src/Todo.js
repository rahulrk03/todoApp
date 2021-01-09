// use rfce for component snnipet
import React,  { useState } from 'react';
import './Todo.css';
import { List, ListItem, Button, ListItemText, ListItemAvatar } from '@material-ui/core';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';



const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {

    const classes = useStyles();
    // const [modalStyle] = React.useState(getModalStyle);

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true })
        setOpen(false)
    };

    return (
        <>
        <Modal 
            open={open}
            onClose={e => setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>I am a modal</h1>
                    <input placeholder={props.todo.todo} value={input} onChange = {event => setInput(event.target.value)}/>
                    <Button onClick={updateTodo}>Update Todo</Button>
                </div>
            </Modal>

        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy Deadline" />
            </ListItem>
            <button onClick = {e => setOpen(true)}> Edit</button>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
             {/* <li>{props.text}</li> */}
             </List>
        </>
    )
}

export default Todo
