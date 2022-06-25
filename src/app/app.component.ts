import { Component } from '@angular/core';

interface Currency{
  country:string;
  amount:number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title:string = 'Currency Convertor';
  public From_amount:number = 0;
  public To_amount:number = 0;
  public From_country:string = "";
  public To_country:string = "";

  private india:Array<Currency> = [
    {
      country:"America",
      amount:0.013
    },
    {
      country:"Russia",
      amount:0.69
    },
    {
      country:"Sri Lanka",
      amount:4.60
    },
    {
      country:"Australia",
      amount:0.018
    },
  ]

  private america:Array<Currency> = [
    {
      country:"India",
      amount:78.25
    },
    {
      country:"Sri Lanka",
      amount:360.15
    },
    {
      country:"Australia",
      amount:1.44
    },
    {
      country:"Russia",
      amount:54.20
    },
  ]

  private sri_lanka:Array<Currency> = [
    {
      country:"Russia",
      amount:0.15
    },
    {
      country:"India",
      amount:0.22
    },
    {
      country:"America",
      amount:0.0028
    },
    {
      country:"Australia",
      amount:0.0040
    },
  ]

  private russia:Array<Currency> = [
    {
      country:"India",
      amount:1.44
    },
    {
      country:"Australia",
      amount:0.021
    },
    {
      country:"America",
      amount:0.018
    },
    {
      country:"Sri Lanka",
      amount:6.64
    },
  ]

  private australia:Array<Currency> = [
    {
      country:"India",
      amount:54.38
    },
    {
      country:"Russia",
      amount:37.66
    },
    {
      country:"America",
      amount:37.66
    },
    {
      country:"Sri Lanka",
      amount:250.27
    },
  ]

  setToAmount(){

    let selected_country:string = this.From_country;
    let to_country:string = this.To_country;
    let user_amount:number = this.From_amount;
    let to_country_amount:any;

    switch(selected_country){

      case "India":
        to_country_amount = this.india.find((obj) => {
          if(obj.country === to_country){
            this.To_amount =  obj.amount * user_amount;
          }
          return 0;
        });
        console.log(this.To_amount);
        break;

      case "Russia":
        to_country_amount = this.russia.find((obj) => {
          if(obj.country === to_country){
            this.To_amount =  obj.amount * user_amount;
          }
          return 0;
        });
        console.log(this.To_amount);
        break;

      case "America":
        to_country_amount = this.america.find((obj) => {
          if(obj.country === to_country){
            this.To_amount =  obj.amount * user_amount;
          }
          return 0;
        });
        console.log(this.To_amount);
        break;

      case "Sri Lanka":
        to_country_amount = this.sri_lanka.find((obj) => {
          if(obj.country === to_country){
            this.To_amount =  obj.amount * user_amount;
          }
          return 0;
        });
        console.log(this.To_amount);
        break;

      case "Australia":
        to_country_amount = this.australia.find((obj) => {
          if(obj.country === to_country){
            this.To_amount =  obj.amount * user_amount;
          }
          return 0;
        });
        console.log(this.To_amount);
        break;
        
    }

    console.log(this.From_amount,this.To_amount);
    console.log(this.From_country,this.To_country);
  }

}
