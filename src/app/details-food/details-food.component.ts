import { Component, Input } from '@angular/core';
import { FOOD } from '../Join/Food';
import { ServiceFoodMenuService } from '../Services/service-food-menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-food',
  templateUrl:'details-food.component.html',
  styleUrls: ['details-food.component.css',]
})
export class DetailsFoodComponent {
  @Input() Food!:FOOD;  

  constructor(private rt:Router){}

  Navigate(id:number){
    this.rt.navigate(['FoodPage',id])
  }
}
