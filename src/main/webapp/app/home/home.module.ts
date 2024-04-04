import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { EventsComponent } from 'app/admin/events/events.component';

@NgModule({
  imports: [SharedModule, CommonModule, RouterModule.forChild([HOME_ROUTE]),CarouselModule.forRoot()],
  declarations: [HomeComponent,EventsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
