import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-imagerotate',
  templateUrl: './imagerotate.component.html',
  styleUrls: ['./imagerotate.component.css']
})
export class ImagerotateComponent implements OnInit {

  constructor(private deviceService: DeviceDetectorService) { }
 
  isMobile=false;
  
  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    setInterval(() => this.rotateImages(),4000);
  }

  showImage=0;
  rotateImages()
{
  
  this.showImage=(this.showImage+1)%this.images.length;

}

changeImage(change: number)
{
  if(change == -1)
  {
    if(this.showImage>0)
  this.showImage--;
  else
  this.showImage=0;
  }
  else if(change==1)
  {
    if(this.showImage >= this.images.length-1)
    this.showImage = this.images.length-1;
    else
    this.showImage++;


  }

}

  images: any[]=['assets/images/1.jpg','assets/images/2.jpg','assets/images/3.jpg','assets/images/4.jpg','assets/images/5.jpg'];

    responsiveOptions:any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

}
