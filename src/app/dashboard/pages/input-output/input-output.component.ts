import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { Product } from '@interfaces/product.interface';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [
    CommonModule, ProductCardComponent
  ],
  templateUrl: './input-output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent implements OnDestroy {

  public products = signal<Product[]>([
    {
      id: 1,
      name: 'item 1',
      quantity: 0,
    },
    {
      id: 2,
      name: 'item 2',
      quantity: 0,
      },
      ]);

  private intervalSuscription = interval(1000).pipe(
    tap( () => {
      this.products.update( (products) => [
        ...products,
        {
          id: products.length + 1,
          name: `item ${products.length + 1}`,
          quantity: 0,
        }
      ] );
    } ),
    take( 7 )
    ).subscribe();

    ngOnDestroy(): void {
      this.intervalSuscription.unsubscribe();
    }

    public updateProduct( product: Product, quantity: number ) {
      this.products.update( (products) =>
        products.map( (p) => (p.id === product.id ? { ...p, quantity } : p)) );
    }


}
