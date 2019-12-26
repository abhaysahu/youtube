import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/video.service';
import { Video } from 'src/app/video';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postvideo',
  templateUrl: './postvideo.component.html',
  styleUrls: ['./postvideo.component.css']
})
export class PostvideoComponent implements OnInit {


  allvideo: any;
  video: Video;
  uuid: any;


  constructor(private videoService: VideoService, private router: Router) {

    this.uuid =  localStorage.getItem("User")
    console.log(this.uuid)


   }

   onDelete(id)
    {
      if(!confirm('Are you sure yow want to delete this video?')) return;

      console.log("yes")
      this.videoService.delete(id).subscribe((data) =>{
        console.log(data)
        this.router.navigate(['dashboard']);

      })
    }

  ngOnInit() {

    this.videoService.getVideo(this.uuid).subscribe((data) => {
      this.allvideo= data
      console.log(this.allvideo)
    })

  }

}
