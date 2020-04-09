import { TestBed, async, } from '@angular/core/testing';
import { PLATFORM_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UcWidgetComponent } from './ucWidget.component';
describe('Widget Component', () => {
  const publicKey = 'b2a5dd7667f04ddaac62';
  const multiple = false;
  const multipleMax = 1;
  const multipleMin = 10;
  const imagesOnly = true;
  const previewStep = true;
  const crop = '100x100';
  const imageShrink = '1000x1000';
  const clearable = true;
  const tabs = 'files url';
  const inputAcceptTypes = 'jpg';
  const preferredTypes = 'jpg';
  const systemDialog = true;
  const secureSignature = 'testSign';
  const secureExpire = 'never';
  const value = null;
  const cdnBase = null;
  const doNotStore = true;
  const validators = [];

  const initComponent = (component) => {
    component.publicKey = publicKey;
    component.multiple = multiple;
    component.multipleMax = multipleMax;
    component.multipleMin = multipleMin;
    component.imagesOnly = imagesOnly;
    component.previewStep = previewStep;
    component.crop = crop;
    component.imageShrink = imageShrink;
    component.clearable = clearable;
    component.tabs = tabs;
    component.inputAcceptTypes = inputAcceptTypes;
    component.preferredTypes = preferredTypes;
    component.systemDialog = systemDialog;
    component.secureSignature = secureSignature;
    component.secureExpire = secureExpire;
    component.value = value;
    component.cdnBase = cdnBase;
    component.doNotStore = doNotStore;
    component.validators = validators;
  };
  
  const initComponentMultiple = (component) => {
    initComponent(component);
    component.multiple = true;
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UcWidgetComponent
      ],
      providers: [
        { 
          provide: PLATFORM_ID,
          useValue: 'browser' 
        },
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  }));

  it('should initialize the component', () => {
    const fixture = TestBed.createComponent(UcWidgetComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();    
  });

  it(`should have as default value of publickey`, async(() => {
    const fixture = TestBed.createComponent(UcWidgetComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp.publicKey).toEqual('demopublickey');
  }));

  it('should init widget with public Key', async(() => {
    const fixture = TestBed.createComponent(UcWidgetComponent);
    fixture.debugElement.componentInstance.publicKey = publicKey;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').getAttribute('data-public-key')).toContain(publicKey);
  }));

  it('should init widget with all params', async(() => {
    const fixture = TestBed.createComponent(UcWidgetComponent);
    const component = fixture.debugElement.componentInstance;
    initComponent(component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').getAttribute('data-public-key')).toContain(publicKey);
    expect(compiled.querySelector('input').getAttribute('data-multiple')).toBeNull();
    expect(compiled.querySelector('input').getAttribute('data-multiple-max')).toContain(multipleMax);
    expect(compiled.querySelector('input').getAttribute('data-multiple-min')).toContain(multipleMin);
    expect(compiled.querySelector('input').getAttribute('data-images-only')).toContain(imagesOnly);
    expect(compiled.querySelector('input').getAttribute('data-preview-step')).toContain(previewStep);
    expect(compiled.querySelector('input').getAttribute('data-crop')).toContain(crop);
    expect(compiled.querySelector('input').getAttribute('data-image-shrink')).toContain(imageShrink);
    expect(compiled.querySelector('input').getAttribute('data-clearable')).toContain(clearable);
    expect(compiled.querySelector('input').getAttribute('data-tabs')).toContain(tabs);
    expect(compiled.querySelector('input').getAttribute('data-input-accept-types')).toContain(inputAcceptTypes);
    expect(compiled.querySelector('input').getAttribute('data-preferred-types')).toContain(preferredTypes);
    expect(compiled.querySelector('input').getAttribute('data-system-dialog')).toContain(systemDialog);
    expect(compiled.querySelector('input').getAttribute('data-secure-signature')).toContain(secureSignature);
    expect(compiled.querySelector('input').getAttribute('data-secure-expire')).toContain(secureExpire);
    expect(compiled.querySelector('input').getAttribute('data-cdn-base')).toBeNull();
    expect(compiled.querySelector('input').getAttribute('data-do-not-store')).toContain(doNotStore);
    expect(compiled.querySelector('input').getAttribute('value')).toBeNull();
  }));

  it('getters should return correct values', async(() => {
    const fixture = TestBed.createComponent(UcWidgetComponent);
    const component = fixture.debugElement.componentInstance;
    initComponent(component);
    fixture.detectChanges();
    expect(component.publicKey).toBe(publicKey);
    expect(component.multiple).toBe(multiple);
    expect(component.multipleMax).toBe(multipleMax);
    expect(component.multipleMin).toBe(multipleMin);
    expect(component.imagesOnly).toBe(imagesOnly);
    expect(component.previewStep).toBe(previewStep);
    expect(component.crop).toBe(crop);
    expect(component.imageShrink).toBe(imageShrink);
    expect(component.clearable).toBe(clearable);
    expect(component.tabs).toBe(tabs);
    expect(component.inputAcceptTypes).toBe(inputAcceptTypes);
    expect(component.preferredTypes).toBe(preferredTypes);
    expect(component.systemDialog).toBe(systemDialog);
    expect(component.secureSignature).toBe(secureSignature);
    expect(component.secureExpire).toBe(secureExpire);
    expect(component.cdnBase).toBeNull();
    expect(component.doNotStore).toBe(doNotStore);
    expect(component.value).toBeNull();
    expect(component.validators).toBe(validators);
  }));

  it('widget should reinit after attributes has changed', async(() => {
    const fixture = TestBed.createComponent(UcWidgetComponent);
    const component = fixture.debugElement.componentInstance;
    const newValue = 'd0e9a87e-9204-46a9-bedf-b4719d620c68';
    initComponent(component);
    fixture.detectChanges();
    component.value = newValue;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').getAttribute('value')).toEqual(newValue);
  }));

  it('call of "clearUploads()" successfull', async(() => {
    const fixture = TestBed.createComponent(UcWidgetComponent);
    const component = fixture.debugElement.componentInstance;
    initComponent(component);
    fixture.detectChanges();
    component.clearUploads();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').getAttribute('value')).toBeNull();
  }));

  it('call of "reset(true)" successfull', async(() => {
    const fixture = TestBed.createComponent(UcWidgetComponent);
    const component = fixture.debugElement.componentInstance;
    initComponent(component);
    fixture.detectChanges();
    component.reset(true);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').getAttribute('value')).toBeNull();
  }));

  it('call of "reset()" successfull', async(() => {
    const fixture = TestBed.createComponent(UcWidgetComponent);
    const component = fixture.debugElement.componentInstance;
    initComponent(component);
    fixture.detectChanges();
    component.reset();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').getAttribute('value')).toBeNull();
  }));

  it('call of "openDialog()" successfull', async(() => {
    const fixture = TestBed.createComponent(UcWidgetComponent);
    const component = fixture.debugElement.componentInstance;
    initComponent(component);
    fixture.detectChanges();
    component.openDialog();
    expect(1).toBe(1);
  }));
});
