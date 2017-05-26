import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor( private _spotifyService:SpotifyService) { }

  userText:string = "";

  ngOnInit() {}

  searchArtist() {
    this._spotifyService.getArtists( this.userText )
          .subscribe();
  }
}
