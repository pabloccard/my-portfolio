import Image from 'next/image'
import * as S from './styles'
import { TbCode, TbExternalLink } from 'react-icons/tb'

type ProjectProps = {
  image: string
  title: string
  description: string
  deploy_url: string
  repo_url: string
  className: string
}

export const Project = ({
  image,
  title,
  description,
  deploy_url,
  repo_url,
  className,
}: ProjectProps) => {
  return (
    <S.Container className={className}>
      <Image src={image} width={280} height={210} alt="" />

      <S.Data>
        <h3>{title}</h3>
        <p>{description}</p>

        <S.Links>
          <a href={deploy_url}>
            Visitar <TbExternalLink />
          </a>
          <a href={repo_url}>
            Repositório <TbCode />
          </a>
        </S.Links>
      </S.Data>
    </S.Container>
  )
}
