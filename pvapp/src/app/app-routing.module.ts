import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { PostCreateComponent } from './components/posts/post-create/post-create.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PostAllComponent } from './components/posts/post-all/post-all.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';
import { LoggedInAuthGuard } from './core/guards/logged.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SinglePostResolver } from './core/resolvers/post.resolver';
import { PostEditComponent } from './components/posts/post-edit/post-edit.component';
import { GridAllComponent } from './components/grids/grid-all/grid-all.component';
import { GridCreateComponent } from './components/grids/grid-create/grid-create.component';
import { GridEditComponent } from './components/grids/grid-edit/grid-edit.component';
import { SingleGridResolver } from './core/resolvers/grid.resolver';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent, canActivate: [ LoggedInAuthGuard ] },
  { path: 'login', component: LoginComponent, canActivate: [ LoggedInAuthGuard ] },
  { path: 'projects', component: PostAllComponent, canActivate: [ AuthGuard ] },
  { path: 'projects/edit/:id', component: PostEditComponent, canActivate: [ AdminGuard ], resolve: { post: SinglePostResolver } },
  { path: 'projects/details/:id', component: PostDetailsComponent, canActivate: [ AuthGuard ], resolve: { post: SinglePostResolver} },
  { path: 'projects/create', component: PostCreateComponent, canActivate: [ AdminGuard ]  },
  { path: 'grids', component: GridAllComponent, canActivate: [ AdminGuard ] },
  { path: 'grids/create', component: GridCreateComponent, canActivate: [ AdminGuard ]  },
  { path: 'grids/edit/:id', component: GridEditComponent, canActivate: [ AdminGuard ], resolve: { grid: SingleGridResolver } },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
