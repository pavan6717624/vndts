import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  openPage(id:number)
  {
    if(id==1)
    this.route.navigate(['about']);
    else if(id==2)
    this.route.navigate(['manpowersupply']);
  }

}
