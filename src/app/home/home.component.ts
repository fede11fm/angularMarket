import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service'; 
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    foods:Food[]=[]
  constructor(private foodService: FoodService, private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    // console.log("searchTermSnap=" + this.route.snapshot.params["searchTerm"]); 

    // this.route.params.subscribe(params => { 
    //   console.log("searchTerm=" + params['searchTerm']); 
    // });

this.route.params.subscribe(params =>{
  if (params['searchTerm']){
    console.log("searchTerm=" + params['searchTerm']);
    this.foods= this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
  }
  else if(params['tag'])
  this.foods=this.foodService.getAllFoodsByTag(params['tag']);
  else {
    this.foods=this.foodService.getAll();
  }
  });

  }

  search():void{

  }
}