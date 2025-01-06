import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-google-drive-gallery',
  templateUrl: './google-drive-gallery.component.html',
  styleUrls: ['./google-drive-gallery.component.css']
})
export class GoogleDriveGalleryComponent implements OnInit {

  images: { url: string; name: string }[] = [];
  folderId: string = '1EYI9HainXd02vSfxiuMmhhzHmjJygc_c'; // Replace with your Google Drive folder ID
  apiKey: string = 'AIzaSyAn13cgWr4uTW-2UEhF5Pt3a96WjTVQeqA';     // Replace with your Google API key

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchImages();
  }

  fetchImages(): void {
    const url = `https://www.googleapis.com/drive/v3/files?q='${this.folderId}'+in+parents&key=${this.apiKey}&fields=files(id,name,mimeType)`;

    this.http.get<any>(url).subscribe(
      (response) => {
        this.images = response.files
          .filter((file: any) => file.mimeType.startsWith('image/'))
          .map((file: any) => ({
            url: `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media&key=${this.apiKey}`,
            name: file.name
          }));
      },
      (error) => {
        console.error('Error fetching images:', error);
      }
    );
  }

}
