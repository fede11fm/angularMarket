import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  getAllFoodsBySearchTerm(arg0: any): Food[] {
    throw new Error('Method not implemented.');
  }

    constructor() { }

    getAllFoodBySearchTerm(searchTerm:string):Food[]{
      return this.getAll().filter(food =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    getALLTags():Tag[]{
      return [
        {name: 'All', count:14},
        {name: 'break', count:1},
        {name: 'lunch', count:5},
        {name: 'dinner', count:5},
        {name: 'breakfast', count:1},
        {name: 'soup', count:1},
      ]

    }

  getAllFoodsByTag(tag:string):Food[]{
return tag== "All"? 
this.getAll():
this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll():Food[]{
    return[
      {
        id:1,
        name:'whaffle',
        price: 5,
        coockTime:'10-20',
        favorite: true,
        origins:['italia'],
        stars:4.7,
        imageUrl: '/assets/images/1.jpg',
        tags:['breakfast'],

      },
      {
        id:2,
        name:'hamburgher',
        price: 9,
        coockTime:'10-5',
        favorite: true,
        origins:['italia, usa'],
        stars:4.9,
        imageUrl: '/assets/images/2.jpg',
        tags:['lunch', 'dinner', 'break'],

      },
      {
        id:3,
        name:'salad',
        price: 4,
        coockTime:'10-20',
        favorite: true,
        origins:['italia ,usa'],
        stars:4,
        imageUrl: '/assets/images/3.jpg',
        tags:['lunch', 'dinner'],

      },
      {
        id:4,
        name:'ramen',
        price: 10,
        coockTime:'5',
        favorite: true,
        origins:['giappone, cina'],
        stars:4.5,
        imageUrl: '/assets/images/4.jpg',
        tags:['lunch' ,'dinner', 'soup'],

      },
      {
        id:5,
        name:'beef',
        price: 15,
        coockTime:'10-20',
        favorite: true,
        origins:['italia, grece'],
        stars:5, 
        imageUrl: '/assets/images/5.jpg',
        tags:['lunch', 'dinner'],

      },
      {
        id:6,
        name:'bistecca',
        price: 50,
        coockTime:'10-20',
        favorite: true,
        origins:['italia'],
        stars:5,
        imageUrl: '/assets/images/6.jpg',
        tags:['lunch', 'dinner'],

      },
      ]
  }
}
