import { Component,Input,OnInit, ViewChild } from '@angular/core';
import { FOOD } from '../Join/Food';
import { ServiceFoodMenuService } from '../Services/service-food-menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tags } from '../Join/Tags';


@Component({
  selector: 'app-home-page',
  templateUrl:'home-page.component.html',
  styleUrls:['home-page.component.css',]
})
export class HomePageComponent implements OnInit{
  Images!:string[];
  getFoods:FOOD[]=this.ServiceFOOD.getFoods();
  Foods:FOOD[]=[];
  Tags:Tags[]=this.ServFood.Tags;
  NotFound=false;
  
  constructor(private ServiceFOOD:ServiceFoodMenuService,
    private Arouter:ActivatedRoute,
    private ServFood:ServiceFoodMenuService,
    private rt:Router){}

  ngOnInit(): void {
    this.Foods=this.getFoods;

    this.Arouter.params.subscribe(data=>{
      let i=0;
      if(data['ValueSearch']){
        this.Foods=[];
        for(let Fd of this.getFoods){
          if(Fd.name.toLowerCase().match(data['ValueSearch'].toLowerCase())){
            this.Foods.push(Fd)
            i++;
          }
        }
      }
      if(i==0 && data['ValueSearch']){
        this.NotFound=true;
      }
    })

    //get Food of Tags
    this.Arouter.params.subscribe(data=>{
      if(data["Tag"]){
        this.Foods=[]
        if(data["Tag"]=='All')
        {
          this.Foods=this.getFoods;
          return;
        }
        for(let Food of this.getFoods){
          if(Food.tags?.includes(data['Tag'])){
            this.Foods.push(Food)
          }
        }
      }
      })
  }
  
}
