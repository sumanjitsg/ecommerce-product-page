import type { IObserver } from "./observer";

interface IPublisher {
  subscribe: (observer: IObserver) => void;
  unsubscribe: (observer: IObserver) => void;
  notify: () => void;
}

class Publisher implements IPublisher {
  #observers: any[];

  subscribe(observer: IObserver) {}

  unsubscribe(observer: IObserver) {}

  notify() {}
}

export type { IPublisher };
