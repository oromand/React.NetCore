import {connect} from "react-redux" 
import {ListOffers} from "../components/ListOffers"

const getVisibleOffers = (offers) => {
    return offers
}

const mapStateToProps = (state) => ({
  offers: getVisibleOffers(state.todos)
})

const mapDispatchToProps = {
  //onTodoClick: toggleTodo
}

const VisibleTodoList = connect(
  mapStateToProps,
  //mapDispatchToProps
)(TodoList)

export default VisibleOfferList