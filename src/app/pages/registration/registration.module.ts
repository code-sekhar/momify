import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    IonicModule,
    FormsModule,
    ExploreContainerComponentModule,
    CommonModule,
    RegistrationRoutingModule,ReactiveFormsModule
  ],
})
export class RegistrationModule { }
