import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FOOD } from '../Join/Food';
import { ServiceFoodMenuService } from '../Services/service-food-menu.service';

@Component({
  selector: 'app-Foodpage',
  templateUrl:'Foodpage.component.html',
  styleUrls:['Foodpage.component.css']
})
export class FoodPageComponent implements OnInit {
  Food!:FOOD;
  ProdactNotFound=true;

  constructor(private AR:ActivatedRoute,
    private SerFoods:ServiceFoodMenuService,
    private R:Router){}

  ngOnInit(): void {
    this.ProdactNotFound=true;
    this.AR.params.subscribe(param=>{
      if(this.SerFoods.getFoodById(+param["id"])&&param["id"]){
      this.Food=this.SerFoods.getFoodById(+param["id"])!
      this.ProdactNotFound=false;
    }
      
    })
  }

  Navigate(id:number){
    this.R.navigate(['CartFood',id])
  }
}
