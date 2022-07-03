import './style.scss'
import gsap from '../gsap'

// 设置默认值
export const heroTimeline = gsap
  .timeline({
    defaults: {
      duration: 1,
      ease: 'elastic',
    },
  })
  .to('#app h3', {
    opacity: 1,
    scale: 1.4,
  })
  .to('#app .desc', {
    color: 'red',
  })
  .to('#app .button', {
    opacity: 1,
    color: 'green',
  })
  .to('#cats .cat', {
    x: 100,
    scale: 1.5,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.cat',
      scrub: true,
    },
  })
