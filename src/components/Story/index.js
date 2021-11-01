import React from 'react'
import { ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import avatar from '../../assets/alessandre.png'
import badge from '../../assets/story-add.png'

import * as S from './styles'

export default function Story({ authors }) {
  return (
    <ScrollView
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <S.StoryContainer>
        <S.StoryAvatar source={avatar} height={60} width={60} borderRadius={30} />
        <S.StoryAuthor>Seu story</S.StoryAuthor>
        <S.StoryBadge source={badge} />
      </S.StoryContainer>

      {authors.map(author => (
        <S.StoryContainer key={author.id}>
          <S.StoryImage>
            <S.StoryAvatar source={author.avatar} height={60} width={60} borderRadius={50} />
          </S.StoryImage>

          <S.StoryAuthor>{author.name}</S.StoryAuthor>
        </S.StoryContainer>
      ))}
    </ScrollView>
  )
}
