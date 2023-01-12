import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(public route:Router,private titleService: Title,  
    private metaTagService: Meta) { }

  ngOnInit(): void {

    this.titleService.setTitle("VNDTS - Details");  
    
    this.metaTagService.addTags([  
      { name: 'keywords', content: 'VNDTS, Velocity NDT Solutions, ANDT Services, CNDT Services, Manufacturing Services, Training Services, Man Power Supply, Industries, Tube inspection, Eddy current testing, Iris inspection, Remote field testing, Near field testing, MFL tube testing, MFL tank floor inspection, API Services, Ultrasonic testing, Radiography testing, Mpi testing, Penetration testing, Heat exchanger inspection, Boiler inspection, Internal Rotary Inspection System, Magnetic Flux Leakage Testing, Surface profile with STARS technology, PHASED ARRAY, TIME OF FLIGHT DIFFRACTION, Borescope Inspections, Magnetic Particle Inspection, Wet Fluorescent Magnetic Test, Dye Penetrant Inspection, Industrial Radiography' },  
      { name: 'robots', content: 'index, follow' },  
      { name: 'writer', content: 'VNDTS' },  
      { charset: 'UTF-8' }  
    ]);  
  }
  openPage(id:number)
  {
    if(id==1)
    this.route.navigate(['about']);
    else if(id==2)
    this.route.navigate(['manpowersupply']);
    else if(id==3)
    this.route.navigate(['manufacturingservices']);
    else if(id==4)
    this.route.navigate(['trainingservices']);
    else if(id==5)
    this.route.navigate(['industries']);
    else if(id==6)
    this.route.navigate(['andts']);
    else if(id==7)
    this.route.navigate(['cndts']);
  }

}
