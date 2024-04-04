import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { LoginComponent } from './login.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'achievement',
        component: LoginComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ]),
  ],
  declarations: [LoginComponent, ContactComponent],
})
export class LoginModule {}
