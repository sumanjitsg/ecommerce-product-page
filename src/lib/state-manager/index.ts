// todo: maybe import State type like redux
export type State = any;
export type Action = { type: string; payload?: any };
type Reducer = (state: State, action: Action) => State;
type Subscriber = () => void;

export default function createStore(reducer: Reducer, initialState?: State) {
  // todo: any need for Proxy? maybe check if state mutated directly?
  const store = { state: initialState };
  const subscriptions: {
    // todo: research: using [] instead of Array<> throws never paramater error
    [actionType: string]: Array<Subscriber>;
  } = {};

  // todo: selector
  function getState(): State {
    // todo: can state be mutated outside directly without calling dispatch? How to avoid that?
    return store.state;
  }

  // todo: use typescript pick on action type
  // todo: return unsubscribe
  function subscribe(actionType: string, subscriber: Subscriber) {
    subscriptions[actionType] = subscriptions[actionType] ?? [];

    // todo: use immutable
    subscriptions[actionType].push(() => subscriber());
  }

  function dispatch(action: Action) {
    store.state = reducer(store.state, action);
    if (subscriptions[action.type]) {
      subscriptions[action.type].forEach((subscriber) => subscriber());
    }
  }

  return { getState, subscribe, dispatch };
}
