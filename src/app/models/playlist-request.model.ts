import { TrackDto } from './track-dto.model';

export interface PlaylistRequest {
  name: string;
  description?: string;
  tracks: TrackDto[];
}
