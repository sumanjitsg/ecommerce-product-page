import createStore from "lib/state-manager";

const initialState = { counter: 0 };
export type State = typeof initialState;

export const store = createStore(reducer, initialState);

type Action = {
  type: string;
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
