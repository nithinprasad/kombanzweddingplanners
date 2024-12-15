import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-images',
  templateUrl: './project-images.component.html',
  styleUrls: ['./project-images.component.css']
})
export class ProjectImagesComponent implements OnInit {

  @Input() image!: string;
  @Input() title!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
