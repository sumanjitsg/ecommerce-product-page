import createStore from "lib/state-manager";

const initialState = { counter: 0, cartCounter: 0 };
export type State = typeof initialState;

export const store = createStore(reducer, initialState);

type Action = {
  type: string;
  payload?: { value: number };
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "counter/increment": {
      return { ...state, counter: state.counter + 1 };
    }

    case "counter/decrement": {
      // todo: no dec below 0
      if (state.counter === 0) {
        return state;
      } else {
        return { ...state, counter: state.counter - 1 };
      }
    }

    case "counter/reset": {
      return { ...state, counter: 0 };
    }

    case "cartCounter/incrementBy": {
      console.log("cartCounter/incrementBy: ", action, state);
      return {
        ...state,
        cartCounter: state.cartCounter + action.payload?.value,
      };
    }

    case "cartCounter/reset": {
      console.log("cartCounter/reset: ", action, state);
      return {
        ...state,
        cartCounter: 0,
      };
    }

    default:
      return state;
  }
}

export function incrementCounter(): Action {
  return {
    type: "counter/increment",
  };
}

export function decrementCounter(): Action {
  return {
    type: "counter/decrement",
  };
}

export function resetCounter(): Action {
  return {
    type: "counter/reset",
  };
}

export function incrementCartCounterBy(value: number): Action {
  return {
    type: "cartCounter/incrementBy",
    payload: { value },
  };
}

export function resetCartCounter(): Action {
  return {
    type: "cartCounter/reset",
  };
}
