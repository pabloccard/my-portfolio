'use-client'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import * as S from './styles'

import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa'
import { useState } from 'react'

const PROJECTS = [
  {
    title: 'Minhas Medicações',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, dolor quae! Vel id sunt vitae fugit sint illo veritatis aut animi molestiae! Modi, officiis voluptatibus dolores nemo ipsam earum iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sunt tempore non error ducimus tenetur iusto accusantium saepe minima esse sapiente enim ea corporis recusandae soluta facere, fugiat consequuntur deleniti! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quam qui amet reiciendis est. Iste velit distinctio dolorum, nemo autem esse rerum cupiditate. Quae velit, accusantium voluptatibus aspernatur eveniet laboriosam?',
  },
  {
    title: 'Coffe Delivery',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, dolor quae! Vel id sunt vitae fugit sint illo veritatis aut animi molestiae! Modi, officiis voluptatibus dolores nemo ipsam earum iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sunt tempore non error ducimus tenetur iusto accusantium saepe minima esse sapiente enim ea corporis recusandae soluta facere, fugiat consequuntur deleniti! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quam qui amet reiciendis est. Iste velit distinctio dolorum, nemo autem esse rerum cupiditate. Quae velit, accusantium voluptatibus aspernatur eveniet laboriosam?',
  },
  {
    title: 'Game News',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, dolor quae! Vel id sunt vitae fugit sint illo veritatis aut animi molestiae! Modi, officiis voluptatibus dolores nemo ipsam earum iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sunt tempore non error ducimus tenetur iusto accusantium saepe minima esse sapiente enim ea corporis recusandae soluta facere, fugiat consequuntur deleniti! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quam qui amet reiciendis est. Iste velit distinctio dolorum, nemo autem esse rerum cupiditate. Quae velit, accusantium voluptatibus aspernatur eveniet laboriosam?',
  },
  {
    title: 'App do Montanha',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, dolor quae! Vel id sunt vitae fugit sint illo veritatis aut animi molestiae! Modi, officiis voluptatibus dolores nemo ipsam earum iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sunt tempore non error ducimus tenetur iusto accusantium saepe minima esse sapiente enim ea corporis recusandae soluta facere, fugiat consequuntur deleniti! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quam qui amet reiciendis est. Iste velit distinctio dolorum, nemo autem esse rerum cupiditate. Quae velit, accusantium voluptatibus aspernatur eveniet laboriosam?',
  },
]

export const Projects = () => {
  const [currentProject, setCurrentProject] = useState(PROJECTS[0])

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 'auto',
      spacing: 16,
    },
    slideChanged() {
      const index = instanceRef.current?.track.details.abs

      if (index !== undefined) {
        setCurrentProject(PROJECTS[index])
      }
      console.log(index)
    },
    breakpoints: {
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 32,
        },
      },
    },
  })

  return (
    <S.Container>
      <S.Content>
        <h3>Projetos</h3>
        <h2>{currentProject.title}</h2>

        <S.Slider ref={sliderRef} className="keen-slider">
          {PROJECTS.map((project) => (
            <S.ProjectCard
              className="keen-slider__slide"
              key={project.title}
            ></S.ProjectCard>
          ))}
        </S.Slider>

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
