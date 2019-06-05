import { IModel } from "./model";

/**
 * State
 * Holds the state of the defined publicKey
 */
export class State implements IModel  {
  public publicKey: string;
  public amount: number;
  public stake: number;

  constructor(publicKey: string, amount: number, stake: number) {
    this.publicKey = publicKey;
    this.amount = amount;
    this.stake = stake;
  }
}
