export default function usersReduser(state = {}, action) {
  switch (action.type) {
    case 'GETUSERS': {
      const {data, page} = action.payload;
      return {
        ...state,
        data: page === 1 ? data : [...state.data, ...data],
        page: page,
        refresh: false,
        loading: false,
      };
    }
    case 'START_LOADING': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'START_REFRESH': {
      return {
        ...state,
        refresh: true,
      };
    }
    case 'RESPONSE_ERROR': {
      return {
        ...state,
        refresh: false,
        loading: false,
      };
    }

    case 'SHOW_DATA': {
      const {filter} = action.payload;
      return {...state, filterShow: filter};
    }

    default:
      return state;
  }
}
