import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyappListComponent } from './myapp-list.component';

describe('MyappListComponent', () => {
  let component: MyappListComponent;
  let fixture: ComponentFixture<MyappListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyappListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyappListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
