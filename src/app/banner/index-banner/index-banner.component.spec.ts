import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBannerComponent } from './index-banner.component';

describe('IndexBannerComponent', () => {
  let component: IndexBannerComponent;
  let fixture: ComponentFixture<IndexBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
