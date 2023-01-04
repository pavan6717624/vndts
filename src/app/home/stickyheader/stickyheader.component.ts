import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-stickyheader',
  templateUrl: './stickyheader.component.html',
  styleUrls: ['./stickyheader.component.css']
})
export class StickyheaderComponent implements OnInit {


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
  }

}
