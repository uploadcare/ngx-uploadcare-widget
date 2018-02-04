import { TestBed, async } from '@angular/core/testing';
import { UcWidgetComponent } from './ucWidget.component';
describe('Widget Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UcWidgetComponent
      ],
    }).compileComponents();
  }));
  it('should initialize the component', async(() => {
    const fixture = TestBed.createComponent(UcWidgetComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
  it(`should have as publickey`, async(() => {
    const fixture = TestBed.createComponent(UcWidgetComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp.publicKey).toEqual('demopublickey');
  }));
  // it('should render input tag', async(() => {
  //   const fixture = TestBed.createComponent(UcWidgetComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('input').attr('public-key')).toContain('publickey');
  // }));
});
