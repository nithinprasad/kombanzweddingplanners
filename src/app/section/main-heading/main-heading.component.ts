import { Component, OnInit } from '@angular/core';
import { HeroImageService } from 'src/app/service/hero-image.service';

@Component({
  selector: 'app-main-heading',
  templateUrl: './main-heading.component.html',
  styleUrls: ['./main-heading.component.css']
})
export class MainHeadingComponent implements OnInit {

  constructor(private imageService : HeroImageService ) { }

  images: string[] = [];

  ngOnInit(): void {
<<<<<<< HEAD
    this.imageService.getHeaderImages().then(
       (response => this.images = response)
     );
=======
     this.images = this.imageService.getHeaderImages();
>>>>>>> 89d8ded4a1e11302b504c450a436c62f47871c1e
  }

}
