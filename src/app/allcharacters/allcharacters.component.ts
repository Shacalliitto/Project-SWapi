import { Component, OnInit } from '@angular/core';
import { ApirequestService } from '../apirequest.service';

@Component({
  selector: 'app-allcharacters',
  templateUrl: './allcharacters.component.html',
  styleUrls: ['./allcharacters.component.sass']
})
export class AllcharactersComponent implements OnInit {
  
  CharacterData:any;

  constructor(private CharacterApi:ApirequestService) { }

  ngOnInit(): void {
    this.CharacterApi.getSWC().subscribe((response:any) => {
      this.CharacterData=response.results
      console.log(this.CharacterData)
    })
  }

}
