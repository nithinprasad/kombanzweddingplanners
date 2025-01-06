import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroImageService } from 'src/app/service/hero-image.service';

@Component({
  selector: 'app-social-widget',
  templateUrl: './social-widget.component.html',
  styleUrls: ['./social-widget.component.css']
})
export class SocialWidgetComponent implements OnInit {
  posts: Observable<any[]>;


  constructor(private imageService: HeroImageService) {
    this.posts = this.imageService.getAllInstaPosts();
   }
  ngOnInit(): void {
    
  }
   

}
