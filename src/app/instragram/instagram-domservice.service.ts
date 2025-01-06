import { Injectable } from '@angular/core';

declare global {
  interface Window {
    instgrm: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

@Injectable({
   providedIn: 'root'
})
export class InstagramDOMService {
  public processEmbeddedInstagramPosts(): void {
    if (window.instgrm) {
      window.instgrm.Embeds.process(); // TypeScript now recognizes the type
    }
  }
}
