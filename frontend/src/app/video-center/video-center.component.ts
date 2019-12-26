import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { ActivatedRoute } from '@angular/router';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  video: Video
  id: any;
  iframe_html: any;


  constructor(videoService: VideoService, private route: ActivatedRoute,private embedService: EmbedVideoService) { 

    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    videoService.getParticularVideo(this.id).subscribe((data)=>{
      this.video = data[0];
      this.iframe_html = this.embedService.embed(this.video.video_url,{
        query: { portrait: 0, color: '333' },
        attr: { width: 850, height: 600 }
      });
    })
  }

  ngOnInit() {
  }

}
