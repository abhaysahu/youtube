import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideolistComponent } from './dashboard/videolist/videolist.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostvideoComponent } from './dashboard/postvideo/postvideo.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AddvideoComponent } from './dashboard/addvideo/addvideo.component';
import { VideoService } from './video.service';
import { EmbedVideo } from 'ngx-embed-video';
import { VideoCenterComponent } from './video-center/video-center.component';
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    VideolistComponent,
    NavBarComponent,
    PostvideoComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    AddvideoComponent,
    VideoCenterComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    EmbedVideo.forRoot()
  ],
  providers: [UserService, VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
