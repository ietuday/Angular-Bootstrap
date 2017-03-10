import { RouterModule, Routes } from '@angular/router';
import { BootstrapTestComponent } from './bootstrap-test/bootstrap-test.component';
import { BootstrapAcordionDemoComponent } from './bootstrap-acordion-demo/bootstrap-acordion-demo.component';
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

const routes: Routes = [
  { path: '', component: BootstrapTestComponent },
  { path: 'accordion', component: BootstrapAcordionDemoComponent },
  { path: 'alert', component: BootstrapAlertDemoComponent },
  { path: 'button', component: BootstrapButtonDemoComponent },
  { path: 'carousel', component: BootstrapCarouselDemoComponent },
  { path: 'collapse', component: BootstrapCollapseDemoComponent },
  { path: 'datePicker', component: BootstrapDatePickerDemoComponent },
  { path: 'dropdown', component: BootstrapDropdownDemoComponent },
  { path: 'modal', component: BootstrapModalDemoComponent },
  { path: 'pagination', component: BootstrapPaginationDemoComponent },
  { path: 'popOver', component: BootstrapPopOverDemoComponent },
  { path: 'progressBar', component: BootstrapProgressBarDemoComponent },
  { path: 'rating', component: BootstrapRatingDemoComponent },
  { path: 'sortable', component: BootstrapSortableDemoComponent },
  { path: 'tabs', component: BootstrapTabsDemoComponent },
  { path: 'timePicker', component: BootstrapTimePickerDemoComponent },
  { path: 'toolTip', component: BootstrapTooltipDemoComponent },
  { path: 'typeAhead', component: BootstrapTypeAheadDemoComponent }
];

export const routing = RouterModule.forRoot(routes);
