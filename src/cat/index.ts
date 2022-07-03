import './style.scss'
import gsap from '../gsap'

// 设置默认值
export const createCatTimeline = () =>
  gsap
    .timeline({
      defaults: {
        duration: 1,
        ease: 'elastic',
      },
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
