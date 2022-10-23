import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblbannerComponent } from './tblbanner.component';

describe('TblbannerComponent', () => {
  let component: TblbannerComponent;
  let fixture: ComponentFixture<TblbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblbannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TblbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
