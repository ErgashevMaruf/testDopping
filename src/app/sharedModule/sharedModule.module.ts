import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleComponent } from './sharedModule.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SharedModuleComponent, DropdownComponent, FooterComponent],
  exports: [DropdownComponent, FooterComponent],
})
export class SharedModuleModule {}
