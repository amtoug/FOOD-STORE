import { ElementRef, Injectable, OnInit } from '@angular/core';
import { FOOD } from '../Join/Food';
import { ServiceFoodMenuService } from './service-food-menu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartItemService implements OnInit{
  AllFoodchoice:{id:number,Price:number}[]=[];
  FoodsSelected:FOOD[]=[];
  Empty=false
  
  FoodItems:FOOD[]=[];
  constructor(private FoodSer:ServiceFoodMenuService,
    private router:Router) {
   }

  AddAndGetCartItem(id?:number){
    if(!this.FoodItems){
      this.FoodItems=[]
    }
    if(this.FoodItems.find(fd=>fd.id==id)||!id)return this.FoodItems;
    this.FoodItems.push(
      this.FoodSer.getFoods().find(Food=>Food.id==id)!)
      
    return this.FoodItems;
  }
  ngOnInit(): void {
  }
  
  Price(id:number,prix:number,qte?:number){
    for(let Food of this.AddAndGetCartItem()){
      if(Food.id===id){
        this.PriceTotal(id,(qte!*prix!));
        return (qte!*prix!).toString();
      }
    }
    return '';
  }


  Remove(id:number){
    for(let i=0;i<this.FoodItems.length;i++){
      if(this.FoodItems[i].id==id){
        this.FoodItems.splice(i,1)
      }
    }
    for(let i=0;i<this.AllFoodchoice.length;i++){
      if(id==this.AllFoodchoice[i].id)
      {
        this.AllFoodchoice.splice(i,1)
        this.PriceTotal();
      }
    }
    if(this.FoodsSelected.length==0){
      this.router.navigate(["CartFood"]);
      this.Empty=true;
    }
  }

  PriceTotal(id?:number,prx?:number)
  {
    let Excist=0;
    let TTC:number=0;
    for(let i=0;i<this.AllFoodchoice.length;i++){
      if(this.AllFoodchoice[i].id==id && id){
        Excist++;
        this.AllFoodchoice[i].Price=prx!;
      }
      TTC =TTC+this.AllFoodchoice[i].Price
    } 
    if(Excist===0 && prx){
    this.AllFoodchoice.push({id:id!,Price:prx!})
    TTC+=prx;
    Excist++;
    }
    return TTC
  }
}
