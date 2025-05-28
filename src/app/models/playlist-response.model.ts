import { TrackDto } from './track-dto.model';

export interface PlaylistResponse {
  id: number;
  name: string;
  description?: string;
  tracks: TrackDto[];
}
