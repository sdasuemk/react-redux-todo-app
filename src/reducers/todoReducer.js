/* const initialState = {
    list: []
}

// reducer function
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const {id, data} = action.payload;
            console.log(action.payload)
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case "DELETE_TODO":
            console.log(action.payload)
            const newList = state.list.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                list: newList
            }
        case "CLEAR_TODO":
            return {
                ...state,
                list: initialState.list
            }
        default: return state;
    }
    

}

export default todoReducer; */

// type 2

/* const initialState = {
    list: []
};

const todoReducer = (state = initialState, action) => {
    const actionHandlers = {
        ADD_TODO: () => {
            const { id, data } = action.payload;
            console.log(action.payload);
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            };
        },
        DELETE_TODO: () => {
            console.log(action.payload);
            const newList = state.list.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                list: newList
            };
        },
        CLEAR_TODO: () => ({
            ...state,
            list: initialState.list
        })
    };

    const actionHandler = actionHandlers[action.type];

    return actionHandler ? actionHandler() : state;
};

export default todoReducer; */

//Type 3

const initialState = {
    list: []
};

const todoReducer = (state = initialState, action) => {
    const actionHandlers = new Map([
        [
            "ADD_TODO",
            () => {
                const { id, data } = action.payload;
                console.log(action.payload);
                return {
                    ...state,
                    list: [
                        ...state.list,
                        {
                            id: id,
                            data: data
                        }
                    ]
                };
            }
        ],
        [
            "DELETE_TODO",
            () => {
                console.log(action.payload);
                const newList = state.list.filter(item => item.id !== action.payload.id);
                return {
                    ...state,
                    list: newList
                };
            }
        ],
        [
            "CLEAR_TODO",
            () => ({
                ...state,
                list: initialState.list
            })
        ]
    ]);

    const actionHandler = actionHandlers.get(action.type);

    return actionHandler ? actionHandler() : state;
};

export default todoReducer;

