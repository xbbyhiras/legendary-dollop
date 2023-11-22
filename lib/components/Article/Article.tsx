import * as React from 'react'
import * as Styled from './Article.styled'

type TArticleProps = {
  children: React.ReactNode
  className?: string
  enableScrolls?: boolean
}

export const Article = ({ children, className, enableScrolls = true }: TArticleProps) => {
  const article = <Styled.ArticleDiv className={className}>{children}</Styled.ArticleDiv>
  return enableScrolls ? <Styled.ScrollableDiv>{article}</Styled.ScrollableDiv> : article
}
