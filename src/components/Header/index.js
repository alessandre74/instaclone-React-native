import React from 'react'
import { Image } from 'react-native'

import FontAwesome from '@expo/vector-icons/FontAwesome'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import logo from '../../assets/instagram.png'

import * as S from './styles'

export default function Header() {
  return (
    <S.Container>
      <Image source={logo} />
      <S.Icons>
        <FontAwesome name="plus-square-o" size={18} />
        <FontAwesome style={{ marginLeft: 20 }} name="heart-o" size={18} />
        <MaterialCommunityIcons style={{ marginLeft: 20 }} name="facebook-messenger" size={18} />
      </S.Icons>
    </S.Container>
  )
}
