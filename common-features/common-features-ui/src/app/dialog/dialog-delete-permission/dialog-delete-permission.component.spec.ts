import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeletePermissionComponent } from './dialog-delete-permission.component';

describe('DialogDeletePermissionComponent', () => {
  let component: DialogDeletePermissionComponent;
  let fixture: ComponentFixture<DialogDeletePermissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogDeletePermissionComponent]
    });
    fixture = TestBed.createComponent(DialogDeletePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
