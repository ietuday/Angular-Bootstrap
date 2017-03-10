import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AccordionModule,
          AlertModule,
          ButtonsModule,
          CarouselModule,
          CollapseModule,
          DatepickerModule,
          DropdownModule,
          ModalModule,
          PaginationModule,
          PopoverModule,
          ProgressbarModule,
          RatingModule,
          SortableModule,
          TabsModule,
          TimepickerModule,
          TooltipModule,
          TypeaheadModule
} from 'ng2-bootstrap';
import { BootstrapTestComponent } from './bootstrap-test/bootstrap-test.component';
import { BootstrapAlertDemoComponent } from './bootstrap-alert-demo/bootstrap-alert-demo.component';
import { BootstrapButtonDemoComponent } from './bootstrap-button-demo/bootstrap-button-demo.component';
import { BootstrapCarouselDemoComponent } from './bootstrap-carousel-demo/bootstrap-carousel-demo.component';
import { BootstrapCollapseDemoComponent } from './bootstrap-collapse-demo/bootstrap-collapse-demo.component';
import { BootstrapDatePickerDemoComponent } from './bootstrap-date-picker-demo/bootstrap-date-picker-demo.component';
import { BootstrapDropdownDemoComponent } from './bootstrap-dropdown-demo/bootstrap-dropdown-demo.component';
import { BootstrapModalDemoComponent } from './bootstrap-modal-demo/bootstrap-modal-demo.component';
import { BootstrapPaginationDemoComponent } from './bootstrap-pagination-demo/bootstrap-pagination-demo.component';
import { BootstrapPopOverDemoComponent } from './bootstrap-pop-over-demo/bootstrap-pop-over-demo.component';
import { BootstrapProgressBarDemoComponent } from './bootstrap-progress-bar-demo/bootstrap-progress-bar-demo.component';
import { BootstrapRatingDemoComponent } from './bootstrap-rating-demo/bootstrap-rating-demo.component';
import { BootstrapSortableDemoComponent } from './bootstrap-sortable-demo/bootstrap-sortable-demo.component';
import { BootstrapTabsDemoComponent } from './bootstrap-tabs-demo/bootstrap-tabs-demo.component';
import { BootstrapTimePickerDemoComponent } from './bootstrap-time-picker-demo/bootstrap-time-picker-demo.component';
import { BootstrapTooltipDemoComponent } from './bootstrap-tooltip-demo/bootstrap-tooltip-demo.component';
import { BootstrapTypeAheadDemoComponent } from './bootstrap-type-ahead-demo/bootstrap-type-ahead-demo.component';
import { BootstrapAcordionDemoComponent } from './bootstrap-acordion-demo/bootstrap-acordion-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapTestComponent,
    BootstrapAlertDemoComponent,
    BootstrapButtonDemoComponent,
    BootstrapCarouselDemoComponent,
    BootstrapCollapseDemoComponent,
    BootstrapDatePickerDemoComponent,
    BootstrapDropdownDemoComponent,
    BootstrapModalDemoComponent,
    BootstrapPaginationDemoComponent,
    BootstrapPopOverDemoComponent,
    BootstrapProgressBarDemoComponent,
    BootstrapRatingDemoComponent,
    BootstrapSortableDemoComponent,
    BootstrapTabsDemoComponent,
    BootstrapTimePickerDemoComponent,
    BootstrapTooltipDemoComponent,
    BootstrapTypeAheadDemoComponent,
    BootstrapAcordionDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    DatepickerModule.forRoot(),
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
