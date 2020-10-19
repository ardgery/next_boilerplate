export const generalActions = (props) => {
  return {
    increment:  () => {
      props.dispatch({ type: "INCREMENT" });
    },
    decrement: () => {
      props.dispatch({ type: "DECREMENT" });
    },
    reset: () => {
      props.dispatch({ type: "RESET" });
    },
    setValue: (data) => {
      // props.dispatch({ type: "SET_VALUE", data });
      externSetValue(props,data);
    },
    getInitialData: (data) => {
      externGetInitialData(props,data)
    }, 
    addData: (data) => {
      externAddData(props,data)
    },  
  }
}

function externSetValue(props,data) {
  props.dispatch({ type: "SET_VALUE", data});
}

function externGetInitialData(props,data) {
  props.dispatch({ type: "GET_INITIAL_DATA", data});
}

function externAddData(props,data) {
  props.dispatch({ type: "ADD_DATA", data});
}
