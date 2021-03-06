import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  @Input() keywordsAlert:boolean;
  @Input() priceAlert:boolean;
  @Input() searchAlert:boolean;

  constructor() { }

  ngOnInit(): void {

  }

}
