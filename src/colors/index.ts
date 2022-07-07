import './style.scss'
import { gsap } from '../gsap'

const colorsBtns = document.querySelectorAll('#colors .color-btn')
const colorsItems = document.querySelectorAll('#colors .item-container .item')
colorsBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (!btn.classList.contains('active')) {
      console.log({ index })
      colorsBtns.forEach((b) => b.classList.remove('active'))
      btn.classList.toggle('active')

      colorsItems.forEach((item, i) => {
        if (index === i) {
          item.classList.add('active')
          gsap
            .timeline()
            .to(item, { zIndex: 2 })
            .from(item, { opacity: 0, duration: 0.7, ease: 'power1.out' }, '<')
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
