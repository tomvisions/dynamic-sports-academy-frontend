import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { MembershipComponent } from './membership/membership.component';
import { AcademyComponent } from './academy/academy.component';
import { VideosComponent } from './videos/videos.component';
import { EventComponent } from './event/event.component';
import { EventsComponent } from './events/events.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LightgalleryModule} from "lightgallery/angular";
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    AboutComponent,
    MembershipComponent,
    AcademyComponent,
    VideosComponent,
    EventComponent,
    EventsComponent,
    ShopComponent,
    ContactComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LightgalleryModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
