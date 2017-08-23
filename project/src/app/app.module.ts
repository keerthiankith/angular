import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ConnectserviceService } from './connectservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LoginComponent,
    SignupComponent,
    ContactusComponent,
    HomeComponent,
    LoginpageComponent,
    ForgotpasswordComponent,
    ],
  imports: [
    BrowserModule,FormsModule,HttpModule,
    RouterModule.forRoot([
              {
                path: 'login', 
                component:LoginComponent
              },
              {
                path:'signup',component:SignupComponent
              },
              {
                path:'contactus',component:ContactusComponent
              },
              {
                path:'Home',component:HomeComponent},
               { path:'',redirectTo:'/body',pathMatch:'full'
              },
              {
                path:'body',component:BodyComponent
              },

            {
                path:'footer',component:FooterComponent
              },
             
             {
              path:'loginpage',component: LoginpageComponent
             },
             {
              path:'forgotpassword',component:ForgotpasswordComponent,
             }

       
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
