export function randElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function randElements<T>(array: T[], amount: number): T[] {
  const randElements: T[] = [];

  for (let i = 0; i < amount; i++) {
    randElements.push(randElement(array));
  }

  return randElements;
}
