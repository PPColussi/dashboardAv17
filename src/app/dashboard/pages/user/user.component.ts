import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from '@interfaces/req-response';
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
  ],
  template: `

    <app-title [title]="userTitle()"/>


    @if ( user() ) {

      <section>
        <img [srcset]="user()!.avatar" [alt]="user()!.first_name">

        <div>
          <h3>{{ user()?.first_name }} {{user()?.last_name}}</h3>
          <p>{{ user()?.email }}</p>
        </div>

      </section>
    } @else {
      <p>Muerde el Acero!!!</p>
    }


  `
})
export default class UserComponent {

  private route = inject( ActivatedRoute );
  private userService = inject( UsersService )

  // public user = signal<User | undefined>(undefined);

  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) => this.userService.getUserById( id ) )
    )
  )

  public userTitle = computed( () => {

    if( this.user() ) {
      return `User Information: ${ this.user()?.first_name } ${ this.user()?.last_name }`
    }
    return 'User Infomation'
  } )


  // constructor() {
  //   this.route.params.subscribe( params =>{
  //     console.log({params});
  //   } )
  // }
}
