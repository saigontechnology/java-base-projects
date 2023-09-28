import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogImportPermissionComponent } from './dialog-import-permission.component';

describe('DialogImportPermissionComponent', () => {
  let component: DialogImportPermissionComponent;
  let fixture: ComponentFixture<DialogImportPermissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogImportPermissionComponent]
    });
    fixture = TestBed.createComponent(DialogImportPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
