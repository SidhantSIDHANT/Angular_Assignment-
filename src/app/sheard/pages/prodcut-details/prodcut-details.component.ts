import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../service/product-service';
import { Iproduct } from '../../model/product';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-prodcut-details',
  templateUrl: './prodcut-details.component.html',
  styleUrls: ['./prodcut-details.component.scss']
})
export class ProdcutDetailsComponent implements OnInit {
  displayedColumns: string[] = ['templateId', 'TemplateName', 'Region', 'ModifiedBy', "ModifiedOn", "action"];
  dataSource !: Iproduct[];
  @Output() editModeVisible = new EventEmitter();
  @Output() productEvent = new EventEmitter();
  
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.productData();
  }

  productData(): void {
    this._productService.getProducts().subscribe((data: Iproduct[]) => {
      this.dataSource = data;
    })
  }

  onEdit(element : Iproduct): void {

    // this._productService.editProduct(id)
    this.editModeVisible.emit(true);
    this.productEvent.emit(element);
  }

  onDelete(id: string): void {
    this._productService.deleteProduct(id).subscribe((data)=>{});
  } 
}
