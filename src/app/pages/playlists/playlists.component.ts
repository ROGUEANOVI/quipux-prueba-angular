import { Component } from '@angular/core';
import { PlaylistService } from '../../services/playlist.service';
import { PlaylistResponse } from '../../models/playlist-response.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playlists',
  imports: [CommonModule],
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.scss',
})
export class PlaylistsComponent {
  playlists: PlaylistResponse[] = [];
  constructor(private playlistService: PlaylistService) {}
  ngOnInit(): void {
    this.playlistService
      .getMyPlaylists()
      .subscribe((data) => (this.playlists = data));
  }
}
