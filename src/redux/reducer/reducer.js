let initialState = {
  contentList: [],
};
function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTENT":
      return {
        ...state,
        contentList: [
          ...state.contentList,
          {
            img: payload.img,
            text: payload.text,
          },
        ],
      };
    default:
      return { ...state };
  }
}

export default reducer;
