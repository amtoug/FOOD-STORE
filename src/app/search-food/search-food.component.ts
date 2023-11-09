import { Component,OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceFoodMenuService } from 'src/app/Services/service-food-menu.service';
import { FOOD } from '../Join/Food';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-food',
  templateUrl:'search-food.component.html',
  styleUrls:['search-food.component.css']
})
export class SearchFoodComponent implements OnInit{
  Foods=this.ServFood.getFoods();
  FoodFind:FOOD[]=[];
  @ViewChild('f') form!:NgForm;

  constructor(
    private router:ActivatedRoute,
    private ServFood:ServiceFoodMenuService,
    private rt:Router
    ){}
  
  Search(){
    if(this.form.value.name){
      this.rt.navigate([this.form.value.name])
    }
  }

  ngOnInit(): void {

  }


}
