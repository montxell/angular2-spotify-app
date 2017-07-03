import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists:any[] = [];

  urlSearch:string = "https://api.spotify.com/v1/search";
  urlArtist:string = "https://api.spotify.com/v1/artists";

  constructor( private http:Http ) { }

  getArtists ( userText:string ) {

    let headers = new Headers();
    headers.append( 'authorization', 'Bearer BQCNRO77yhG8czJrPnadvj-nY-zS1m18Sp8FtJi03J5b-EzR76CYC_jVuqgf9db342G73Nwg0m-ZqAAZ6BIfew');

    let query = `?q=${ userText }&type=artist`;
    let url = this.urlSearch + query;

    return this.http.get( url, { headers } )
           .map( res => {
             this.artists = res.json().artists.items;
             console.log( this.artists );

             //return res.json().artists.items;
           })
  }


  getArtist ( id:string ) {

    let query = `/${ id }`;
    let url = this.urlArtist + query;

    return this.http.get( url )
           .map( res => {
             console.log(res.json());
             return res.json();

           })
  }


  getTopTracks ( id:string ) {

    let query = `/${ id }/top-tracks?country=US`;
    let url = this.urlArtist + query;

    return this.http.get( url )
           .map( res => {
             console.log(res.json().tracks);
             return res.json().tracks;

           })
  }

}
