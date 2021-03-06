import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './Share/content/content.component';
import { FooterComponent } from './Share/footer/footer.component';
import { HeaderComponent } from './Share/header/header.component';
import { LeftHomeComponent } from './Share/left-home/left-home.component';
import { NewsletterComponent } from './Share/newsletter/newsletter.component';
import { OtherProductComponent } from './Share/other-product/other-product.component';
import { RightHomeComponent } from './Share/right-home/right-home.component';
import { SlideHomeComponent } from './Share/slide-home/slide-home.component';
import { BlogComponent } from './blog/blog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { KnowledgeCeramicsComponent } from './knowledge-ceramics/knowledge-ceramics.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ServicesComponent } from './services/services.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { PolicyComponent } from './policy/policy.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { NgxPayPalModule } from 'ngx-paypal';
// import { ProductModule } from './product/product.module'

// const routes: Routes = [
//   {
//     path: 'product-module',
//     loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
//   },
// ];
@NgModule({
  declarations: [HomeComponent, ContentComponent, FooterComponent, HeaderComponent, LeftHomeComponent, NewsletterComponent, OtherProductComponent, RightHomeComponent, SlideHomeComponent, BlogComponent,
  CheckoutComponent, ContactComponent, IntroductionComponent, KnowledgeCeramicsComponent,ServicesComponent,
  ListProductComponent, ProductDetailComponent, PolicyComponent, BlogDetailComponent, 
   ],
  imports: [
    NgxPayPalModule,
    CommonModule,
    BrowserModule,
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    // ProductModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'list-product-client',
        component: ListProductComponent,
      },
      {
        path: 'product-detail-client/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'blog-detail/:id',
        component: BlogDetailComponent,
      },
      {
        path: 'client-blog',
        component: BlogComponent,
      },
      {
        path: 'client-checkout',
        component: CheckoutComponent,
      },
      {
        path: 'contact-client',
        component: ContactComponent,
      },
      {
        path: 'introduction-client',
        component: IntroductionComponent,
      },
      {
        path: 'knowleage-ceramics-client',
        component: KnowledgeCeramicsComponent,
      },
      {
        path: 'services-client',
        component: ServicesComponent,
      },
      {
        path: 'policy',
        component: PolicyComponent,
      },
    ]),
  ]
})
export class ClientModule { }
