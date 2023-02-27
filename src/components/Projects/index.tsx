import Image from 'next/image'
import {
  ButtonsContainer,
  Container,
  Content,
  GridContainer,
  SlideItem,
} from './styles'
import frame from '../../assets/Frame1.png'

export const Projects = () => {
  return (
    <Container>
      <Content>
        <h3>PROJETOS</h3>

        <SlideItem>
          <GridContainer>
            <Image src={frame} alt="" height={260} />

            <div>
              <h3>Todo list</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium enim voluptate beatae numquam, inventore totam
                ratione expedita ducimus qui sapiente dicta odio facere unde
                molestias quo consequuntur. Rem, tempora voluptatem.
              </p>

              <ButtonsContainer>
                <button>Acessar</button>
                <button>Github</button>
              </ButtonsContainer>
            </div>
          </GridContainer>
        </SlideItem>
      </Content>
    </Container>
  )
}
