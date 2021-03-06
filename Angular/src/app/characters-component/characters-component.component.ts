import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api/api.service';

@Component({
  selector: 'app-characters-component',
  templateUrl: './characters-component.component.html',
  styleUrls: ['./characters-component.component.css']
})
export class charactersComponentComponent implements OnInit {

  title = 'Marvel-Characters';

  public characters: Array<any> = [];
  public offset: any = '0';
  public limit: any = '100';
  public page: number = 0;
  
  constructor(private comic: ApiService) {}

  ngOnInit(): void {
    this.comic.consultaCharactersMarvel(this.offset, this.limit).subscribe((res) => {
      console.log('Respuesta', res);
      this.characters = res.data.results;
    });
  }

}
