import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './video';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  url="http://localhost:3000/";
  

  constructor(private http: HttpClient) { }


  createVideoPost(video: Video): Observable<Video>
  {
    console.log(video)
    return this.http.post<Video>(this.url+'api/video/videoPost', video)
  }

  updateVideoPost(video: Video, id): Observable<Video>
  {
    return this.http.post<Video>(this.url+`api/video/videoUpdate/${id}`, video)
  }

  delete(id)
  {
    return this.http.post<Video>(this.url+ `api/video/delete/${id}`, Video)
  }


  getVideo(video): Observable<Video>
  {
    let Videos={}

    Videos["uuid"] = video;

    console.log(Videos)

    return this.http.post<Video>(this.url+'api/video/videoGet', Videos)
  }

  getParticularVideo(id)
  {
    return this.http.post<Video>(this.url+`api/video/videoGet/${id}`, Video)
  }

}
