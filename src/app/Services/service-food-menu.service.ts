import { Injectable } from '@angular/core';
import { Tags } from '../Join/Tags';
import { FOOD } from '../Join/Food';

@Injectable()
export class ServiceFoodMenuService {
  find(arg0: (fd: any) => boolean) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  Tags:Tags[]=[
    {Tag:'All',Count:this.NbTags('All')},
    {Tag:'FastFood',Count:this.NbTags('FastFood')},
    {Tag:'Pizza',Count:this.NbTags('Pizza')},
    {Tag:'Lunch',Count:this.NbTags('Lunch')},
    {Tag:'SlowFood',Count:this.NbTags('SlowFood')},
    {Tag:'Hamburger',Count:this.NbTags('Hamburger')},
    {Tag:'Fry',Count:this.NbTags('Fry')},
    {Tag:'Soup',Count:this.NbTags('Soup')}
  ]

  getFoods(){
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Hamburger',
        price: 5,
        cookTime: '22-30',
        favorite: false,
        origins: ['germany','Morocco'],
        stars: 2.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },{
        id: 8,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 9,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 10,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
    ];

  }

  getStars(){
    return{
      starFull:"/assets/Stars/star-full.svg",
      starHalf:"/assets/Stars/star-half.svg",
      starEmpty:"/assets/Stars/star-empty.svg",
    }
  }

  NbTags(Tag:string){
    let nbTag=0;
    for(let Food of this.getFoods()){
      if(Food.tags!.includes(Tag)){
        nbTag++;
      }
      if(Tag=='All'){
        nbTag+=Food.tags!.length;
      }
    }
    return nbTag;  
  }

  getFoodById(id:number):FOOD{
    // for(let Fd of this.getFoods()){
    //   if(Fd.id==+id){
    //     return Fd;
    //   }
    // }
    // return this.getFoods()[0];
      //       ou
  return this.getFoods().find(Food=>Food.id==id) !;
  }

}
