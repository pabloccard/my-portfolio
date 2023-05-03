'use-client'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import * as S from './styles'
import coffe from '../../assets/coffe-delivery.png'

import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa'
import { useState } from 'react'

const PROJECTS = [
  {
    id: '01',
    title: 'Minhas Medicações',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, dolor quae! Vel id sunt vitae fugit sint illo veritatis aut animi molestiae! Modi, officiis voluptatibus dolores nemo ipsam earum iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sunt tempore non error ducimus tenetur iusto accusantium saepe minima esse sapiente enim ea corporis recusandae soluta facere, fugiat consequuntur deleniti! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quam qui amet reiciendis est. Iste velit distinctio dolorum, nemo autem esse rerum cupiditate. Quae velit, accusantium voluptatibus aspernatur eveniet laboriosam?',
    img: coffe,
  },
  {
    id: '02',
    title: 'Coffe Delivery',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, dolor quae! Vel id sunt vitae fugit sint illo veritatis aut animi molestiae! Modi, officiis voluptatibus dolores nemo ipsam earum iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sunt tempore non error ducimus tenetur iusto accusantium saepe minima esse sapiente enim ea corporis recusandae soluta facere, fugiat consequuntur deleniti! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quam qui amet reiciendis est. Iste velit distinctio dolorum, nemo autem esse rerum cupiditate. Quae velit, accusantium voluptatibus aspernatur eveniet laboriosam?',
    img: coffe,
  },
  {
    id: '03',
    title: 'Game News',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, dolor quae! Vel id sunt vitae fugit sint illo veritatis aut animi molestiae! Modi, officiis voluptatibus dolores nemo ipsam earum iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sunt tempore non error ducimus tenetur iusto accusantium saepe minima esse sapiente enim ea corporis recusandae soluta facere, fugiat consequuntur deleniti! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quam qui amet reiciendis est. Iste velit distinctio dolorum, nemo autem esse rerum cupiditate. Quae velit, accusantium voluptatibus aspernatur eveniet laboriosam?',
    img: coffe,
  },
  {
    id: '04',
    title: 'App do Montanha',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, dolor quae! Vel id sunt vitae fugit sint illo veritatis aut animi molestiae! Modi, officiis voluptatibus dolores nemo ipsam earum iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sunt tempore non error ducimus tenetur iusto accusantium saepe minima esse sapiente enim ea corporis recusandae soluta facere, fugiat consequuntur deleniti! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quam qui amet reiciendis est. Iste velit distinctio dolorum, nemo autem esse rerum cupiditate. Quae velit, accusantium voluptatibus aspernatur eveniet laboriosam?',
    img: coffe,
  },
]

export const Projects = () => {
  const [currentProject, setCurrentProject] = useState(PROJECTS[0])

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1.2,
      spacing: 16,
      origin: 'center',
    },
    range: {
      align: true,
    },

    slideChanged() {
      const index = instanceRef.current?.track.details.abs
      const relative = instanceRef.current?.track.absToRel(index || 0)

      if (relative !== undefined) {
        setCurrentProject(PROJECTS[relative])
      }
    },

    loop: true,

    breakpoints: {
      '(min-width: 1024px)': {
        slides: {
          perView: 2.2,
          spacing: 16,
        },
      },
    },
  })

  function handleClick(id: string) {
    const index = PROJECTS.findIndex((el) => el.id === id)

    if (index !== -1) {
      instanceRef.current?.moveToIdx(index)
      setCurrentProject(PROJECTS[index])
    }
  }

  return (
    <S.Container>
      <S.Content>
        <h3>Projetos</h3>
        <h2>{currentProject.title}</h2>

        <S.SliderContainer>
          <S.Slider ref={sliderRef} className="keen-slider">
            {PROJECTS.map((project) => (
              <S.ProjectCard
                onClick={() => handleClick(project.id)}
                className={`keen-slider__slide ${
                  project.id === currentProject.id ? 'active' : ''
                }`}
                key={project.id}
                src={project.img}
                width={1920}
                alt=""
              ></S.ProjectCard>
            ))}
          </S.Slider>
        </S.SliderContainer>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
          necessitatibus harum voluptatum tenetur deserunt repellendus
          aspernatur consequuntur ea. Cum iure enim voluptatum earum a repellat
          aperiam pariatur beatae quo sunt.
        </p>

        <S.Actions>
          <button>
            Acessar
            <FaExternalLinkSquareAlt />
          </button>
          <button>
            Repositório
            <FaGithub />
          </button>
        </S.Actions>
      </S.Content>

      {/* <Content>
        <h3>PROJETOS</h3>

        <Slider ref={sliderRef} className="keen-slider">
          {projects.map((project) => {
            return (
              <SliderItem key={project.title} className="keen-slider__slide">
                <Image src={frame} alt="" height={260} />

                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <ButtonsContainer>
                    <button>Acessar</button>
                    <button>Repositório</button>
                  </ButtonsContainer>
                </div>
              </SliderItem>
            )
          })}
        </Slider>
      </Content> */}
    </S.Container>
  )
}
