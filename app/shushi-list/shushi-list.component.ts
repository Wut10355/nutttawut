
import { Component, ViewChild } from '@angular/core';
import { Sushi, SushiService } from '../sushi.service';

@Component({
  selector: 'app-shushi-list',
  templateUrl: './shushi-list.component.html',
  styleUrls: ['./shushi-list.component.scss']
})
export class ShushiListComponent {

  sushiList: Sushi[];
  sushi={
    id:0,
    sushiName:"",
    detail:"",
    price:1
      }

  imageUrl='';
  isDropZoneActive = false;
  imageSource = '';
  textVisible = true;
  progressVisible = false;
  progressValue = 0;

  constructor(service:SushiService,private service1:SushiService) {
    this.onDropZoneEnter = this.onDropZoneEnter.bind(this);
    this.onDropZoneLeave = this.onDropZoneLeave.bind(this);
    this.onUploaded = this.onUploaded.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onUploadStarted = this.onUploadStarted.bind(this);
    this.sushiList=service.getSushi();

  }

  onDropZoneEnter(e:any) {
    if (e.dropZoneElement.id === 'dropzone-external') { this.isDropZoneActive = true; }
  }

  onDropZoneLeave(e:any) {
    if (e.dropZoneElement.id === 'dropzone-external') { this.isDropZoneActive = false; }
  }

  onUploaded(e:any) {
    const file = e.file;
    const fileReader = new FileReader();
    this.imageSource = URL.createObjectURL(file);
    fileReader.readAsDataURL(file);
    this.textVisible = false;
    this.progressVisible = false;
    this.progressValue = 0;
    this.imageUrl = this.imageSource;


  }

  onProgress(event:any) {
    this.progressValue = event.bytesLoaded / event.bytesTotal * 100;
  }

  onUploadStarted() {
    this.imageSource = '';
    this.progressVisible = true;
  }
  onImageSelected(event: any) {
    const fileInput = event.target;
  if (fileInput.files && fileInput.files.length > 0) {
    const selectedImage = fileInput.files[0];
    this.onUploaded({ file: selectedImage });
  }
  }

  sumit={
    text: 'SUBMIT',
    useSubmitBehavior: true,
    width:'100%',
    type:"normal",
    stylingMode:"outlined",
    onClick:()=>{
      if(this.sushi==null){
        alert("กรุณากรอก Sushi Name");
      return;
      }
      this.sushiList.push({
        id: this.sushiList.length + 1,
        sushiName:this.sushi.sushiName,
        detail:this.sushi.detail,
        price:this.sushi.price
      })
      this.sushiList = this.sushiList.filter((sushi, index) => {
        // Return the sushi object if it is the first instance of that sushi object in the array.
        return this.sushiList.indexOf(sushi) === index;
      });
      // this.sushiList.forEach((sushi) => {
      //   this.service1.addSushi(sushi);
      // });

      // this.service1.addSushi(this.sushi);
      // this.sushiList.forEach((sushi) => {
      //   this.service1.addSushi(sushi);
      // });
      console.log(this.sushi);
    }
  }
  @ViewChild('multiview', { static: false }) multiview: any;

  add(sushis:any){
    this.multiview.instance.option('selectedIndex', 1);
    console.log(sushis);
    this.sushi=sushis.data
  }

}
