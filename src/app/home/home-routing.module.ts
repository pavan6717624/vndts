import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AndtsComponent } from './andts/andts.component';
import { BorescopeinspectionsComponent } from './borescopeinspections/borescopeinspections.component';
import { CndtsComponent } from './cndts/cndts.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { DyepenetrantinspectionComponent } from './dyepenetrantinspection/dyepenetrantinspection.component';

import { HomeComponent } from './home/home.component';
import { IconbarComponent } from './iconbar/iconbar.component';
import { ImagerotateComponent } from './imagerotate/imagerotate.component';
import { IndustrialradiographyComponent } from './industrialradiography/industrialradiography.component';
import { IndustriesComponent } from './industries/industries.component';
import { MagneticparticleinspectionComponent } from './magneticparticleinspection/magneticparticleinspection.component';
import { MansupplyComponent } from './mansupply/mansupply.component';
import { ManufacturingservicesComponent } from './manufacturingservices/manufacturingservices.component';
import { MfltankfloorscanningComponent } from './mfltankfloorscanning/mfltankfloorscanning.component';
import { PhasedarrayComponent } from './phasedarray/phasedarray.component';
import { TimeofflightdiffractionComponent } from './timeofflightdiffraction/timeofflightdiffraction.component';
import { TrainingservicesComponent } from './trainingservices/trainingservices.component';
import { TubeinspectionservicesComponent } from './tubeinspectionservices/tubeinspectionservices.component';
import { UltrasonicinspectionComponent } from './ultrasonicinspection/ultrasonicinspection.component';


const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'imagedisplay', component: ImagerotateComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'manpowersupply', component: MansupplyComponent},
  {path: 'manufacturingservices', component: ManufacturingservicesComponent},
  {path: 'trainingservices', component: TrainingservicesComponent},
  {path: 'industries', component: IndustriesComponent},
  {path: 'andts', component: AndtsComponent},
  {path: 'cndts', component: CndtsComponent},
  {path: 'dyepenetrantinspection', component: DyepenetrantinspectionComponent},
  {path: 'magneticparticleinspection', component: MagneticparticleinspectionComponent},
  {path: 'industrialradiography', component: IndustrialradiographyComponent},
  {path: 'ultrasonicinspection', component: UltrasonicinspectionComponent},
  
  {path: 'tubeinspectionservices', component: TubeinspectionservicesComponent},

  {path: 'mfltankfloorscanning', component: MfltankfloorscanningComponent},
  {path: 'phasedarray', component: PhasedarrayComponent},

  {path: 'timeofflightdiffraction', component: TimeofflightdiffractionComponent},

  {path: 'borescopeinspections', component: BorescopeinspectionsComponent},





  {path: 'iconbar', component: IconbarComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
