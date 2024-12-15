import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { MenuComponent } from './section/menu/menu.component';
import { MainHeadingComponent } from './section/main-heading/main-heading.component';
import { AboutUsComponent } from './section/about-us/about-us.component';
import { WhyChooseUsComponent } from './section/why-choose-us/why-choose-us.component';
import { ServiceOfferedComponent } from './section/service-offered/service-offered.component';
import { ProjectsOfferedComponent } from './section/projects-offered/projects-offered.component';
import { ProjectImagesComponent } from './component/project-images/project-images.component';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB99HYz5ZFLhmwqHxiqePROp9pghwct4fs",
  authDomain: "kombanzweddingplanners.firebaseapp.com",
  projectId: "kombanzweddingplanners",
  storageBucket: "kombanzweddingplanners.firebasestorage.app",
  messagingSenderId: "308659086928",
  appId: "1:308659086928:web:4fb924c00cc235930ad355",
  measurementId: "G-ZSBZDDLKW2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainHeadingComponent,
    AboutUsComponent,
    WhyChooseUsComponent,
    ServiceOfferedComponent,
    ProjectsOfferedComponent,
    ProjectImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
