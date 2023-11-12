import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { DxButtonModule, DxDataGridModule, DxFileUploaderModule, DxFormModule, DxListModule, DxMultiViewModule, DxNumberBoxModule, DxPieChartModule, DxProgressBarModule, DxTextAreaModule, DxTextBoxModule, DxTreeViewModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShushiListComponent } from './shushi-list/shushi-list.component';
import { SushiService } from './sushi.service';
import { AddSushiComponent } from './add-sushi/add-sushi.component';
import { UpDateComponent } from './up-date/up-date.component';
@NgModule({
  declarations: [
    AppComponent,
    ShushiListComponent,
    AddSushiComponent,
    UpDateComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    DxTextBoxModule,
    DxFormModule,
    DxTextAreaModule,
    DxNumberBoxModule,
    CommonModule,
    DxFileUploaderModule,
    DxProgressBarModule,
    FormsModule,
    DxButtonModule,
    DxDataGridModule,
    HttpClientModule,
    DxMultiViewModule,
    DxListModule,
    DxTreeViewModule,
    DxFormModule,
    DxListModule,
    DxPieChartModule,
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    SushiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
