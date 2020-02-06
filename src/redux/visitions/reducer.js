import {
  FETCH_VISITIONS_REQUEST,
  FETCH_VISITIONS_SUCCESS,
  FETCH_VISITIONS_FAILED
} from './types';

const initialState = {
  loading: false,
  errors: null,
  success: null,
  visitions: [],
  visition: null,
  pager: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_VISITIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
        case FETCH_VISITIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        visitions: payload,
        errors: null
      };
    case FETCH_VISITIONS_FAILED:
      return {
        ...state,
        loading: false,
        visitions: [],
        errors: payload,
        success: null
      };
    default: return state;
  }
}