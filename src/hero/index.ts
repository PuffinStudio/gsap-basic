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
          end: 'bottom 40%',
          markers: true,
          scrub: true,
          toggleActions: 'play restart play reverse',
          onUpdate: (self) => {
            gsap.to(timeObj, {
              currentFrame: Math.floor(self.progress * (anim.totalFrames - 1)),
              onUpdate: () => {
                anim.goToAndStop(timeObj.currentFrame, true)
              },
              ease: 'expo',
            })
          },
        },
      })
      .from(ele, { opacity: 0 })
  })
}
