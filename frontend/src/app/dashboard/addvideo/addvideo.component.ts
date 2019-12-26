import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Video } from 'src/app/video';
import { VideoService } from 'src/app/video.service';
import { DomSanitizer } from '@angular/platform-browser';
import { EmbedVideoService } from 'ngx-embed-video';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {

  
  video_name:string;

  thumbnail: any;


  regForm: FormGroup;
  datasaved = false;

  

  massage: string;
  video: any ={}

  safeURL: any;
  id;

  // iframe_html: any;
  // youtubeUrl = "https://www.youtube.com/watch?v=4vgrEByJjck";

  

  constructor(
    private formbuilder: FormBuilder, 
    private videoService: VideoService, 
    private embedService: EmbedVideoService,
    private router: Router,
    private route: ActivatedRoute) {
    // this.iframe_html = this.embedService.embed(this.youtubeUrl);

    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.videoService.getParticularVideo(this.id).subscribe((data)=>{
      this.video = data[0]
      console.log(this.video)
    })

   }

  ngOnInit() {
    this.setFormState();
  }

  setFormState(): void {
    this.regForm = this.formbuilder.group({

      video_name: ['', [Validators.required]],
      video_desc: ['', [Validators.required]],
      //image_url: ['', [Validators.required]],
      video_url: ['', [Validators.required]]
    })
  }

  onSubmit() {
    
    let videoDetails = this.regForm.value;
    videoDetails.uuid = localStorage.getItem('User');
    this.createPost(videoDetails);

  }

  createPost(video: Video) {
    console.log(video);
    if(this.id)
    {
      this.videoService.updateVideoPost(video,this.id).subscribe((data)=>{
        console.log(data)
        if(data.messages == false)
        {
          this.datasaved = true;
          this.massage = "something is worng";
        }
        else
        {
          this.datasaved = true;
          this.massage = "video is update ";
          this.regForm.reset();
          //this.router.navigate(['videoList']);
        }
        
      })
  
    }
    else
    {
      

      let image = video.video_url
      
      this.embedService.embed_image(image, 
        { image: 'mqdefault' }
        ).then(res => {
          this.thumbnail = res.link;

          console.log(this.thumbnail)

          video.image_url = this.thumbnail;
          console.log(video);
      

      
      
      this.videoService.createVideoPost(video).subscribe((data)=>{
        //console.log(data)
        if(data.messages == false)
        {
          this.datasaved = true;
          this.massage = "something is worng";
        }
        else
        {
          this.datasaved = true;
          this.massage = "video is add";
          this.regForm.reset();
          //this.router.navigate(['videoList']);
        }
        
      })
    });
  
    }
    
  }

}
