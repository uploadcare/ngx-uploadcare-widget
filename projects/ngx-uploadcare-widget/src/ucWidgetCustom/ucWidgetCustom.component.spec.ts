import { TestBed, async } from '@angular/core/testing';
import { UcWidgetCustomComponent } from './ucWidgetCustom.component';
describe('Custom Widget Component', () => {
  const publicKey = 'b2a5dd7667f04ddaac62';
  const multiple = false;
  const multipleMax = 1;
  const multipleMin = 10;
  const imagesOnly = true;
  const previewStep = true;
  const crop = '100x100';
  const imageShrink = '1000x1000';
  const clearable = true;
  const tabs = 'url';
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UcWidgetCustomComponent
      ],
    }).compileComponents();
  }));

  it('should initialize the component', async(() => {
    const fixture = TestBed.createComponent(UcWidgetCustomComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));

  it(`should have as default value of publickey`, async(() => {
    const fixture = TestBed.createComponent(UcWidgetCustomComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp.publicKey).toEqual('demopublickey');
  }));

  it('call of "openDialog()" successfull', async(() => {
    const fixture = TestBed.createComponent(UcWidgetCustomComponent);
    const component = fixture.debugElement.componentInstance;
    initComponent(component);
    fixture.detectChanges();
    component.openDialog();
    expect(1).toBe(1);
  }));
});
