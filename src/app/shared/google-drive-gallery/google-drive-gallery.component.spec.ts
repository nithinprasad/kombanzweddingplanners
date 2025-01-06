import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleDriveGalleryComponent } from './google-drive-gallery.component';

describe('GoogleDriveGalleryComponent', () => {
  let component: GoogleDriveGalleryComponent;
  let fixture: ComponentFixture<GoogleDriveGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleDriveGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleDriveGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
