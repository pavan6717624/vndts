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
import { AndtsComponent } from './andts/andts.component';
import { CndtsComponent } from './cndts/cndts.component';
import { MagneticparticleinspectionComponent } from './magneticparticleinspection/magneticparticleinspection.component';
import { DyepenetrantinspectionComponent } from './dyepenetrantinspection/dyepenetrantinspection.component';
import { IndustrialradiographyComponent } from './industrialradiography/industrialradiography.component';
import { UltrasonicinspectionComponent } from './ultrasonicinspection/ultrasonicinspection.component';
import { TubeinspectionservicesComponent } from './tubeinspectionservices/tubeinspectionservices.component';
import { MfltankfloorscanningComponent } from './mfltankfloorscanning/mfltankfloorscanning.component';
import { PhasedarrayComponent } from './phasedarray/phasedarray.component';
import { TimeofflightdiffractionComponent } from './timeofflightdiffraction/timeofflightdiffraction.component';
import { BorescopeinspectionsComponent } from './borescopeinspections/borescopeinspections.component';


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
        IndustriesComponent,
        AndtsComponent,
        CndtsComponent,
        MagneticparticleinspectionComponent,
        DyepenetrantinspectionComponent,
        IndustrialradiographyComponent,
        UltrasonicinspectionComponent,
        TubeinspectionservicesComponent,
        MfltankfloorscanningComponent,
        PhasedarrayComponent,
        TimeofflightdiffractionComponent,
        BorescopeinspectionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
