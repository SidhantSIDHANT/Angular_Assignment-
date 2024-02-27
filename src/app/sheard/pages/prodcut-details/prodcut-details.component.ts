import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../service/product-service';
import { Iproduct } from '../../model/product';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../service/data-service';


@Component({
  selector: 'app-prodcut-details',
  templateUrl: './prodcut-details.component.html',
  styleUrls: ['./prodcut-details.component.scss']
})
export class ProdcutDetailsComponent implements OnInit {
  displayedColumns: string[] = ['templateId', 'TemplateName', 'Region', 'ModifiedBy', "ModifiedOn", "action"];
  dataSource !: Iproduct[];
  @Output() editModeVisible = new EventEmitter();
  
  constructor(private _productService: ProductService, private dataService : DataService) { }

  ngOnInit(): void {
    this.productData();
  }

  productData(): void {
    this._productService.getProducts().subscribe((data: Iproduct[]) => {
      this.dataSource = data;
    })
  }

  onEdit(element : Iproduct): void {
    this.dataService.sendToSubscriber(element);
    this.editModeVisible.emit(true);
  }

  onDelete(id: string): void {
    this._productService.deleteProduct(id).subscribe((data)=>{});
  } 
}
