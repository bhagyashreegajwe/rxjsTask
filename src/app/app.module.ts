import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductComponent } from './shared/components/product/product.component';
import { HomeComponent } from './shared/components/home/home.component';
import { PostsComponent } from './shared/components/posts/posts.component';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { Consumer1Component } from './shared/components/consumer1/consumer1.component';
import { Consumer2Component } from './shared/components/consumer2/consumer2.component';
import { Consumer3Component } from './shared/components/consumer3/consumer3.component';
import { PostCardComponent } from './shared/components/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    ProductComponent,
    HomeComponent,
    PostsComponent,
    UserFormComponent,
    Consumer1Component,
    Consumer2Component,
    Consumer3Component,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
