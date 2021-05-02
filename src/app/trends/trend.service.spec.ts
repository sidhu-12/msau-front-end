import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { OnboardService } from '../onboard/shared/onboard.service';
import { ChartData } from './chartData';

import { TrendService } from './trend.service';

describe('TrendService', () => {
  let service: TrendService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers :[OnboardService,TrendService]
    });
    service = TestBed.inject(TrendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('#generateChartData should return not nullable Chart Data', () => {
    const attribute = "location";
    const year  = 2018;
    const chartData : ChartData ={
      attributeName :[attribute],
      count :[0,2,3]
    }
    service.generateDataForChart(attribute,year).then((result)=>{
      expect(result).toEqual(chartData)
    })
  });
  it('#changeStructure should return not nullable Chart Data in the required format', () => {
   
    const oldChartData : ChartData ={
      attributeName :["ANGULAR,JAVA","JAVA,PYTHON"],
      count :[1,2]
    }
    const expectedChartData : ChartData ={
      attributeName :["ANGULAR","JAVA","PYTHON"],
      count :[1,3,2]
    }
    expect(service.changeStructure(oldChartData)).toEqual(expectedChartData)
    })
});


