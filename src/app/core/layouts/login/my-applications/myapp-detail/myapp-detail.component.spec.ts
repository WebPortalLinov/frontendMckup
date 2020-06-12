import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyappDetailComponent } from './myapp-detail.component';

describe('MyappDetailComponent', () => {
  let component: MyappDetailComponent;
  let fixture: ComponentFixture<MyappDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyappDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyappDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
