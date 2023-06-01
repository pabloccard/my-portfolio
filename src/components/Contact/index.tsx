import { Button } from '../Button'
import { SectionTitle } from '../SectionTitle'
import * as S from './styles'
import { TbMail, TbSend } from 'react-icons/tb'

export const Contact = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <SectionTitle title="Contato" subtitle="Entre em contato comigo" />

        <S.Content>
          <S.InfoList>
            <S.InfoItem>
              <TbMail />
              <div>
                <strong>Email</strong>
                <span>pabloccard@gmail.com</span>
              </div>
            </S.InfoItem>
            <S.InfoItem>
              <TbMail />
              <div>
                <strong>Email</strong>
                <span>pabloccard@gmail.com</span>
              </div>
            </S.InfoItem>
          </S.InfoList>

          <S.Form>
            <input type="text" placeholder="nome" />
            <input type="email" name="" id="" placeholder="email" />
            <textarea
              cols={30}
              rows={5}
              placeholder="mensagem..."
              maxLength={500}
            ></textarea>

            <Button>
              Enviar Mensagem <TbSend />
            </Button>
          </S.Form>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}
