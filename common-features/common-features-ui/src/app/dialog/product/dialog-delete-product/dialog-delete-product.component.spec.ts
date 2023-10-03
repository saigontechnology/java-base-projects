import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteProductComponent } from './dialog-delete-product.component';

describe('DialogDeleteProductComponent', () => {
  let component: DialogDeleteProductComponent;
  let fixture: ComponentFixture<DialogDeleteProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogDeleteProductComponent]
    });
    fixture = TestBed.createComponent(DialogDeleteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
