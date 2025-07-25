import { NgModule } from '@angular/core';
import { ExampleTableComponent } from './example-table/example-table.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/public-api';
import {
  BasicWidgetConfigModule,
  HomeComponentsModule,
  WidgetConfigComponentsModule
} from '@home/components/public-api';
import { ChartModule } from 'primeng/chart';
import { AddEntityComponent } from './example-action/add-entity.component';
import {
  ExampleTableCustomSettingsComponent
} from './example-table-with-custom-settings/example-table-custom-settings.component';
import {
  ExampleTableAdvancedConfigComponent
} from './example-table-with-custom-settings/advanced-config/example-table-advanced-config.component';
import {
  ExampleTableBasicConfigComponent
} from './example-table-with-custom-settings/basic-config/example-table-basic-config.component';
import {
  DataKeySettingsComponent
} from './example-table-with-custom-settings/data-key-settings/data-key-settings.component';
import {
  ExampleTableCustomSubscriptionComponent
} from './example-table-with-custom-subscription/example-table-custom-subscription.component';
import {
  ExampleOfUsingThirdPartyLibraryComponent
} from './example-of-using-third-party-library/example-of-using-third-party-library.component';
import { ExampleChartComponent } from './example-chart/example-chart.component';
import {
  ExampleChartSettingsComponent
} from './example-chart/chart-settings/example-chart-settings.component';
import {
  SetDevice
} from './set-device/set-device';

import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { MatTimepickerModule } from '@angular/material/timepicker'; // let op: deze bestaat alleen als je de @angular/material-experimental of de nieuwe MDC timepicker gebruikt
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    ExampleTableComponent,
    AddEntityComponent,
    ExampleTableCustomSettingsComponent,
    ExampleTableAdvancedConfigComponent,
    ExampleTableBasicConfigComponent,
    DataKeySettingsComponent,
    ExampleTableCustomSubscriptionComponent,
    ExampleOfUsingThirdPartyLibraryComponent,
    ExampleChartComponent,
    ExampleChartSettingsComponent,
    SetDevice
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeComponentsModule,
    ChartModule,
    BasicWidgetConfigModule,
    WidgetConfigComponentsModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    // MatTimepickerModule,
    MatIconModule,
    MatCardModule,
    MatSlideToggleModule
  ],
  exports: [
    ExampleTableComponent,
    AddEntityComponent,
    ExampleTableCustomSettingsComponent,
    ExampleTableAdvancedConfigComponent,
    ExampleTableBasicConfigComponent,
    DataKeySettingsComponent,
    ExampleTableCustomSubscriptionComponent,
    ExampleOfUsingThirdPartyLibraryComponent,
    ExampleChartComponent,
    ExampleChartSettingsComponent,
    SetDevice
  ]
})

export class ExamplesModule {
}
