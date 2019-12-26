import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostvideoComponent } from './postvideo.component';

describe('PostvideoComponent', () => {
  let component: PostvideoComponent;
  let fixture: ComponentFixture<PostvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
