import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InfoBlocksComponent } from './info-blocks/info-blocks.component';
import { HeadingCompComponent } from './heading-comp/heading-comp.component';
import { NavCompComponent } from './nav-comp/nav-comp.component';

@NgModule({
  declarations: [AppComponent, InfoBlocksComponent, HeadingCompComponent, NavCompComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
