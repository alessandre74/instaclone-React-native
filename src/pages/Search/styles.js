import styled from 'styled-components/native'
import { Animated } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  background-color: #fff;
`
export const Header = styled(Animated.View)`
  padding-top: ${getStatusBarHeight() + 18}px;
`
export const HeaderContainer = styled(Animated.View)`
  padding: 0 6px;
`
export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 6px;
  background-color: #eee;
  border-radius: 6px;
`
export const Input = styled.TextInput`
  flex: 1;
  padding: 8px 6px;
  background-color: #eee;
`

export const ElementContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1px;
`
export const Element = styled.Image`
  margin: 0px 0px 1px 1px;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
`
