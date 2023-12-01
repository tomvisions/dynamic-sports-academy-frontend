import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { VideosComponent } from './videos/videos.component';
import { AcademyComponent } from './academy/academy.component';
import { EventsComponent } from './events/events.component';
import { MembershipComponent } from './membership/membership.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'team',
    component: TeamComponent,
  },
  {
    path: 'videos',
    component: VideosComponent,
  },
  {
    path: 'membership',
    component: MembershipComponent,
  },
  {
    path: 'join',
    component: AcademyComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
