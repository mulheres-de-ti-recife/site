// This is where it all goes :)

// Toggles mobile menu
function toggleMenuClass() {
  var asideElement = document.querySelector('body');

  asideElement.classList.toggle('menu-is-open');
}


// Adds menu animation on scroll
const sectionsIds = [
  'brochure',
  'research',
  'know-more'
]

const sections = sectionsIds.map((id) => document.getElementById(id))
const links = document.querySelectorAll('[data-target-section]')

function scrollListener() {
  const windowHeight = window.innerHeight
  const offset = 80

  const scrollY = window.scrollY + windowHeight - offset

  const heights = sections.map((section) => section.offsetTop)

  const sectionIndex = heights.findIndex((height, index, _heights) => {
    if (scrollY >= height) {
      const nextHeight = _heights[index + 1]

      if (nextHeight && scrollY < nextHeight) return true
      if (!nextHeight) return true
    }

    return false
  })

  const id = sectionsIds[sectionIndex]

  links.forEach((linkElement) => {
    if (linkElement.dataset.targetSection === id) linkElement.classList.add('active')
    else linkElement.classList.remove('active')
  })
}

// Adds scroll animation on click
function addClickBehaviorToMenuLinks() {
  links.forEach((link) => link.addEventListener('click', (event) => {
    event.preventDefault()
    const id = link.dataset.targetSection
    const section = document.getElementById(id)

    section.scrollIntoView({ behavior: 'smooth' })
  }))
}

addClickBehaviorToMenuLinks()
window.addEventListener('scroll', scrollListener)
window.addEventListener('resize', scrollListener)