// store.js
import { createStore } from "redux";

const initialState = {
  text: "",
  image: [],
  imageWidth: "",
  imageHeight: "",
  align: "left",
};

// Action Creators
export const setText = (text) => ({
  type: "SET_TEXT",
  payload: text,
});

export const setImages = (images) => ({
  type: "SET_IMAGES",
  payload: images,
});
export const setImageWidth = (width) => ({
  type: "SET_IMAGE_WIDTH",
  payload: width,
});

export const setImageHeight = (height) => ({
  type: "SET_IMAGE_HEIGHT",
  payload: height,
});

export const setImageAlign = (align) => ({
  type: "SET_IMAGE_ALIGN",
  payload: align,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return { ...state, text: action.payload };
    case "SET_IMAGE":
      return { ...state, image: action.payload };
    case "SET_IMAGE_WIDTH":
      return { ...state, imageWidth: action.payload };
    case "SET_IMAGE_HEIGHT":
      return { ...state, imageHeight: action.payload };
    case "SET_IMAGE_ALIGN":
      return { ...state, align: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
