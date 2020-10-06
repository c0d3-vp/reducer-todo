export const todoList = [
    {
        item: 'Learn about reducers 👩‍💻',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Cook dinner 🍽 ',
        completed: false,
        id: 3892987590
    },
    {
        item: 'Go for a run 🏃‍♀️ ',
        completed: false,
        id: 3892987591
      },
    {
        item: 'Take dogs to the beach 🏖 ',
        completed: false,
        id: 3892987592
    },
    {
        item: 'Get restful sleep 😴',
        completed: false,
        id: 3892987593
        },
]  

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO': 
            return {
                ...state,
                title: action.payload,
                editing: false
            }   
        case 'COMPLETE_TODO':
            return {
                ...state, completed: !state[0].completed
            }
        case 'CLEAR_TODO':
            return
        default:
            return state
    }
}


