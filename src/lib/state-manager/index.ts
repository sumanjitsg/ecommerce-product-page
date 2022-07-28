// todo: maybe import State type like redux
export type State = any;
export type Action = { type: string; payload?: any };
type Reducer = (state: State, action: Action) => State;
type Subscriber = () => void;

export default function createStore(reducer: Reducer, initialState?: State) {
  // todo: any need for Proxy? maybe check if state mutated directly?
  const store = { state: initialState };
  // todo: research: using [] instead of Array<> throws never paramater error
  const subscriptions: Array<Subscriber> = [];

  // todo: selector
  function getState(): State {
    // todo: can state be mutated outside directly without calling dispatch? How to avoid that?
    return store.state;
  }

  // todo: return unsubscribe
  function subscribe(subscriber: Subscriber) {
    // todo: use immutable
    subscriptions.push(() => subscriber());
  }

  function dispatch(action: Action) {
    store.state = reducer(store.state, action);
    subscriptions.forEach((subscriber) => subscriber());
  }

  return { getState, subscribe, dispatch };
}
