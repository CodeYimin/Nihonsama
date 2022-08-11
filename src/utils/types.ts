export type EventWithTarget<T extends EventTarget, E extends Event = Event> = E & {
  currentTarget: T;
};
