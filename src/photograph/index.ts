import './style.scss'
import { gsap } from '../gsap'

export const createPhotographTimeline = () => {
  const section = document.querySelector('#photograph')
  const intro = section!.querySelector('.photograph-intro')
  const introTitle = intro!.querySelector('.title')
  const pictures = section!.querySelectorAll('.picture')
  const picList = [introTitle, ...Array.from(pictures)]
  const texts = section!.querySelectorAll('.ani-text')

  picList.forEach((ele) => {
    gsap.from(ele, {
      scrollTrigger: {
        trigger: ele,
        toggleActions: 'play none none reverse',
        start: 'top 80%',
        end: 'bottom 15%',
        // markers: true,
      },
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: 'power1',
    })
  })

  texts.forEach((ele) => {
    gsap.from(ele, {
      scrollTrigger: {
        trigger: ele,
        toggleActions: 'play none none reverse',
        start: 'top 80%',
        end: 'bottom 15%',
        // markers: true,
      },
      opacity: 0,
      duration: 0.5,
      ease: 'power3',
    })
  })
}
