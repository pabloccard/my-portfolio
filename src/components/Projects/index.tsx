'use-client'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import {
  ButtonsContainer,
  Container,
  Content,
  Slider,
  SliderItem,
} from './styles'
import frame from '../../assets/Frame1.png'
import { projects } from '../../projectsData'
import { useState } from 'react'

export const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [loaded, setLoaded] = useState<boolean>(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <Container>
      <Content>
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
      </Content>
    </Container>
  )
}
