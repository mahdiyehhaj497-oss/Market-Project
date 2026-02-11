export default function CartReducer(state, action) {
    

    if (action.type === "add") {
        const foundIndex = state.findIndex(item => item.id === action.payload)
        if (foundIndex !== -1) { 
           state.map((item,index)=>index===foundIndex ?{...item,quantity:item.quantity+1}: item)
        }


        return [...state ,{id:action.payload, quantity: 1 }]
    }
    return 10
}