import { Pipe, PipeTransform } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  thumbnail: any;
  constructor(private embedService: EmbedVideoService) {}

  transform(url: any) {
    console.log(url)

    this.embedService.embed_image(url, 
      { image: 'mqdefault' }
      ).then(res => {
        this.thumbnail = res.link
        console.log(this.thumbnail)
        
        return this.thumbnail
        
    
  })

}
}