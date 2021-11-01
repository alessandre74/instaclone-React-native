import React, { useState } from 'react'
import { Animated, View } from 'react-native'
import { ScrollView } from 'react-native'

import IconSearch from '@expo/vector-icons/EvilIcons'

import { posts } from '../../data'

import * as S from './styles'

export default function Search() {
  const [scrollY] = useState(new Animated.Value(0))

  return (
    <S.Container>
      <S.Header
        style={[
          {
            height: scrollY.interpolate({
              inputRange: [0, 60, 80],
              outputRange: [80, 60, 60],
              extrapolate: 'clamp'
            })
          }
        ]}
      >
        <S.HeaderContainer
          style={[
            {
              top: scrollY.interpolate({
                inputRange: [10, 25, 35],
                outputRange: [-10, -25, -35],
                extrapolate: 'clamp'
              }),
              opacity: scrollY.interpolate({
                inputRange: [10, 30, 40],
                outputRange: [1, 1, 0],
                extrapolate: 'clamp'
              })
            }
          ]}
        >
          <S.InputContainer>
            <IconSearch name="search" size={18} color="#999" />
            <S.Input
              placeholderTextColor="#999"
              keyboardType="default"
              autoCorrect={false}
              placeholder="Pesquisar"
              returnKeyType="send"
            />
          </S.InputContainer>
        </S.HeaderContainer>
      </S.Header>

      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollY }
              }
            }
          ],

          { useNativeDriver: false }
        )}
      >
        <S.ElementContainer>
          {posts.map((post, index) => {
            if (index === 0) {
              return <S.Element key={index} source={post.image} height={300} width={386} />
            } else {
              return <S.Element key={index} source={post.image} height={100} width={128} />
            }
          })}
        </S.ElementContainer>
      </ScrollView>
    </S.Container>
  )
}
