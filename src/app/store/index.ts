import createStore from "lib/state-manager";
import type { State, Action } from "lib/state-manager";

export const store = createStore(reducer);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "counter/incrementBy": {
      // todo: validate if count there in payload
      // todo: increment counter value
      const value = action.payload?.value;
      return { ...state, counter: value };
    }

    default:
      return state;
  }
}

export function incrementCounterBy(value: number) {
  return { type: "counter/incrementBy", payload: { value: value } };
}
