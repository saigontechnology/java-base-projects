import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogImportProductComponent } from './dialog-import-product.component';

describe('DialogImportProductComponent', () => {
  let component: DialogImportProductComponent;
  let fixture: ComponentFixture<DialogImportProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogImportProductComponent]
    });
    fixture = TestBed.createComponent(DialogImportProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
