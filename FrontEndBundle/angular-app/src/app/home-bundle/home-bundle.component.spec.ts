import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBundleComponent } from './home-bundle.component';

describe('HomeBundleComponent', () => {
  let component: HomeBundleComponent;
  let fixture: ComponentFixture<HomeBundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
