import { SectionTitle } from '../SectionTitle'
import * as S from './styles'

import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { Project } from './Project'
const PROJECTS = [
  {
    id: '01',
    title: 'Minhas Medicações',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In porro excepturi, quibusdam deserunt hic provident? Laborum vero, nulla illo voluptatem ad maiores error quasi perspiciatis blanditiis, non voluptatum saepe voluptas?',
    image: '/coffe.png',
    deploy_url: '#',
    repo_url: '#',
  },
  {
    id: '02',
    title: 'Coffe Delivery',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In porro excepturi, quibusdam deserunt hic provident? Laborum vero, nulla illo voluptatem ad maiores error quasi perspiciatis blanditiis, non voluptatum saepe voluptas?',
    image: '/coffe.png',
    deploy_url: '#',
    repo_url: '#',
  },
  {
    id: '03',
    title: 'Game News',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In porro excepturi, quibusdam deserunt hic provident? Laborum vero, nulla illo voluptatem ad maiores error quasi perspiciatis blanditiis, non voluptatum saepe voluptas?',
    image: '/coffe.png',
    deploy_url: '#',
    repo_url: '#',
  },
  {
    id: '04',
    title: 'App do Montanha',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In porro excepturi, quibusdam deserunt hic provident? Laborum vero, nulla illo voluptatem ad maiores error quasi perspiciatis blanditiis, non voluptatum saepe voluptas?',
    image: '/coffe.png',
    deploy_url: '#',
    repo_url: '#',
  },
]

export const Projects = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1,
      origin: 'center',
      spacing: 100,
    },

    loop: true,
  })

  function handlePrev() {
    instanceRef.current?.prev()
  }

  function handleNext() {
    instanceRef.current?.next()
  }

  return (
    <S.Container>
      <SectionTitle title="Projetos" subtitle="Projetos recentes" />

      <S.SliderContainer>
        <button onClick={handlePrev}>
          <AiOutlineLeft />
        </button>
        <div ref={sliderRef} className="keen-slider">
          {PROJECTS.map((project) => (
            <Project
              className="keen-slider__slide"
              key={project.id}
              {...project}
            ></Project>
          ))}
        </div>
        <button onClick={handleNext}>
          <AiOutlineRight />
        </button>
      </S.SliderContainer>
    </S.Container>
  )
}
