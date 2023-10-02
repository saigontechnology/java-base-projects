import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogImportCategoryComponent } from './dialog-import-category.component';

describe('DialogImportCategoryComponent', () => {
  let component: DialogImportCategoryComponent;
  let fixture: ComponentFixture<DialogImportCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogImportCategoryComponent]
    });
    fixture = TestBed.createComponent(DialogImportCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
