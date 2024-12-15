import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsOfferedComponent } from './projects-offered.component';

describe('ProjectsOfferedComponent', () => {
  let component: ProjectsOfferedComponent;
  let fixture: ComponentFixture<ProjectsOfferedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsOfferedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
