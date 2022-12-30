interface IOrder{
    id: number
    name: string
    body: string
}

type OrderState = {
    orders: IOrder[]
}

type OrderAction = {
    type: string
    order: IOrder
}

type DispatchType = (args: OrderAction) => OrderAction