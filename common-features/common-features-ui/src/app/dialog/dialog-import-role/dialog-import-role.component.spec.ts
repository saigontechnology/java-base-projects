import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogImportRoleComponent } from './dialog-import-role.component';

describe('DialogImportRoleComponent', () => {
  let component: DialogImportRoleComponent;
  let fixture: ComponentFixture<DialogImportRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogImportRoleComponent]
    });
    fixture = TestBed.createComponent(DialogImportRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
