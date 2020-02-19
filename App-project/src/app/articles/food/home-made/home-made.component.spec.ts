import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMadeComponent } from './home-made.component';

describe('HomeMadeComponent', () => {
  let component: HomeMadeComponent;
  let fixture: ComponentFixture<HomeMadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
