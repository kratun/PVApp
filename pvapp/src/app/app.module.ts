import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/nav/header/header.component';
import { SidenavListComponent } from './components/shared/nav/sidenav-list/sidenav-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { PostCreateComponent } from './components/posts/post-create/post-create.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostAllComponent } from './components/posts/post-all/post-all.component';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostEditComponent } from './components/posts/post-edit/post-edit.component';
import { ThankyouComponent } from './components/posts/thankyou/thankyou.component';
import { GridCreateComponent } from './components/grids/grid-create/grid-create.component';
import { GridEditComponent } from './components/grids/grid-edit/grid-edit.component';
import { GridAllComponent } from './components/grids/grid-all/grid-all.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    PostDetailsComponent,
    PostCreateComponent,
    FooterComponent,
    PostAllComponent,
    NotFoundComponent,
    PostEditComponent,
    ThankyouComponent,
    GridCreateComponent,
    GridEditComponent,
    GridAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }