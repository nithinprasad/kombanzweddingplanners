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
    this.images = this.imageService.getAboutImages()
  }

}
