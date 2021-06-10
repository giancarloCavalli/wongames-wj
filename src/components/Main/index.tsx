import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJs, NextJs, and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Atom image and React Avançado written by it's side"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A software developer facing a screen full of code"
    />
  </S.Wrapper>
)

export default Main
