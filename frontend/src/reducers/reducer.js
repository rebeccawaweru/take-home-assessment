import { useReducer } from "react";
import { useBooks } from "../api";

const initialState = {
  focus: false,
  titles: [],
  readview: false,
  reading: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FOCUS':
      return {
        ...state, focus: true
      };
    case 'BLUR':
      return {
        ...state, focus: false
      };
    case 'READ':
      return {
        ...state, readview: true,
        reading: action.data.books.filter(item => state.titles.includes(item.title))
      };
    case 'HOME':
      return {
        ...state, readview: false
      };
    case 'TITLES':
      return {
        ...state, titles: [...state.titles, action.payload],
        focus: false
      };
    case 'REMOVE':
      return {
        ...state,
        titles: state.titles.filter(title => title !== action.payload),
        reading: state.reading.filter(item => item.title !== action.payload)
      };
    default:
      return state;
  }
};

export const useCustomState = () => {
  const { data, loading, error } = useBooks();
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch, data, loading, error };
};
