export const set = (value) => ({
  type: "SET_COUNTER",
});

export const setData = (value) => ({
  type: "SET_VALUE",
  value,
});

export const computedAdd = () => (dispatch, getState) => {
  dispatch(set());
};

export const setValue = (val) => (dispatch, getState) => {
  dispatch(setData(val));
};
