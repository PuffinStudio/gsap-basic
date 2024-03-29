import './style.scss'
import { gsap } from '../gsap'

const colorsBtns = document.querySelectorAll('#colors .color-btn')
const colorsContainer = document.querySelectorAll('#colors .item-container')
const colorsItems = document.querySelectorAll('#colors .item-container .item')
colorsBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (!btn.classList.contains('active')) {
      colorsBtns.forEach((b) => b.classList.remove('active'))
      btn.classList.toggle('active')

      colorsItems.forEach((item, i) => {
        if (index === i) {
          item.classList.add('active')
          gsap
            .timeline()
            .to(item, { zIndex: 2 })
            .from(
              item,
              { opacity: 0, duration: 0.6, ease: 'power1.inOut' },
              '<',
            )
        } else {
          if (item.classList.contains('active')) {
            gsap.to(item, { zIndex: 1 })
          } else {
            gsap.to(item, { zIndex: 0 })
          }
          item.classList.remove('active')
        }
      })
    }
  })
})

colorsItems.forEach((item) => {
  const box = item.querySelectorAll('.box')
  // gsap
  //   .timeline({
  //     scrollTrigger: {
  //       trigger: box,
  //       start: 'top 90%',
  //       end: 'bottom 10%',
  //       markers: true,
  //       scrub: true,
  //     },
  //   })
  //   .from(box, { y: 100, opacity: 0, stagger: 0.5, duration: 1 })
  const info1 = item.querySelector('.info1')
  const info2 = item.querySelector('.info2')
  const info3 = item.querySelector('.info3')
  const info4 = item.querySelector('.info4')
  const info5 = item.querySelector('.info5')
  gsap
    .timeline({
      scrollTrigger: {
        trigger: colorsContainer,
        start: 'top 70%',
        end: 'bottom 60%',
        // markers: true,
        scrub: true,
      },
    })
    .from(info1, { y: 100, opacity: 0 })
    .from(info2, { y: 100, opacity: 0 }, '-=0.3')
    .from(info3, { y: 100, opacity: 0 }, '+=0.2')
    .from(info4, { y: 100, opacity: 0 }, '-=0.3')
    .from(info5, { y: 100, opacity: 0 }, '+=0.5')
    // .addLabel('myLable', 0.4)
    .to(info5, { opacity: 1, duration: 0.3 })
})
