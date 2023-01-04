import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StickyheaderComponent } from './stickyheader/stickyheader.component';


import { FormsModule } from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StickyheaderComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MenubarModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
