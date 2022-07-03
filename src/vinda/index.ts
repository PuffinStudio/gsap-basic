import './style.scss'
import { gsap } from '../gsap'

// 设置默认值
export const createVindaTimeline = () => {
  gsap.to('.blue h1', {
    rotate: '180deg',
    repeat: 4,

    // duration: 5000,
  })
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.orange',
      start: 'center center',
      scrub: true,
      pin: true,
      markers: true,
    },
  })
  tl.fromTo(
    '#orange-content',
    {
      y: -500,
      scale: 0.5,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
    },
  )
  tl.to(
    '#orange-content code',
    {
      fontSize: '30px',
      color: '#fff',
    },
    1,
  )
}
