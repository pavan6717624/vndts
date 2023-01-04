import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { StickyheaderComponent } from './stickyheader/stickyheader.component';
import { ImagerotateComponent } from './imagerotate/imagerotate.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { IconbarComponent } from './iconbar/iconbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    HeaderComponent,
    StickyheaderComponent,
    ImagerotateComponent,
    ContactComponent,
    FooterComponent,
    IconbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
