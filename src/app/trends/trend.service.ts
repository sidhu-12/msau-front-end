import { Injectable } from '@angular/core';
import { OnboardService } from '../onboard/shared/onboard.service';
import { ChartData } from './chartData';
@Injectable({
  providedIn: 'root'
})
export class TrendService {

  constructor(
    private onboardservice : OnboardService
  ) { }

  async generateDataForChart( attribute:string,year: number) :Promise <ChartData> {
    let attributeValues: string[]  =[];
    let chartData : {
      attributeName :string[],
      count : number[],
    }  = {
      attributeName: [],
      count : []
    };
    await this.onboardservice.listByAttribute(attribute).toPromise().then(
      data=>{

      attributeValues=data;
    
          
      },err=>{
      throw err;
    }
    );
     attributeValues.forEach(async loc=>{
       await this.onboardservice.searchResult({
      attribute : attribute,
      value :loc
    }).toPromise().then(
      resp=>{
          chartData.attributeName.push(loc);
          console.log();
          if(year != 0)
          {
            chartData.count.push(resp.filter((resp)=>{
              let startDate = new Date(resp.startDate);
              // console.log(startDate.getFullYear() == year);
              return startDate.getFullYear() == year
            }).length);
          }else
          {
            chartData.count.push(resp.length);
          }
          

      },err=>{
        throw err;
      }
    );
    });
    console.log(chartData);
    return chartData;
    }
    changeStructure( chartData : ChartData ) : ChartData
    {
      let skillsMap :Map<string,number> = new Map();
      chartData.attributeName.forEach((a)=>{console.log(a)})
      for( var i =0 ; i < chartData.attributeName.length ;i++)
      {
        chartData.attributeName[i].split(",").forEach((splitValue)=>{
          console.log(splitValue);
          if(skillsMap.has(splitValue) == true ) //to check whether the value is already present
          {
            let countValue = skillsMap.get(splitValue);
            
            countValue != undefined ? skillsMap.set(splitValue , countValue + chartData.count[i]) 
            : skillsMap.set(splitValue,chartData.count[i]);
          }
          else{
            skillsMap.set(splitValue , chartData.count[i]);
          }
        })
      }
      console.log(skillsMap);
      let returnData : ChartData = {
        attributeName : [],
        count : [],
      };
      skillsMap.forEach((count,attributeValue)=>{
          returnData.attributeName.push(attributeValue);
          returnData.count.push(count);

      })
      console.log(returnData);
      return returnData;
    }
}

