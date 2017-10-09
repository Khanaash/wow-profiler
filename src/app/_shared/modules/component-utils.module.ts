import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TooltipModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TooltipModule.forRoot()
  ],
  declarations: [],
  exports: [
    CommonModule,
    TooltipModule,
    FormsModule
  ]
})
export class ComponentUtilsModule {
}
