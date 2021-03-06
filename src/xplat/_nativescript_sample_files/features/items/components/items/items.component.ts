import { Component } from '@angular/core';

// libs
import { LogService } from '@<%= npmScope %>/core';
import { ItemsBaseComponent, ItemService } from '@<%= npmScope %>/features';
import { AppService } from '@<%= npmScope %>/nativescript/core';

@Component({
  moduleId: module.id,
  selector: '<%= prefix %>-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent extends ItemsBaseComponent {

  constructor(
    log: LogService,
    itemService: ItemService,
    public appService: AppService
  ) {
    super(log, itemService);
  }
}
