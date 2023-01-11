import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ngxInputRegulateModule } from 'ngx-input-regulate';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/sidebar/sidebar-item/sidebar-item.component';
import { PaymentComponent } from './payment/payment.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask, IConfig} from 'ngx-mask';


@NgModule({
  declarations: [
    AppComponent,
    CardMenuComponent,
    CardProductComponent,
    SidebarComponent,
    SidebarItemComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ngxInputRegulateModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
