import { Component, OnInit } from '@angular/core';
import { LiveDataServiceService } from '../../services/live-data-service.service';
import { ApiResult } from '../../models/apiResult';

@Component({
  selector: 'app-live-data-consumer',
  templateUrl: './live-data-consumer.component.html',
  styleUrls: ['./live-data-consumer.component.scss']
})
export class LiveDataConsumerComponent implements OnInit {

  apiResults: ApiResult;

  constructor(
    private liveDataService: LiveDataServiceService
  ) { }

  ngOnInit() {
    this.liveDataService.getApiHttpResult().subscribe((res: ApiResult) => {
      this.apiResults = res;
    });;  
  }
}
