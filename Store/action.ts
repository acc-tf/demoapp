import * as actionTypes from "./actionTypes"

export function addOrder(order: IOrder){
    const action: OrderAction = {
        type: actionTypes.ADD_ORDER,
        order,
    }
    return simulateHttpRequest(action)
}

export function removeOrder(order: IOrder){
    const action: OrderAction = {
        type: actionTypes.REMOVE_ORDER,
        order,
    }
    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: OrderAction){
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 5000)
    }
}