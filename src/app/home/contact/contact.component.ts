import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(  
    private titleService: Title,  
    private metaTagService: Meta  ,
    private deviceService: DeviceDetectorService
  ) { }  
  isMobile=false;
  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    this.titleService.setTitle("VNDTS");  
    
    this.metaTagService.addTags([  
      { name: 'keywords', content: 'VNDTS, Velocity NDT Solutions, ANDT Services, CNDT Services, Manufacturing Services, Training Services, Man Power Supply, Industries, Tube inspection, Eddy current testing, Iris inspection, Remote field testing, Near field testing, MFL tube testing, MFL tank floor inspection, API Services, Ultrasonic testing, Radiography testing, Mpi testing, Penetration testing, Heat exchanger inspection, Boiler inspection, Internal Rotary Inspection System, Magnetic Flux Leakage Testing, Surface profile with STARS technology, PHASED ARRAY, TIME OF FLIGHT DIFFRACTION, Borescope Inspections, Magnetic Particle Inspection, Wet Fluorescent Magnetic Test, Dye Penetrant Inspection, Industrial Radiography' },  
      { name: 'robots', content: 'index, follow' },  
      { name: 'writer', content: 'VNDTS' },  
      { charset: 'UTF-8' }  
    ]);  
  }


}
