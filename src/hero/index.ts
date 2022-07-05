import './style.scss'
import camera from './camera_large_2x.json?url'
import durability from './durability_large_2x.json?url'
import chip from './chip_large_2x.json?url'
import battery from './battery_large_2x.json?url'
import { gsap, lottie } from '../gsap'

const jsonList: any = {
  camera,
  durability,
  chip,
  battery,
}
export const createHeroTimeline = () => {
  const heroGroup = document.getElementById('heroGroup')
  const intros = heroGroup!.querySelectorAll('.intro-copy')
  intros.forEach((ele) => {
    const icon = ele.querySelector('.icon')
    const name = icon!.getAttribute('data-lottie') || 'camera'
    let anim = lottie.loadAnimation({
      container: icon as any,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: jsonList[name],
    })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ele,
          start: 'top 80%',
          end: 'bottom 15%',
          markers: true,
          scrub: true,
          onUpdate: (self) => {
            const total = anim.totalFrames - 1
            const progress = self.progress * 3 * total
            anim.goToAndStop(progress > total ? total : progress, true)
          },
        },
      })
      .from(ele, { opacity: 0, duration: 2 })
      .to(ele, { opacity: 0, duration: 1 })
  })
}
