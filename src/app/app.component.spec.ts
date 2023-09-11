import { Location } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent, routes } from '@app';
import { HeaderComponent } from '@layout';
import { ApiService } from '@services';
import { ProductListComponent } from '@views';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderComponent, ProductListComponent],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [ApiService, HttpClient, HttpHandler],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    location = TestBed.inject(Location);
    router = TestBed.inject(Router);
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'shopping-cart'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('shopping-cart');
  });

  it('navigate to "" redirects you to /products', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/products');
  }));

  it('should render title', fakeAsync(() => {
    router.navigate(['']);
    tick();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Products');
  }));
});
