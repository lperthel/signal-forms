//Example from : https://angular.dev/tutorials/signal-forms/

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, FormField, submit } from '@angular/forms/signals';
@Component({
  selector: 'app-root',
  imports: [FormField],
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

  loginForm = form(this.loginModel);

  //Step 3: bind template to component form (see template)

  //Step 4: add validations
  // loginForm = form(this.loginModel, (fieldPath) => {
  //   required(fieldPath.email, { message: 'Email is required' });
  //   email(fieldPath.email, { message: 'Enter a valid email' });
  //   required(fieldPath.password, { message: 'Password is required.' });
  // });

  //Step 5: display errors (see template)

  //Step 6: Add onSubmit method
  onSubmit(event: Event) {
    event.preventDefault();
    submit(this.loginForm, async () => {
      const credentials = this.loginModel();
      console.log('logging in with:', credentials);
    });
  }


}
