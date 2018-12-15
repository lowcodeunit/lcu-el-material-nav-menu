import { Component, Injector } from '@angular/core';
import { IControlMarketplace, ForgeGenericControl } from '@lowcodeunit/elements';
import { ForgeMaterialNavMenuDetails, ForgeMaterialNavMenuConfig } from '../material-nav-menu.core';

@Component({
	selector: 'forge-material-nav-menu-marketplace',
	templateUrl: './material-nav-menu-marketplace.component.html',
	styleUrls: ['./material-nav-menu-marketplace.component.scss']
})
export class ForgeMaterialNavMenuMarketplaceComponent
	extends ForgeGenericControl<ForgeMaterialNavMenuDetails, ForgeMaterialNavMenuConfig>
	implements IControlMarketplace<ForgeMaterialNavMenuDetails, ForgeMaterialNavMenuConfig> {
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
