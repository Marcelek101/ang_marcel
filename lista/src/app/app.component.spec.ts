import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component'; // Zmieniono z `app.routes` na `app.component`


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent], // Deklarujemy komponent, zamiast dodawać do imports
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have a title in config`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Sprawdzamy, czy właściwość `config` istnieje i czy zawiera `title`
    expect(app.config?.['title']).toEqual('Lista zadań');
  });

  it('should render title in the template', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Renderujemy szablon
    const compiled = fixture.nativeElement as HTMLElement;

    // Sprawdzamy zawartość elementu, który wyświetla tytuł
    expect(compiled.querySelector('span.brand-logo')?.textContent).toContain('LISTA ZADAŃ');
  });
});
