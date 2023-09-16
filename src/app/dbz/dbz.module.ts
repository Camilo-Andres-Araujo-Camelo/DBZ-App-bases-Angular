import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AddCharactherComponent } from './components/add-characther/add-characther.component';

@NgModule({
  declarations: [ListComponent, MainPageComponent, AddCharactherComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
