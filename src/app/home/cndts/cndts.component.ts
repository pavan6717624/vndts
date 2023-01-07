import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cndts',
  templateUrl: './cndts.component.html',
  styleUrls: ['./cndts.component.css']
})
export class CndtsComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

}
