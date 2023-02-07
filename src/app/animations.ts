import {
  trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';


// Routable animations
export const fadeInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter', [
        style({ opacity: 1 })
      ], { optional: true }),
      style({ opacity: 0 }),
      animate('.5s ease-in-out', style({ opacity: 1 })),
    ])
  ])
