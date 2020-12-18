import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaicelEventComponent } from './spaicel-event.component';

describe('SpaicelEventComponent', () => {
  let component: SpaicelEventComponent;
  let fixture: ComponentFixture<SpaicelEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaicelEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaicelEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
