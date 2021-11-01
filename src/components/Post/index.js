import React from 'react'
import like from '../../assets/like.png'
import comment from '../../assets/comment.png'
import direct from '../../assets/send.png'
import save from '../../assets/save.png'
import options from '../../assets/options.png'

import * as S from './styles'

export default function Post({ post, authors }) {
  const author = authors.find(item => item.id === post.authorId)

  return (
    <S.Container>
      <S.PostContainer>
        <S.PostHeader>
          <S.Avatar source={author.avatar} />
          <S.Header>
            <S.Author>{author.name}</S.Author>
            <S.Location>{post.location}</S.Location>
          </S.Header>
        </S.PostHeader>
        <S.Icon source={options} />
      </S.PostContainer>

      <S.PostImage ratio={post.aspectRatio} source={post.image} />

      <S.Footer>
        <S.IconContainer>
          <S.Icons>
            <S.Icon source={like} />
            <S.Icon source={comment} />
            <S.Icon source={direct} />
          </S.Icons>

          <S.Icon source={save} />
        </S.IconContainer>
        <S.Likes>
          Curtido por <S.LikeAuthor>Silvana</S.LikeAuthor> e
          <S.LikeAuthor> outras pessoas</S.LikeAuthor>
        </S.Likes>

        <S.Comments>
          <S.LikeAuthor>{author.name} </S.LikeAuthor>
          {post.description}
        </S.Comments>
      </S.Footer>
    </S.Container>
  )
}
