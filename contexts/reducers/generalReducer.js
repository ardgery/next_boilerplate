export const generalStates = {
  count: 0,
  datas: [],
  newData: {}
}

export const generalReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    case "RESET":
      return {
        ...state,
        count: 0
      };
    case "SET_VALUE":
      return {
        ...state,
        count: action.data
      };
    case "GET_INITIAL_DATA":
      return {
        ...state,
        datas: action.data
      };
    case "ADD_DATA":
      return {
        ...state,
        datas:{
          ...state.datas,
          driverData:{
            ...state.driverData,
            newDatas: action.data
          }
        }
      };
    default:
      throw new Error("Unexpected action");
  }
};
