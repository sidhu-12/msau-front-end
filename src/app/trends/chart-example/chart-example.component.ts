import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as HighCharts from 'angular-highcharts';
import { attr, Point } from 'highcharts';
import { attributeList } from 'src/app/onboard/shared/attributeList';
import { TrendService } from '../trend.service';

@Component({
  selector: 'app-chart-example',
  templateUrl: './chart-example.component.html',
  styleUrls: ['./chart-example.component.css']
})
export class ChartExampleComponent implements OnInit {

  locationData:
  {
    location: string[],
    count :number [],
  }
  // attributeName : FormControl;
  attributeList : typeof attributeList;
  attributeValue : string;
  public chart: HighCharts.Chart = new HighCharts.Chart();
  showChart :boolean
   constructor(
    private service :TrendService
  ) { 
    this.attributeValue ="None";
    this.attributeList = attributeList;
    this.showChart = false;
    this.locationData = {
      location :[],
      count :[]
    }
      this.createChartData({
        value : "location"
      }
      ).then(()=>{
        console.log(this.locationData);
        console.log(this.chart); 
    });
  

  
   setTimeout(()=>{
     console.log(this.chart);
     this.showChart = true;
   },500);
  //  this.attributeName.valueChanges.pipe().subscribe(
  //    (value)=>{
  //      console.log(value);
  //      this.createChartData(value).catch((data)=>{

  //      });
  //     },
  //    err=>{
  //      throw err;
  //    }
  //  )
  }


async ngOnInit() {
}
  
    async createChartData(evt : any){
      // this.attributeValue = newValue;
      console.log(evt);
      this.showChart = false;
      let attribute = evt.value ;
      this.locationData =  await this.service.generateDataForChart(attribute,2021);
      // this.chart = new HighCharts.Chart ();
      this.chart = new HighCharts.Chart({
        chart: {
          type: "column"
        },
        title: {
          text: 'Hiring based on '+attribute
        },
        yAxis: {
          title: {
            text: 'Number of Employees '
          },
        },
      
        xAxis: {
    
            categories : this.locationData.location
          
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          
      },
  
        credits: {
          enabled: false
        },
        series: [{
        name:"2021",
        type : "column",
        data:this.locationData.count,
        }]
     });
    
   setTimeout(()=>{
    console.log(this.chart);
    this.showChart = true;
  },500);
         
  }
     
    
    }
  
