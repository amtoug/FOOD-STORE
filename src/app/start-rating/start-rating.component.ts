import { Component,Input,OnInit} from '@angular/core';
import { ServiceFoodMenuService } from '../Services/service-food-menu.service';

@Component({
  selector: 'app-start-rating',
  template: `
    <img *ngFor="let str of [1,2,3,4,5]"
    [src]="StartRating(str)" width="20px"/> 
  `,
  styles: [
  ]
})
export class StartRatingComponent implements OnInit{
  @Input() Etoils!:string;
  Star!:string;
  constructor(private ServiceFood:ServiceFoodMenuService){}
  ngOnInit(): void {
   {
   }
  }
  StartRating(str:number){
      if(str<=Math.floor(+this.Etoils)){
        return this.Star=this.ServiceFood.getStars().starFull;
      }if(Math.floor(+this.Etoils)+0.5<=+this.Etoils &&
      Math.floor(+this.Etoils)+1==Math.floor(str))
      {
        return this.Star=this.ServiceFood.getStars().starHalf;
      }else
      {
        return this.Star=this.ServiceFood.getStars().starEmpty;
      }
  }
}
