import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, effect, input, output } from '@angular/core';
import { Product } from '@interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  // de esta manera se puede utilizar el este decorador en versiones anteriores de angular!

  // @Input({
  //   required: true,
  //   })
  //   product!: Product

  // nueva forma de aplicar el input en angular 18

  public product = input.required<Product>();

  // de esta manera se puede utilizar este decorador en versiones anteriores de angular!
  // @Output()
  // public onIncrementQuantity = new EventEmitter<number>();

  public onIncrementQuantity = output<number>()

  public incrementQuantity():void {
    this.onIncrementQuantity.emit( this.product().quantity + 1 )
  }

  public loginEffect = effect( () => {
    console.log(this.product().name)
  } )
}
