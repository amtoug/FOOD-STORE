export class FOOD{
    constructor(
        public id:number,
        public name:string,
        public cookTime:string,
        public price:number,
        public favorite:boolean,
        public origins:string[],
        public stars:number,
        public imageUrl:string,
        public tags?:string[],        
    ){}
}