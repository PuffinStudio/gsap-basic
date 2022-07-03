import './style.scss'
import gsap from '../gsap'

// 设置默认值
export const createHeroTimeline = () =>
  gsap
    .timeline({
      defaults: {
        duration: 1,
        ease: 'elastic',
      },
    })
    .to('#intro h3', {
      opacity: 1,
      scale: 1.4,
    })
    .to('#intro .desc', {
      color: 'red',
    })
    .to('#intro .button', {
      opacity: 1,
      color: 'green',
    })
