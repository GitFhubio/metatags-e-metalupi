import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UformComponent } from './uform.component';

describe('UformComponent', () => {
  let component: UformComponent;
  let fixture: ComponentFixture<UformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
