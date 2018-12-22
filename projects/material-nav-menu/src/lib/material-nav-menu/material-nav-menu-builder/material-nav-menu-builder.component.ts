import { Component, Injector } from '@angular/core';
import { IControlBuilder } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeMaterialNavMenuDetails, ForgeMaterialNavMenuConfig } from '../material-nav-menu.core';

@Component({
	selector: 'forge-material-nav-menu-builder',
	templateUrl: './material-nav-menu-builder.component.html',
	styleUrls: ['./material-nav-menu-builder.component.scss']
})
export class ForgeMaterialNavMenuBuilderComponent
	extends ForgeGenericControl<ForgeMaterialNavMenuDetails, ForgeMaterialNavMenuConfig>
	implements IControlBuilder<ForgeMaterialNavMenuDetails, ForgeMaterialNavMenuConfig> {
	//  Fields

	//  Properties

	//  Constructors
	constructor(protected injector: Injector) {
		super(injector);
	}

	//	Life Cycle

	//	API Methods

	//	Helpers
}
