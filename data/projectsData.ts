interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Dev Toolbox',
    description: 'Your coding partner to improve your efficiency.',
    imgSrc: '/static/images/dev-toolbox-logo.png',
    href: 'https://toolbox.zbw-zbw.cn',
  },
  {
    title: 'Notes',
    description: 'Record your thoughts and ideas.',
    imgSrc: '/static/images/logo.png',
    href: 'https://notes.zbw-zbw.cn',
  },
]

export default projectsData
