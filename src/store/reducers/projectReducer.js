const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'she was taken by bowser'},
        {id: '2', title: 'help me find daisy', content: 'she was taken by king boo'},
        {id: '3', title: 'help me find luigi', content: 'he probably got lost somewhere'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer