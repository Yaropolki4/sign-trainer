import { makeAutoObservable } from 'mobx';

class InputState {
  public query = '';

  constructor() {
    makeAutoObservable(this);
  }

  public setQuery(query: string) {
    this.query = query;
  }
}

export const inputState = new InputState();
