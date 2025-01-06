import { Component, OnInit } from '@angular/core';
import { HeroImageService } from 'src/app/service/hero-image.service';

@Component({
  selector: 'app-projects-offered',
  templateUrl: './projects-offered.component.html',
  styleUrls: ['./projects-offered.component.css']
})
export class ProjectsOfferedComponent implements OnInit {

  images: { [key: string]: string } = {};

  constructor(private imageService: HeroImageService) { }

  ngOnInit(): void {
    this.imageService.getProjectImages().then(
      (response) => this.images = response
    );
  }

}
