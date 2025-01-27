import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtworksService {

  private apiUrl = 'https://api.artic.edu/api/v1/artworks/search?q=cats';

  constructor(private http: HttpClient) {}

  getArtworks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
