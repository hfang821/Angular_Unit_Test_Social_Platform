import { AppComponent } from "./app.component";

describe('App Component', () => {
  it('should have a defined title', () => {
    const component = new AppComponent();
    expect(component.title).toBeDefined();
  });
});