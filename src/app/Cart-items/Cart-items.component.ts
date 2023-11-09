import { Component,OnInit } from '@angular/core';
import { CartItemService } from '../Services/cart-item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Cart-items',
  templateUrl:"Cart-items.component.html",
  styleUrls:['Cart-items.component.css']
})
export class FoodItemsComponent implements OnInit{


  constructor(public SerCart:CartItemService,
    private RA:ActivatedRoute,
    private R:Router){}

  ngOnInit(): void {
    this.SerCart.Empty=false;
    this.RA.params.subscribe(
      param=>{if(param["id"] && this.SerCart.AddAndGetCartItem(param["id"]))this.SerCart.FoodsSelected=this.SerCart.AddAndGetCartItem(param["id"]);
              else if(this.SerCart.AddAndGetCartItem(param["id"]))  
            this.SerCart.FoodsSelected=this.SerCart.AddAndGetCartItem()
    })
    if(this.SerCart.FoodsSelected.length==0)this.SerCart.Empty=true
    this.R.navigate(["/CartFood"])

  }
}