import { IModel } from "./model";

/**
 * State
 */
export class State implements IModel  {
  public publicKey: string;
  public coin: number;
  public stake: number;

  constructor(publicKey: string, coin: number, stake: number) {
    this.publicKey = publicKey;
    this.coin = coin;
    this.stake = stake;
  }
}
