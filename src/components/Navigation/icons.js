import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons'

const icons = {
  Home: {
    lib: MaterialCommunityIcons,
    name: 'home-outline',
    focus: 'home'
  },
  Search: {
    lib: Ionicons,
    name: 'ios-search',
    focus: 'md-search'
  },
  Camera: {
    lib: FontAwesome,
    name: 'plus-square-o',
    focus: 'plus-square'
  },
  Activity: {
    lib: Ionicons,
    name: 'heart-outline',
    focus: 'heart'
  },
  Profile: {
    lib: FontAwesome,
    name: 'user-o',
    focus: 'user'
  }
}

export default icons
