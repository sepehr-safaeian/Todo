import React, {Component} from 'react';
class TodoList extends Component{
    constructor() {
        super();
        this.state = {
            userInput:'',
            items:[]
        };
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            userInput2:'',
            items: [...this.state.items, this.state.userInput,]
        });
    }


    renderTodos(){
        return this.state.items.map((items)=>{
            return(
                <div class="row">
                <div class="col-3">
                    <ul class="list-group pr-0">
                        <li v-for="todo in todos" class="list-group-item d-flex align-item-center">
                            <button key={items} class="btn border-0 flex-grow-1 text-left shadow-none">
                           {items}
                            </button>  
                            <button onClick={this.deleteTodo.bind(this, items)} class="btn btn-outline-danger border-0 ml-2">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
</svg>  
                            </button>
                        </li>    
                    </ul>
                   
                </div>
            </div>
            );
        });
    }

    render() {
        return(
            <div class="h">
                <h1>Todo List</h1>
                <form>
                    <input 
                    value={this.state.userInput}
                    type="text"
                    placeholder="Add Todo"
                    onChange={this.onChange.bind(this)}
                    />
                    <button onClick={this.addTodo.bind(this)} type="button" class="btn btn-outline-primary">Submit</button>
                </form>
                <br/>
                <div>
                    {this.renderTodos()}
                </div>
            </div>
            
        );
    }

    deleteTodo(item) {
        // no event 
        // pass the item to indexOf
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }
}

export default TodoList;
