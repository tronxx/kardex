import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenesFormComponent } from './almacenes-form.component';

describe('AlmacenesFormComponent', () => {
  let component: AlmacenesFormComponent;
  let fixture: ComponentFixture<AlmacenesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmacenesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmacenesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
