import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  SearchTerm:String='';
constructor(private route:ActivatedRoute, private router:Router){}

ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.SearchTerm=params['searchTerm'];
    console.log("searchTerm=" + this.SearchTerm);
  } 
  );

}
Search():void{ 
  if(this.SearchTerm)
  this.router.navigateByUrl('/search/'+ this.SearchTerm)
    
}
}


