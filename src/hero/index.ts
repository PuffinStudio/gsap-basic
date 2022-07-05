import './style.scss'
import { gsap, lottie } from '../gsap'

// 设置默认值
export const createHeroTimeline = () => {
  const heroGroup = document.getElementById('heroGroup')
  const intros = heroGroup!.querySelectorAll('.intro-copy')
  intros.forEach((ele) => {
    const icon = ele.querySelector('.icon')
    const pathName = icon!.getAttribute('data-lottie')
    let timeObj = { currentFrame: 0 }
    let anim = lottie.loadAnimation({
      container: icon as any,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: `src/hero/${pathName}_large_2x.json`,
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
