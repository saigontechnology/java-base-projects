import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogImportUserComponent } from './dialog-import-user.component';

describe('DialogImportUserComponent', () => {
  let component: DialogImportUserComponent;
  let fixture: ComponentFixture<DialogImportUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogImportUserComponent]
    });
    fixture = TestBed.createComponent(DialogImportUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
