import React from "react";
import { toast } from 'react-toastify';
import Color from "../HOC/Color";



class AddTodo extends React.Component {

    state = {
        title: ''
    }
    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        })
    }
    handleAddTodo = () => {
        if (!this.state.title) {
            //undefine/null/rỗng => false
            toast.error(`Mày là máy à Bro !`)
            return;

        }

        let todo = {
            id: Math.floor(Math.random() * 101),
            title: this.state.title,
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: '',
        })
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleChangeTitle(event)} />
                <button type="button" className="add"
                    onClick={() => this.handleAddTodo()}
                >Add</button>
            </div>
        )
    }
}

export default Color(AddTodo);