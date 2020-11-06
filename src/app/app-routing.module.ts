import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataResolver } from 'src/app/core/resolvers/data.resolver';

const routes: Routes = [
	{
		path: '',
		resolve: { testData: DataResolver },
		loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			initialNavigation: 'enabled'
		})
	],
	exports: [RouterModule],
	providers: [DataResolver]
})
export class AppRoutingModule {}
