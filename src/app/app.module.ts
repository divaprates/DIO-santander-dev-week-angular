import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SvgComponentsModule } from './modules/svg-components.module';

import { AppComponent } from './app.component';
import { AmountBoxComponent } from './components/amount-box/amount-box.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { CarouselItemsComponent } from './components/carousel-items/carousel-items.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		CardBoxComponent,
		CarouselItemsComponent,
		AmountBoxComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SvgComponentsModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
