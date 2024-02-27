import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Iproduct } from '../../model/product';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  openTemplateView : boolean = false;
  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();
  

  constructor() {
    this.dataSource.data = [ {
      name: 'Configurations',
      children: [
        {name: 'Templates'},
      ]
    }, {
      name: 'Document Prep',
      children: [
        {name: 'Products'},
        {name: 'Applications'},
        {name: 'Sequences'},
      ]
    },];
  }

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;
  ngOnInit(): void {
  }

  onOpenTemplateView() : void{
    this.openTemplateView = true;
  }

  isAddProductViewCancel(ele : boolean): void{
      this.openTemplateView = ele;
  }

  isEditModeVisble(mode : boolean) : void{
    this.openTemplateView = mode;
  }

  editProduct(element : Iproduct) : void{
  }
}

