import { Component, OnInit } from '@angular/core';
import { ApirequestService } from '../apirequest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  CharacterData:any;
  constructor(private CharacterApi:ApirequestService) { }

  ngOnInit(): void {
  this.CharacterApi.getSWC().subscribe((response:any) => {
    this.CharacterData=response.results
    console.log(this.CharacterData)
  })
    
}

}
