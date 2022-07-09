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

  //   const pic9Clip = section!.querySelector('.pic9-clip')
  const pic9 = section!.querySelector('.pic9')
  const phoneBox = section!.querySelector('.pic-phone')
  const phoneBar = section!.querySelector('.pic-bar')

  gsap.to(pic9, {
    duration: 0,
    scale: 1.4,
  })
  gsap.to(phoneBox, {
    duration: 0,
    scale: 3.4,
  })

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.memories-mode',
        start: '-150',
        // end: 'bottom 90%',
        markers: true,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    })
    .to(phoneBox, { scale: 1, yPercent: -50, duration: 1.6 })
    .to(pic9, { borderRadius: 100, duration: 0 }, '<')
    .to(pic9, { scale: 0.45, duration: 1.6 }, '<+0.05')
    .from(phoneBar, { opacity: 0, duration: 1 }, '-=0.2')
    .from('.memories-text', { opacity: 0, y: 50, duration: 0.2 })
}
