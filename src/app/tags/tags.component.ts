import { Component,Input,OnInit } from '@angular/core';
import { ServiceFoodMenuService } from '../Services/service-food-menu.service';
import { FOOD } from '../Join/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { Tags } from '../Join/Tags';

@Component({
  selector: 'app-tags',
  templateUrl: 'tags.Component.html',
  styleUrls: ['tags.component.css']
})
export class TagsComponent implements OnInit{
  Foods:FOOD[]=this.ServFood.getFoods();
  Tags:Tags[]=this.ServFood.Tags;
  @Input() TagsFoodPage?:string[];


  constructor(
    private ServFood:ServiceFoodMenuService,
    private ARoute:ActivatedRoute,
    private rt:Router){
  }


  ngOnInit(): void {
  }

  Navigate(value:string){
    this.rt.navigate(['Tag',value])
  }
}
