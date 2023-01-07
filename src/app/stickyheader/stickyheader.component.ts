import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-stickyheader',
  templateUrl: './stickyheader.component.html',
  styleUrls: ['./stickyheader.component.css']
})
export class StickyheaderComponent implements OnInit {

  constructor(private deviceService: DeviceDetectorService, private route: Router) { }
  menuItems=[{label:'Home',icon: 'pi pi-home',  routerLink: 'home'},{label:'About us',icon: 'pi pi-book',  routerLink: 'about'},{label:'Services',icon: 'pi pi-flag',

  items: [{
    label: 'ANDT Services', 
    icon: 'pi pi-slack',  routerLink: 'andts'
   
  },
  {
    label: 'CNDT Services', 
    icon: 'pi pi-hourglass',  routerLink: 'cndts'
  },
  {
    label: 'Manufacturing Services', 
    icon: 'pi pi-shield',  routerLink: 'manufacturingservices'
  },
  {
    label: 'Training Services', 
    icon: 'pi pi-key',  routerLink: 'trainingservices'
  },
  {
    label: 'Manpower Supply', 
    icon: 'pi pi-users',  routerLink: 'manpowersupply'
    
  },
  {
    label: 'Industries', 
    icon: 'pi pi-bolt',  routerLink: 'industries'
  }],

}, {label:'Contact Us',icon: 'pi pi-phone',  routerLink: 'contact'}];
isMobile=false;
  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
  }

  toHome()
  {
    this.route.navigate(['home']);
  }
}
