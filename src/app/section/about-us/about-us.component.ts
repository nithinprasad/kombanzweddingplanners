import { Component, OnInit } from '@angular/core';
import { HeroImageService } from 'src/app/service/hero-image.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private imageService : HeroImageService ) { }

  images: string[] = [];

  ngOnInit(): void {
<<<<<<< HEAD
     this.imageService.getAboutImages().then(
      (response) => this.images = response
    );
=======
    this.images = this.imageService.getAboutImages()
>>>>>>> 89d8ded4a1e11302b504c450a436c62f47871c1e
  }

}
