import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideolistComponent } from './dashboard/videolist/videolist.component';
import { PostvideoComponent } from './dashboard/postvideo/postvideo.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { AddvideoComponent } from './dashboard/addvideo/addvideo.component';
import { VideoCenterComponent } from './video-center/video-center.component';


const routes: Routes = [

  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'videos', component: VideolistComponent },
  { path: 'videoList', component: PostvideoComponent },
  { path: 'Registration', component: RegistrationComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'add/video', component: AddvideoComponent },
  { path: 'admin/videoPost/edit/:id', component: AddvideoComponent },
  { path: 'videoplay/:id', component: VideoCenterComponent }

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
