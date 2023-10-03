import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-product',
  templateUrl: './dialog-delete-product.component.html',
  styleUrls: ['./dialog-delete-product.component.css']
})
export class DialogDeleteProductComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit(): void {
      
  }
}
