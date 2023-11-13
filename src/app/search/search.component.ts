import { Component } from '@angular/core';
import {ApiService} from '../api.service'
import { Form } from '@angular/forms';
import { Brewry } from '../brewry';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})




export class SearchComponent {

  data : Object = [] ;
  srcType : any ;


  srcResult : any = [];
  brewryData : any = [];

  constructor(private api:ApiService){

    this.api.getData("https://api.openbrewerydb.org/v1/breweries?by_name=cooper&per_page=1").subscribe(result=>{
      console.log("Data : ", result);
      this.data = result ;

      console.log("This Data : ", this.data);


    })

  }

  public searchBy(e : Event)
  {
    this.srcType = (e.target as HTMLInputElement).value;

    console.log("Search By : ",this.srcType);
  }

  showDetails(name : String)
  {
    

      let url = "https://api.openbrewerydb.org/v1/breweries?by_name="+name+"&per_page=10";

      // brewryData

      this.api.getData(url).subscribe(result=>{

        console.log("Brewrey Result : ",result);

        this.brewryData = result ;

    })


  }

  public searchBrewry(form : any)
  {
      console.log("Search Text : ",form.value.srcText);

      let srcText = form.value.srcText;

      let url = "";

      if(this.srcType == "Brewry Name"){
        url="https://api.openbrewerydb.org/v1/breweries?by_name="+srcText+"&per_page=10";
      }
      else if(this.srcType == "City")
      {
        url="https://api.openbrewerydb.org/v1/breweries?by_city="+srcText+"&per_page=10";
      }
      else 
      {
          url = "https://api.openbrewerydb.org/v1/breweries?by_type="+srcText+"&per_page=10";
      }

      this.api.getData(url).subscribe(result=>{

          console.log("Search result : ",result);

          this.srcResult = result ;

      })


  }

}
