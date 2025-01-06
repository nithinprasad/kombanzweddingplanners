import { Component, OnInit } from '@angular/core';
import { HeroImageService } from 'src/app/service/hero-image.service';

@Component({
  selector: 'app-service-offered',
  templateUrl: './service-offered.component.html',
  styleUrls: ['./service-offered.component.css']
})
export class ServiceOfferedComponent implements OnInit {

  constructor(private imageService: HeroImageService) { }

   images: { [key: string]: string } = {};

  ngOnInit(): void {
<<<<<<< HEAD
    this.imageService.getServiceImages().then(
      (response) => this.images = response
    );
=======
     this.images = this.imageService.getServiceImages();
>>>>>>> 89d8ded4a1e11302b504c450a436c62f47871c1e
  }

}
