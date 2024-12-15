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
     this.images = this.imageService.getServiceImages();
  }

}
