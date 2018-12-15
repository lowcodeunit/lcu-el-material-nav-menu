import { Component, Injector } from '@angular/core';
import { IControlRender, ForgeGenericControl } from '@lowcodeunit/elements';
import { ForgeMaterialNavMenuDetails, ForgeMaterialNavMenuConfig } from '../material-nav-menu.core';

@Component({
	selector: 'forge-material-nav-menu-render',
	templateUrl: './material-nav-menu-render.component.html',
	styleUrls: ['./material-nav-menu-render.component.scss']
})
export class ForgeMaterialNavMenuRenderComponent
	extends ForgeGenericControl<ForgeMaterialNavMenuDetails, ForgeMaterialNavMenuConfig>
	implements IControlRender<ForgeMaterialNavMenuDetails, ForgeMaterialNavMenuConfig> {
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
