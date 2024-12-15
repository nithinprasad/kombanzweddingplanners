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
     this.images = this.imageService.getHeaderImages();
  }

}
