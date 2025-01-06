import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { HeroImageService } from 'src/app/service/hero-image.service';
=======
>>>>>>> 89d8ded4a1e11302b504c450a436c62f47871c1e

@Component({
  selector: 'app-social-widget',
  templateUrl: './social-widget.component.html',
  styleUrls: ['./social-widget.component.css']
})
export class SocialWidgetComponent implements OnInit {
<<<<<<< HEAD
  posts: Observable<any[]>;


  constructor(private imageService: HeroImageService) {
    this.posts = this.imageService.getAllInstaPosts();
   }
  ngOnInit(): void {
    
  }
   
=======

  constructor() { }

  ngOnInit(): void {
  }
>>>>>>> 89d8ded4a1e11302b504c450a436c62f47871c1e

}
