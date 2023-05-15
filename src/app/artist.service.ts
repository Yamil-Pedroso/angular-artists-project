import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Artist } from './artist';
import { ARTISTS } from './mock-artists';

@Injectable({
  providedIn: 'root'
})

export class ArtistService {
  constructor(private messageService: MessageService) { }

  getArtists(): Observable<Artist[]> { // Simulate getting data from the server
    const artists = of(ARTISTS);
    this.messageService.add('ArtistService: fetched artists');
    return artists;
  }

  getArtist(id: number): Observable<Artist> {
    const artist = ARTISTS.find(a => a.id === id)!;
    this.messageService.add(`ArtistService: fetched artist id=${id}`);
    return of(artist);
  }

}
