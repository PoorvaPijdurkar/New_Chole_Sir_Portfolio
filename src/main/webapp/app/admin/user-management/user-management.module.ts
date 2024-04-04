import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { UserManagementComponent } from './user-management.component';
import { NewspaperComponent } from '../newspaper/newspaper.component';
import { GlanceComponent } from '../glance/glance.component';
import { SeminarComponent } from '../seminar/seminar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [SharedModule,
    CarouselModule.forRoot(),
    RouterModule.forChild([
      {
        path: 'media',
        component: UserManagementComponent,
      },
      {
        path: 'newspaper-gallary',
        component: NewspaperComponent,
      },
      {
        path: 'glance',
        component: GlanceComponent,
      },
      {
        path: 'webinar',
        component: SeminarComponent,
      },
    ]),
  ],
  declarations: [UserManagementComponent,NewspaperComponent,GlanceComponent,SeminarComponent],
})
export class UserManagementModule {}
