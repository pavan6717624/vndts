import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';

import { HomeComponent } from './home/home.component';
import { IconbarComponent } from './iconbar/iconbar.component';
import { ImagerotateComponent } from './imagerotate/imagerotate.component';


const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'imagedisplay', component: ImagerotateComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  

  {path: 'iconbar', component: IconbarComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
