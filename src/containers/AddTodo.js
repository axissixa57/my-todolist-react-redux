import { connect } from 'react-redux';

import { addTodo as addTodoAction } from '../actions/todos';
import AddTodoUI from '../components/AddTodoUI';

const mapDispatchToProps = dispatch => {
    return {
        addTodo: state => {
            dispatch(addTodoAction(state))
        }
    }
}

const AddTodo = connect(
    null,
    mapDispatchToProps
)(AddTodoUI)

export default AddTodo;