export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    token:"BQAQhwNjMNBiNqSeauCXPtKCIs15eWlA9mrlb0Yp9xb41Zisy9jbhenCB7he40hYvmRkEycAjkQftx85InmN10_pHlnyOPePUu-TFRXwRAQNcs65SojYVi9tODN6lQciG5iEn7bRGe--vuo5sIqN7NQxi7Ej-fIzPVwWnClZ65IsmUMG"
}

const reducer=(state,action)=>{
console.log(action);
    switch(action.type)
    {
        case 'SET_USER':
            return{
                ...state,
                user:action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            }

        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists:action.playlists
            }
        default:
            return state;
    }
}
export default reducer;