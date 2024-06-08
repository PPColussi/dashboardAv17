import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  template: `
    <app-title [title]="currentFramework()"/>


    <pre> {{frameworkAsSignal() | json}} </pre>
    <pre> {{frameworkAsProperty | json}} </pre>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change Detection - ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

constructor() {

  setTimeout(() => {

    this.frameworkAsSignal.update( value => ({
      ...value,
      name: 'Por la Horda!!!'
    }) )
    console.log('Done')
  }, 3000);

}
}