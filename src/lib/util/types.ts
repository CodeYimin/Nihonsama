export type WithTarget<Event, Target extends EventTarget> = Event & { currentTarget: Target };