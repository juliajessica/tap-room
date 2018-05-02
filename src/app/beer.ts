export class Beer {
  public emptyKeg: boolean = false;

  constructor(public tapNumber: number, public brandName: string, public name: string, public style: string, public percentage: string, public price: number)
  {}
}
