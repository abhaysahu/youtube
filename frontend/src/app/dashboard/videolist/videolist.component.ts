import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/video.service';
import { UserService } from 'src/app/user.service';
import { Video } from 'src/app/video';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})
export class VideolistComponent implements OnInit {

  allvideo: Video
  uuid: any;
  user: any;
  name: string;
  thumbnail: any;

  constructor(private videoService: VideoService, private userService: UserService, private embedService: EmbedVideoService) {

    this.uuid =  localStorage.getItem("User")
    
    this.videoService.getVideo(this.uuid).subscribe((data)=>{
      this.allvideo = data;
      
      // this.embedService.embed_image(this.allvideo[3].video_url, 
      //   { image: 'mqdefault' }
      //   ).then(res => {
      //     this.thumbnail = res.html;

      //     console.log(this.thumbnail)
      // });
    })

    this.userService.getuser(this.uuid).subscribe((data) =>{
      this.user = data[0];

      this.name = this.user.name;
      console.log(this.name);


    })

  }

  ngOnInit() {
  }
 
}
