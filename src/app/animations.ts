import {
  AUTO_STYLE,
  AnimationTriggerMetadata,
  animate,
  animation,
  group,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { IAnimationOptions } from './iAnimationOptions';
import { useAnimationIncludingChildren } from './use-animation-including-children';

const bounce = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({
          visibility: AUTO_STYLE,
          transform: 'translate3d(0, 0, 0)',
          easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          offset: 0,
        }),
        style({
          transform: 'translate3d(0, 0, 0)',
          easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          offset: 0.2,
        }),
        style({
          transform: 'translate3d(0, -30px, 0)',
          easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          offset: 0.4,
        }),
        style({
          transform: 'translate3d(0, -30px, 0)',
          easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
          offset: 0.43,
        }),
        style({
          transform: 'translate3d(0, 0, 0)',
          easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
          offset: 0.53,
        }),
        style({
          transform: 'translate3d(0, -15px, 0)',
          easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          offset: 0.7,
        }),
        style({
          transform: 'translate3d(0, 0, 0)',
          easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
          offset: 0.8,
        }),
        style({
          transform: 'translate3d(0, -4px, 0)',
          easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          offset: 0.9,
        }),
        style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 }),
      ])
    ),
  ]);

const bounceIn = () =>
  animation(
    group([
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({
            transform: 'scale3d(0.3, 0.3, 0.3)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            offset: 0,
          }),
          style({
            transform: 'scale3d(1.1, 1.1, 1.1)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            offset: 0.2,
          }),
          style({
            transform: 'scale3d(0.9, 0.9, 0.9)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            offset: 0.4,
          }),
          style({
            transform: 'scale3d(1.03, 1.03, 1.03)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            offset: 0.6,
          }),
          style({
            transform: 'scale3d(0.97, 0.97, 0.97)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            offset: 0.8,
          }),
          style({
            transform: 'scale3d(1, 1, 1)',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            offset: 1,
          }),
        ])
      ),
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({
            visibility: 'visible',
            opacity: 1,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            offset: 0,
          }),
          style({
            opacity: 1,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            offset: 0.6,
          }),
          style({
            opacity: 1,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            offset: 1,
          }),
        ])
      ),
    ])
  );

const DEFAULT_DURATION = 1000;

export const highlightedStateTrigger = trigger('highlightedState', [
  state(
    'default',
    style({
      border: '2px solid #B2B6FF',
    })
  ),
  state(
    'highlighted',
    style({
      border: '4px solid #B2B6FF',
      filter: 'brightness(92%)',
    })
  ),
  transition('default => highlighted', [
    animate(
      '200ms ease-out',
      style({
        transform: 'scale(1.02)',
      })
    ),
    animate(200),
  ]),
]);

export const showStateTrigger = trigger('showState', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(
      300,
      style({
        opacity: 1,
      })
    ),
  ]),
  transition(':leave', [
    animate(
      300,
      style({
        opacity: 0,
      })
    ),
  ]),
]);

export function bounceOnEnterAnimation(
  options?: IAnimationOptions
): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'bounceOnEnter', [
    transition(
      ':enter',
      [
        style({ visibility: 'hidden' }),
        style({ 'transform-origin': 'center bottom' }),
        ...useAnimationIncludingChildren(bounce(), options),
      ],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION,
        },
      }
    ),
  ]);
}

export function bounceOnEnterAnimation2(
  options?: IAnimationOptions
): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'bounceOnEnter2', [
    transition(
      '* => checked',
      animation([
        style({ visibility: 'hidden' }),
        ...useAnimationIncludingChildren(bounceIn(), options),
      ]),
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION,
        },
      }
    ),
  ]);
}

export const checkButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate(
      '400ms ease-in',
      style({
        transform: 'scale(0.4)',
      })
    ),
  ]),
]);

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({opacity: 0, width: 0}),
    animate('400ms ease-out', keyframes([
      style({offset: 0,opacity: 0, width: 0}),
      style({offset: 0.8, opacity: 0.5, width: '*'}),
      style({offset: 1, opacity: 1, width: '*'}),
    ])),
  ]),
  transition(':leave', [
    animate('400ms cubic-bezier(.12,.96,.92,.22)', style({ opacity: 0, width: 0 }))
  ]),
]);
