import { Injectable } from '@angular/core';
import { OnboardService } from '../onboard/shared/onboard.service';
@Injectable({
  providedIn: 'root'
})
export class TrendService {

  constructor(
    private onboardservice : OnboardService
  ) { }

  async generateDataForChart( attribute:string,year: number) {
    let locationValues: string[]  =[];
    let locationData : {
      location :string[],
      count : number[],
    }  = {
      location: [],
      count : []
    };
    await this.onboardservice.listByAttribute(attribute).toPromise().then(
      data=>{

      locationValues=data;
    
          
      },err=>{
      throw err;
    }
    );
     locationValues.forEach(async loc=>{
       await this.onboardservice.searchResult({
      attribute : attribute,
      value :loc
    }).toPromise().then(
      resp=>{
          locationData.location.push(loc);
          console.log();
          locationData.count.push(resp.filter((resp)=>{
            let startDate = new Date(resp.startDate);
            // console.log(startDate.getFullYear() == year);
            return startDate.getFullYear() == year
          }).length);
          

      },err=>{
        throw err;
      }
    );
    });
    console.log(locationData);
    return locationData;
    }
}

