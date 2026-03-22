//Example from : https://angular.dev/tutorials/signal-forms/

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { form, FormField, required, email } from '@angular/forms/signals';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormField],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  // loginForm = form(this.loginModel);

  //Step 3: bind template to component form (see template)

  //Step 4: add validations
  loginForm = form(this.loginModel, (fieldPath) => {
    required(fieldPath.email, { message: 'Email is required' });
    email(fieldPath.email, { message: 'Enter a valid email' });
    required(fieldPath.password, { message: 'Password is required.' });
  });

}
