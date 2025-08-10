import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
  animateChild,
} from '@angular/animations';

/**
 * Modern, professional route transition:
 * - Leave: subtle fade + lift + slight scale down + light blur
 * - Enter: soft fade + settle + remove blur with a springy ease
 */
export const routeTransition = trigger('routeTransition', [
  transition('* <=> *', [
    style({ position: 'relative' }),

    // Ensure both pages stack for cross-fade
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          width: '100%',
          inset: 0,
        }),
      ],
      { optional: true }
    ),

    group([
      // Animate the leaving view
      query(
        ':leave',
        [
          style({
            opacity: 1,
            transform: 'translateY(0) scale(1)',
            filter: 'blur(0px)',
            willChange: 'opacity, transform, filter',
          }),
          animate(
            '280ms cubic-bezier(0.4, 0, 0.2, 1)',
            style({
              opacity: 0,
              transform: 'translateY(-8px) scale(0.985)',
              filter: 'blur(2px)',
            })
          ),
        ],
        { optional: true }
      ),

      // Animate the entering view
      query(
        ':enter',
        [
          style({
            opacity: 0,
            transform: 'translateY(8px) scale(0.995)',
            filter: 'blur(2px)',
            willChange: 'opacity, transform, filter',
          }),
          animate(
            '420ms 80ms cubic-bezier(0.22, 1, 0.36, 1)',
            style({
              opacity: 1,
              transform: 'translateY(0) scale(1)',
              filter: 'blur(0px)',
            })
          ),
          // Run any nested animations after the view settles
          query('@*', animateChild(), { optional: true }),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
