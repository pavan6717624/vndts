import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-andts',
  templateUrl: './andts.component.html',
  styleUrls: ['./andts.component.css']
})
export class AndtsComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

}
