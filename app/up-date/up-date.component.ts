import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SushiService } from '../sushi.service';

@Component({
  selector: 'app-up-date',
  templateUrl: './up-date.component.html',
  styleUrls: ['./up-date.component.scss']
})
export class UpDateComponent {
  @Input() sushiUpdate:any
  @Output() back= new EventEmitter<string>();
  constructor(private service: SushiService){
    this.service.getSushinew(this.sushiUpdate)
  }
  backHome(){
    this.back.emit()
  }
  upDate={
    text: 'Update',
    useSubmitBehavior: true,
    width:'100%',
    type:"success",
    onClick:()=>{
    this.service.upDate(this.sushiUpdate);
    this.back.emit()
    }
    }
}
