import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private deviceService: DeviceDetectorService) { }
  menuItems=[{label:'Home',icon: 'pi pi-home'},{label:'About us',icon: 'pi pi-book'},{label:'Services',icon: 'pi pi-flag',

  items: [{
    label: 'ANDT Services', 
    icon: 'pi pi-slack',
  },
  {
    label: 'CNDT Services', 
    icon: 'pi pi-hourglass',
  },
  {
    label: 'Manufacturing Services', 
    icon: 'pi pi-shield',
  },
  {
    label: 'Training Services', 
    icon: 'pi pi-key',
  },
  {
    label: 'Manpower Supply', 
    icon: 'pi pi-users',
  },
  {
    label: 'Industries', 
    icon: 'pi pi-bolt',
  }],

}, {label:'Contact Us',icon: 'pi pi-phone'}];
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
