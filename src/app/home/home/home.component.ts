import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private deviceService: DeviceDetectorService) { }
  menuItems=[{label:'Home'},{label:'Contact us'},{label:'Login / Sign Up'}];
  isMobile=false;
  
  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    setInterval(() => this.rotateImages(),4000);
  }

  showImage=0;
  rotateImages()
{
  
  this.showImage=(this.showImage+1)%8;

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
    this.showImage = this.images.length;
    else
    this.showImage++;
  }

}

  images: any[]=['https://www.primefaces.org/primeng/assets/showcase/images/galleria/galleria1.jpg','https://www.primefaces.org/primeng/assets/showcase/images/galleria/galleria2.jpg','https://www.primefaces.org/primeng/assets/showcase/images/galleria/galleria3.jpg','https://www.primefaces.org/primeng/assets/showcase/images/galleria/galleria4.jpg','https://www.primefaces.org/primeng/assets/showcase/images/galleria/galleria5.jpg','https://www.primefaces.org/primeng/assets/showcase/images/galleria/galleria6.jpg','https://www.primefaces.org/primeng/assets/showcase/images/galleria/galleria7.jpg','https://www.primefaces.org/primeng/assets/showcase/images/galleria/galleria8.jpg'];

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
