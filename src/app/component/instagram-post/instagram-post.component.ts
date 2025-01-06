import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { InstagramDOMService } from 'src/app/instragram/instagram-domservice.service';

@Component({
  selector: 'app-instagram-post',
  templateUrl: './instagram-post.component.html',
  styleUrls: ['./instagram-post.component.css']
})
export class InstagramPostComponent implements OnInit {

  iframeLoaded: { [key: string]: boolean } = {};

  @Input() postid!: string;
  constructor(private sanitizer: DomSanitizer, private instagram: InstagramDOMService) {
   }

  ngOnInit(): void {
    this.instagram.processEmbeddedInstagramPosts();
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onIframeLoad(post: String): void {
  this.iframeLoaded[post.toString()] = true;
  console.log(`Iframe for post ${post} loaded`);
}

}
