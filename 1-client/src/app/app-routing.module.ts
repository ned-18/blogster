import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', data: { navbars: true }, component: HomeComponent },
   {
    path: 'stories', data: { navbars: true }, loadChildren: () => import('./modules/stories/stories.module').then((m) => m.StoriesModule)
  },
  {
    path: 'join', data: {navbars: true}, loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule,)
  },
  {
    path: 'dashboard', data: {navbars: false}, canLoad:[AuthGuard], loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'contact', data: {navbars: true}, loadChildren: () => import('./modules/contact/contact.module').then((m) => m.ContactModule)
  },
  {
    path: 'post/:postId', data: { navbars: true }, loadChildren: () => import('./modules/blog-post/blog-post.module').then((m) => m.BlogPostModule)
  },
  {
    path: 'shop', data: { navbars: true }, loadChildren: () => import('./modules/shop/shop.module').then((m) => m.ShopModule)
  },
  {
    path: 'cart', data: { navbars: true }, canLoad:[AuthGuard], loadChildren: () => import('./modules/cart/cart.module').then((m) => m.CartModule)
  },
   {
    path: 'checkout', data: { navbars: true }, canLoad:[AuthGuard], loadChildren: () => import('./modules/checkout/checkout.module').then((m) => m.CheckoutModule)
  },
  {
    path: 'verification', data: {navbars: false}, loadChildren: () => import('./modules/email-verification/email-verification.module').then((m) => m.EmailVerificationModule)
  },
  {
    path: 'password', data: {navbars: false}, loadChildren: () => import('./modules/new-password/new-password.module').then((m) => m.NewPasswordModule)
  },
  { path: '**', data: {navbars: false}, component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
