import { bind } from '../../decorators/bind';
import { makeAutoObservable } from 'mobx';

class InputState {
  public query = '';

  constructor() {
    makeAutoObservable(this);
  }

  @bind
  public setQuery(query: string) {
    this.query = query;
  }
}

export const inputState = new InputState();
