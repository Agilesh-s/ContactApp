import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private myApi:ApiService) {
    this.fetchData()
   }

  fetchData = ()=>{
    this.myApi.dataList().subscribe(
      (data)=>{
        this.contactDetails = data
      }
    )
  }

  contactDetails:any = {}
  ngOnInit(): void {
  }

}
