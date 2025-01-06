import { Component, OnInit } from '@angular/core';
import { HeroImageService } from 'src/app/service/hero-image.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private imageService : HeroImageService ) { }

  images: string[] = [];

  ngOnInit(): void {
<<<<<<< HEAD
    this.imageService.getContactImages().then(
       (response => this.images = response)
     );
=======
    this.images = this.imageService.getContactImages()
>>>>>>> 89d8ded4a1e11302b504c450a436c62f47871c1e
  }

}
