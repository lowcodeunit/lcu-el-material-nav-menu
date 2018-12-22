import { NgModule } from '@angular/core';
import { DndModule } from '@beyerleinf/ngx-dnd';
import { FathymSharedModule } from '@lcu/hosting';
import { BaseDisplayModule } from '@lcu/elements';
import { ForgeMaterialNavMenuBuilderComponent } from './material-nav-menu-builder/material-nav-menu-builder.component';
import { ForgeMaterialNavMenuMarketplaceComponent } from './material-nav-menu-marketplace/material-nav-menu-marketplace.component';
import { ForgeMaterialNavMenuRenderComponent } from './material-nav-menu-render/material-nav-menu-render.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatSlideToggleModule, MatToolbarModule } from '@angular/material';

export class ForgeMaterialNavMenuDisplayModule extends BaseDisplayModule {
	public Builder() {
		return ForgeMaterialNavMenuBuilderComponent;
	}

	public Marketplace() {
		return ForgeMaterialNavMenuMarketplaceComponent;
	}

	public Render() {
		return ForgeMaterialNavMenuRenderComponent;
	}
}

var comps = [
	ForgeMaterialNavMenuBuilderComponent,
	ForgeMaterialNavMenuMarketplaceComponent,
	ForgeMaterialNavMenuRenderComponent,
];

@NgModule({
	imports: [
		FathymSharedModule,
		DndModule,
		MatButtonModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatMenuModule,
		MatSlideToggleModule,
		MatToolbarModule,
	],
	declarations: [
		...comps,
	],
	exports: [
		...comps,
	],
	entryComponents: [
		...comps,
	]
})
export class ForgeMaterialNavMenuModule { }
