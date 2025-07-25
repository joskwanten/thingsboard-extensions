import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDevice } from './set-device';

describe('SetDevice', () => {
  let component: SetDevice;
  let fixture: ComponentFixture<SetDevice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetDevice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetDevice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
