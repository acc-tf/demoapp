import * as actionTypes from "./actionTypes"

const initialState: OrderState = {
    orders: [
        {
            id: 1,
            name: "product 1",
            body: "This is the description for product 1",
        },
        {
            id: 2,
            name: "product 2",
            body: "This is the description for product 2",
        },
        {
            id: 3,
            name: "product 3",
            body: "This is the description for product 3",
        },
    ],
}

const reducer = (
    state : OrderState = initialState,
    action: OrderAction
): OrderState => {
    switch(action.type){
        case actionTypes.ADD_ORDER:
            const newOrder: IOrder = {
                id: Math.random(),
                name: action.order.name,
                body: action.order.body,
            }
            return {
                ...state,
                orders: state.orders.concat(newOrder),
            }
        case actionTypes.REMOVE_ORDER:
            const updatedOrders: IOrder[] = state.orders.filter(
                order => order.id !== action.order.id
            )
            return{
                ...state,
                orders: updatedOrders,
            }
    }
    return state
}

export default reducer