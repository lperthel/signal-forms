import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App {
  protected readonly title = signal('signal-forms');

  // Step 1: create the model
  loginModel = signal<LoginData>({
    email: '',
    password: '',
    rememberMe: false
  });

  //Step 2: create the form

  loginForm = form(this.loginModel);



}
