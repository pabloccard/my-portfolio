import Image from 'next/image'
import manProgramming from '../../assets/man-programming.png'
import { FiDownload } from 'react-icons/fi'
import { AboutSession, Content, Container, Bio } from './styles'

export const About = () => {
  return (
    <AboutSession>
      <Container>
        <h3>SOBRE MIM</h3>
        <Content>
          <Bio>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
              dolor quae! Vel id sunt vitae fugit sint illo veritatis aut animi
              molestiae! Modi, officiis voluptatibus dolores nemo ipsam earum
              iure. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat sunt tempore non error ducimus tenetur iusto accusantium
              saepe minima esse sapiente enim ea corporis recusandae soluta
              facere, fugiat consequuntur deleniti! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Magni quam qui amet reiciendis est.
              Iste velit distinctio dolorum, nemo autem esse rerum cupiditate.
              Quae velit, accusantium voluptatibus aspernatur eveniet
              laboriosam?
            </p>
          </Bio>

          <Image
            src={manProgramming}
            height={380}
            alt="garoto mexendo em um computador"
          />
        </Content>
      </Container>
    </AboutSession>
  )
}
