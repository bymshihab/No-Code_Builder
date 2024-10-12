// selectors.js
import { createSelector } from "reselect";

const getText = (state) => state.text;
const getImage = (state) => state.image;
const getImageWidth = (state) => state.imageWidth;
const getImageHeight = (state) => state.imageHeight;
const getAlign = (state) => state.align;

// Create memoized selectors
export const selectText = createSelector([getText], (text) => text);

export const selectImage = createSelector([getImage], (image) => image);

export const selectImageWidth = createSelector(
  [getImageWidth],
  (imageWidth) => imageWidth
);

export const selectImageHeight = createSelector(
  [getImageHeight],
  (imageHeight) => imageHeight
);

export const selectAlign = createSelector([getAlign], (align) => align);
