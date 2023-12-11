import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import {
  CentricAlertModule,
  CentricButtonModule,
  CentricButtonToggleModule,
  CentricIcon2Module,
  CentricInputSpinner2Module,
  CentricInputTimepicker2Module,
  CentricRadioModule,
  CentricSlideToggle2Module,
  CentricSliderModule,
  CentricTextarea2Module,
  CentricUploadAreaModule,
  WindmillAutocompleteModule,
  WindmillCheckboxModule,
  WindmillDatePickerModule,
  WindmillDropdownSearchModule,
  WindmillInputModule,
  WindmillSelectCharactersModule,
  WindmillSelectModule,
} from '@windmill/ng-windmill';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    WindmillAutocompleteModule,
    WindmillCheckboxModule,
    WindmillDatePickerModule,
    WindmillDropdownSearchModule,
    WindmillInputModule,
    CentricInputSpinner2Module,
    CentricRadioModule,
    WindmillSelectModule,
    CentricButtonModule,
    WindmillSelectCharactersModule,
    CentricSlideToggle2Module,
    CentricSliderModule,
    CentricTextarea2Module,
    CentricInputTimepicker2Module,
    CentricButtonToggleModule,
    CentricUploadAreaModule,
    CentricIcon2Module,
    CentricAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
