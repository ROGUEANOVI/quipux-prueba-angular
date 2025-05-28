import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { PlaylistsComponent } from './pages/playlists/playlists.component';
import { RegisterComponent } from './pages/register/register.component';
import { CreatePlaylistComponent } from './pages/create-playlist/create-playlist.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'playlists', component: PlaylistsComponent, canActivate: [AuthGuard] },
  { path: 'create-playlist', component: CreatePlaylistComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
