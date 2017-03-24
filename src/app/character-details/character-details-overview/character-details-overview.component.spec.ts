import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailsOverviewComponent } from './character-details-overview.component';

describe('CharacterDetailsOverviewComponent', () => {
  let component: CharacterDetailsOverviewComponent;
  let fixture: ComponentFixture<CharacterDetailsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
