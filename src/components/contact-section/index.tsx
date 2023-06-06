import { motion } from 'framer-motion'
import { Button } from '../button'
import { SectionTitle } from '../section-title'
import { Wrapper } from '../section-wrapper'
import * as S from './styles'
import { TbMail, TbSend } from 'react-icons/tb'

export const Contact = () => {
  return (
    <S.Container>
      <Wrapper>
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
            <motion.input
              type="text"
              placeholder="nome"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.2 }}
            />
            <motion.input
              type="email"
              name=""
              id=""
              placeholder="email"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            />
            <motion.textarea
              cols={30}
              rows={5}
              placeholder="mensagem..."
              maxLength={500}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            ></motion.textarea>

            <Button>
              Enviar Mensagem <TbSend />
            </Button>
          </S.Form>
        </S.Content>
      </Wrapper>
    </S.Container>
  )
}
