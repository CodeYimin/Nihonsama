export type EventWithTarget<T extends EventTarget, E extends Event = Event> = E & {
  currentTarget: T;
};

export type EventHandler<T extends EventTarget, E extends Event = Event> = (event: EventWithTarget<T, E>) => any;