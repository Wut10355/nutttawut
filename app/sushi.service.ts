import { Injectable } from "@angular/core";

// Define the Sushi interface
export interface Sushi {
  id: number;
  sushiName: string;
  detail: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class SushiService {
  private sushiList: Sushi[] = [{
    id: 1,
    sushiName: "salmon",
    detail: "salmon from Korea",
    price: 20
  }];

  constructor() { }
  addSushi(sushi: Sushi) {
    this.sushiList.push(sushi);
  }

  getSushi(): Sushi[] {
    return this.sushiList;
  }
  upDate(updatedata:any){
    this.sushiList.find((sushiOld)=>{
      if(updatedata.id==sushiOld.id){
        sushiOld=updatedata;
      }
    })
  }
  getSushinew(id:any){
    return this.sushiList.find((sushi)=>sushi.id == id)
  }
}
