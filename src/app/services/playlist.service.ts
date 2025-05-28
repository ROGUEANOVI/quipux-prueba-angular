import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PlaylistResponse } from "../models/playlist-response.model";
import { PlaylistRequest } from "../models/playlist-request.model";

@Injectable({ providedIn: 'root' })
export class PlaylistService {

  private apiUrl = 'http://localhost:8080/api/lists';
  constructor(private http: HttpClient) {}

  createPlaylist(playlist: PlaylistRequest): Observable<PlaylistResponse> {
    return this.http.post<PlaylistResponse>(`${this.apiUrl}`, playlist);
  }

  getMyPlaylists(): Observable<PlaylistResponse[]> {
    return this.http.get<PlaylistResponse[]>(`${this.apiUrl}`);
  }

  getPlaylistByName(name: string): Observable<PlaylistResponse> {
    return this.http.get<PlaylistResponse>(`${this.apiUrl}/${name}`);
  }

  delelePlaylist(name: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${name}`);
  }
}
