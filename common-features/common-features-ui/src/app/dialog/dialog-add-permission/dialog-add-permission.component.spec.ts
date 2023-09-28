import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddPermissionComponent } from './dialog-add-permission.component';

describe('DialogAddPermissionComponent', () => {
  let component: DialogAddPermissionComponent;
  let fixture: ComponentFixture<DialogAddPermissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAddPermissionComponent]
    });
    fixture = TestBed.createComponent(DialogAddPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
