const CLASSES = {
  activeMenu: 'active'
}

const EVENTS = {
  down: 'mousedown',
  leave: 'mouseleave',
  move: 'mousemove',
  scroll: 'scroll',
  up: 'mouseup',
  wheel: 'wheel'
}

const SELECTORS = {
  component: '.js-pills',
  pager: '.slick-dots'
}

const menuInstance = document.querySelector(SELECTORS.component)

class PillNav {
  constructor (context) {
    this.context = context.querySelector(SELECTORS.pager)
    this.isDown = false
    this.startX = 0
    this.scrollLeft = 0
  }

  init () {
    this.subscribe()
  }

  subscribe () {
    this.context.addEventListener(EVENTS.down, this.startEvent.bind(this))
    this.context.addEventListener(EVENTS.move, this.moveSlider.bind(this))
    this.context.addEventListener(EVENTS.wheel, this.handleScroll.bind(this))
    this.context.addEventListener(EVENTS.leave, this.leaveNav.bind(this))
    this.context.addEventListener(EVENTS.up, this.leaveNav.bind(this))
  }

  startEvent (e) {
    this.isDown = true
    this.context.classList.add(CLASSES.activeMenu)
    this.startX = e.pageX - this.context.offsetLeft
    this.scrollLeft = this.context.scrollLeft
  }

  leaveNav () {
    this.isDown = false
    this.context.classList.remove(CLASSES.activeMenu)
  }

  moveSlider (e) {
    if (!this.isDown) return
    e.preventDefault()

    const x = e.pageX - this.context.offsetLeft
    const walk = (x - this.startX) * 3
    this.context.scrollLeft = this.scrollLeft - walk
  }

  handleScroll (e) {
    e.preventDefault()

    this.context.scrollBy({
      left: e.deltaY < 0 ? -130 : 130
    })
  }
}

if (menuInstance) {
  const pillMenu = new PillNav(menuInstance)
  pillMenu.init()
}
