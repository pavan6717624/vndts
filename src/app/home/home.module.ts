import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';


import { ImagerotateComponent } from './imagerotate/imagerotate.component';
import { ContactComponent } from './contact/contact.component';

import { IconbarComponent } from './iconbar/iconbar.component';
import { AboutComponent } from './about/about.component';
import { MansupplyComponent } from './mansupply/mansupply.component';
import { ManufacturingservicesComponent } from './manufacturingservices/manufacturingservices.component';
import { TrainingservicesComponent } from './trainingservices/trainingservices.component';
import { IndustriesComponent } from './industries/industries.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    

    ImagerotateComponent,
    ContactComponent,
   
    IconbarComponent,
        AboutComponent,
        MansupplyComponent,
        ManufacturingservicesComponent,
        TrainingservicesComponent,
        IndustriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
