import IconFontAwesome from '@expo/vector-icons/FontAwesome5'
import IconIgtv from '@expo/vector-icons/Feather'

const posts = [
  {
    id: '1',
    author: 'mike',
    authorId: 1,
    image: require('../assets/1_normal.jpg'),
    small: require('../assets/1_small.jpg'),
    aspectRatio: 0.834,
    likes: 2009,
    description: 'Hoje é dia de Codar!!!',
    hashtags: '#código #reactnative',
    location: 'Florianópolis - SC'
  },

  {
    id: '2',
    author: 'bruna',
    authorId: 2,
    image: require('../assets/2_normal.jpg'),
    small: require('../assets/2_small.jpg'),
    aspectRatio: 0.834,
    likes: 1994,
    description: 'Trabalhando em casa!!!',
    hashtags: '#casa #trabalhoremoto',
    location: 'São José - SC'
  },

  {
    id: '3',
    author: 'silvana',
    authorId: 3,
    image: require('../assets/3_normal.jpg'),
    small: require('../assets/3_small.jpg'),
    aspectRatio: 0.834,
    likes: 1973,
    description: 'Refatorando codigo!!!',
    hashtags: '#refatorar #código',
    location: 'Florianóplis - SC '
  },

  {
    id: '4',
    author: 'silvia',
    authorId: 4,
    image: require('../assets/4_normal.jpg'),
    small: require('../assets/4_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Aprendendo Recat native!!!',
    hashtags: '#reactnative #react',
    location: 'São José - SC '
  },
  {
    id: '5',
    author: 'bruna',
    authorId: 2,
    image: require('../assets/5_normal.jpg'),
    small: require('../assets/5_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Código, código e mais código!!!',
    hashtags: '#código',
    location: 'São José - SC '
  },
  {
    id: '6',
    author: 'silvana',
    authorId: 3,
    image: require('../assets/6_normal.jpg'),
    small: require('../assets/6_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Começando o dia!!!',
    hashtags: '#dev #project',
    location: 'São José - SC '
  },

  {
    id: '7',
    author: 'silvia',
    authorId: 4,
    image: require('../assets/7_normal.jpg'),
    small: require('../assets/7_small.jpg'),
    aspectRatio: 0.834,
    likes: 2009,
    description: 'Hoje é dia de Codar!!!',
    hashtags: '#código #reactnative',
    location: 'Florianópolis - SC'
  },

  {
    id: '8',
    author: 'silvana',
    authorId: 3,
    image: require('../assets/8_normal.jpg'),
    small: require('../assets/8_small.jpg'),
    aspectRatio: 0.834,
    likes: 1994,
    description: 'Trabalhando em casa!!!',
    hashtags: '#casa #trabalhoremoto',
    location: 'São José - SC'
  },

  {
    id: '9',
    author: 'bruna',
    authorId: 2,
    image: require('../assets/9_normal.jpg'),
    small: require('../assets/9_small.jpg'),
    aspectRatio: 0.834,
    likes: 1973,
    description: 'Equipe!!!',
    hashtags: '#trabalhoemequipe',
    location: 'Florianóplis - SC '
  },

  {
    id: '10',
    author: 'mike',
    authorId: 1,
    image: require('../assets/10_normal.jpg'),
    small: require('../assets/10_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Aprendendo Recat native!!!',
    hashtags: '#reactnative #react',
    location: 'São José - SC '
  },
  {
    id: '11',
    author: 'silvana',
    authorId: 3,
    image: require('../assets/11_normal.jpg'),
    small: require('../assets/11_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Meu setup!!!',
    hashtags: '#setup',
    location: 'São José - SC '
  },
  {
    id: '12',
    author: 'silvia',
    authorId: 4,
    image: require('../assets/12_normal.jpg'),
    small: require('../assets/12_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Horá do café!!!',
    hashtags: '#café',
    location: 'São José - SC '
  },
  {
    id: '13',
    author: 'mike',
    authorId: 1,
    image: require('../assets/1_normal.jpg'),
    small: require('../assets/1_small.jpg'),
    aspectRatio: 0.834,
    likes: 2009,
    description: 'Hoje é dia de Codar!!!',
    hashtags: '#código #reactnative',
    location: 'Florianópolis - SC'
  },

  {
    id: '14',
    author: 'bruna',
    authorId: 2,
    image: require('../assets/2_normal.jpg'),
    small: require('../assets/2_small.jpg'),
    aspectRatio: 0.834,
    likes: 1994,
    description: 'Trabalhando em casa!!!',
    hashtags: '#casa #trabalhoremoto',
    location: 'São José - SC'
  },

  {
    id: '15',
    author: 'silvana',
    authorId: 3,
    image: require('../assets/3_normal.jpg'),
    small: require('../assets/3_small.jpg'),
    aspectRatio: 0.834,
    likes: 1973,
    description: 'Refatorando codigo!!!',
    hashtags: '#refatorar #código',
    location: 'Florianóplis - SC '
  },

  {
    id: '16',
    author: 'silvia',
    authorId: 4,
    image: require('../assets/4_normal.jpg'),
    small: require('../assets/4_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Aprendendo Recat native!!!',
    hashtags: '#reactnative #react',
    location: 'São José - SC '
  },
  {
    id: '17',
    author: 'bruna',
    authorId: 2,
    image: require('../assets/5_normal.jpg'),
    small: require('../assets/5_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Código, código e mais código!!!',
    hashtags: '#código',
    location: 'São José - SC '
  },
  {
    id: '18',
    author: 'silvana',
    authorId: 3,
    image: require('../assets/6_normal.jpg'),
    small: require('../assets/6_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Começando o dia!!!',
    hashtags: '#dev #project',
    location: 'São José - SC '
  },
  {
    id: '19',
    author: 'mike',
    authorId: 1,
    image: require('../assets/1_normal.jpg'),
    small: require('../assets/1_small.jpg'),
    aspectRatio: 0.834,
    likes: 2009,
    description: 'Hoje é dia de Codar!!!',
    hashtags: '#código #reactnative',
    location: 'Florianópolis - SC'
  },

  {
    id: '20',
    author: 'bruna',
    authorId: 2,
    image: require('../assets/2_normal.jpg'),
    small: require('../assets/2_small.jpg'),
    aspectRatio: 0.834,
    likes: 1994,
    description: 'Trabalhando em casa!!!',
    hashtags: '#casa #trabalhoremoto',
    location: 'São José - SC'
  },

  {
    id: '21',
    author: 'silvana',
    authorId: 3,
    image: require('../assets/3_normal.jpg'),
    small: require('../assets/3_small.jpg'),
    aspectRatio: 0.834,
    likes: 1973,
    description: 'Refatorando codigo!!!',
    hashtags: '#refatorar #código',
    location: 'Florianóplis - SC '
  },

  {
    id: '22',
    author: 'silvia',
    authorId: 4,
    image: require('../assets/4_normal.jpg'),
    small: require('../assets/4_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Aprendendo Recat native!!!',
    hashtags: '#reactnative #react',
    location: 'São José - SC '
  },
  {
    id: '23',
    author: 'bruna',
    authorId: 2,
    image: require('../assets/5_normal.jpg'),
    small: require('../assets/5_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Código, código e mais código!!!',
    hashtags: '#código',
    location: 'São José - SC '
  },
  {
    id: '24',
    author: 'silvana',
    authorId: 3,
    image: require('../assets/6_normal.jpg'),
    small: require('../assets/6_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Começando o dia!!!',
    hashtags: '#dev #project',
    location: 'São José - SC '
  },
  {
    id: '25',
    author: 'mike',
    authorId: 1,
    image: require('../assets/1_normal.jpg'),
    small: require('../assets/1_small.jpg'),
    aspectRatio: 0.834,
    likes: 2009,
    description: 'Hoje é dia de Codar!!!',
    hashtags: '#código #reactnative',
    location: 'Florianópolis - SC'
  },

  {
    id: '26',
    author: 'bruna',
    authorId: 2,
    image: require('../assets/2_normal.jpg'),
    small: require('../assets/2_small.jpg'),
    aspectRatio: 0.834,
    likes: 1994,
    description: 'Trabalhando em casa!!!',
    hashtags: '#casa #trabalhoremoto',
    location: 'São José - SC'
  },

  {
    id: '27',
    author: 'silvana',
    authorId: 3,
    image: require('../assets/3_normal.jpg'),
    small: require('../assets/3_small.jpg'),
    aspectRatio: 0.834,
    likes: 1973,
    description: 'Refatorando codigo!!!',
    hashtags: '#refatorar #código',
    location: 'Florianóplis - SC '
  },

  {
    id: '28',
    author: 'silvia',
    authorId: 4,
    image: require('../assets/4_normal.jpg'),
    small: require('../assets/4_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Aprendendo Recat native!!!',
    hashtags: '#reactnative #react',
    location: 'São José - SC '
  },
  {
    id: '29',
    author: 'bruna',
    authorId: 2,
    image: require('../assets/5_normal.jpg'),
    small: require('../assets/5_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Código, código e mais código!!!',
    hashtags: '#código',
    location: 'São José - SC '
  },
  {
    id: '30',
    author: 'silvana',
    authorId: 3,
    image: require('../assets/6_normal.jpg'),
    small: require('../assets/6_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Começando o dia!!!',
    hashtags: '#dev #project',
    location: 'São José - SC '
  },
  {
    id: '31',
    author: 'mike',
    authorId: 1,
    image: require('../assets/1_normal.jpg'),
    small: require('../assets/1_small.jpg'),
    aspectRatio: 0.834,
    likes: 2009,
    description: 'Hoje é dia de Codar!!!',
    hashtags: '#código #reactnative',
    location: 'Florianópolis - SC'
  },

  {
    id: '32',
    author: 'bruna',
    authorId: 2,
    image: require('../assets/2_normal.jpg'),
    small: require('../assets/2_small.jpg'),
    aspectRatio: 0.834,
    likes: 1994,
    description: 'Trabalhando em casa!!!',
    hashtags: '#casa #trabalhoremoto',
    location: 'São José - SC'
  },

  {
    id: '33',
    author: 'silvana',
    authorId: 3,
    image: require('../assets/3_normal.jpg'),
    small: require('../assets/3_small.jpg'),
    aspectRatio: 0.834,
    likes: 1973,
    description: 'Refatorando codigo!!!',
    hashtags: '#refatorar #código',
    location: 'Florianóplis - SC '
  },

  {
    id: '34',
    author: 'silvia',
    authorId: 4,
    image: require('../assets/4_normal.jpg'),
    small: require('../assets/4_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Aprendendo Recat native!!!',
    hashtags: '#reactnative #react',
    location: 'São José - SC '
  },
  {
    id: '35',
    author: 'bruna',
    authorId: 2,
    image: require('../assets/5_normal.jpg'),
    small: require('../assets/5_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Código, código e mais código!!!',
    hashtags: '#código',
    location: 'São José - SC '
  },
  {
    id: '36',
    author: 'silvana',
    authorId: 3,
    image: require('../assets/6_normal.jpg'),
    small: require('../assets/6_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Começando o dia!!!',
    hashtags: '#dev #project',
    location: 'São José - SC '
  },
  {
    id: '37',
    author: 'mike',
    authorId: 1,
    image: require('../assets/1_normal.jpg'),
    small: require('../assets/1_small.jpg'),
    aspectRatio: 0.834,
    likes: 2009,
    description: 'Hoje é dia de Codar!!!',
    hashtags: '#código #reactnative',
    location: 'Florianópolis - SC'
  },

  {
    id: '38',
    author: 'bruna',
    authorId: 2,
    image: require('../assets/2_normal.jpg'),
    small: require('../assets/2_small.jpg'),
    aspectRatio: 0.834,
    likes: 1994,
    description: 'Trabalhando em casa!!!',
    hashtags: '#casa #trabalhoremoto',
    location: 'São José - SC'
  },

  {
    id: '39',
    author: 'silvana',
    authorId: 3,
    image: require('../assets/3_normal.jpg'),
    small: require('../assets/3_small.jpg'),
    aspectRatio: 0.834,
    likes: 1973,
    description: 'Refatorando codigo!!!',
    hashtags: '#refatorar #código',
    location: 'Florianóplis - SC '
  },

  {
    id: '40',
    author: 'silvia',
    authorId: 4,
    image: require('../assets/4_normal.jpg'),
    small: require('../assets/4_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Aprendendo Recat native!!!',
    hashtags: '#reactnative #react',
    location: 'São José - SC '
  },
  {
    id: '41',
    author: 'bruna',
    authorId: 2,
    image: require('../assets/5_normal.jpg'),
    small: require('../assets/5_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Código, código e mais código!!!',
    hashtags: '#código',
    location: 'São José - SC '
  },
  {
    id: '42',
    author: 'silvana',
    authorId: 3,
    image: require('../assets/6_normal.jpg'),
    small: require('../assets/6_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Começando o dia!!!',
    hashtags: '#dev #project',
    location: 'São José - SC '
  },
  {
    id: '43',
    author: 'mike',
    authorId: 1,
    image: require('../assets/1_normal.jpg'),
    small: require('../assets/1_small.jpg'),
    aspectRatio: 0.834,
    likes: 2009,
    description: 'Hoje é dia de Codar!!!',
    hashtags: '#código #reactnative',
    location: 'Florianópolis - SC'
  },

  {
    id: '44',
    author: 'bruna',
    authorId: 2,
    image: require('../assets/2_normal.jpg'),
    small: require('../assets/2_small.jpg'),
    aspectRatio: 0.834,
    likes: 1994,
    description: 'Trabalhando em casa!!!',
    hashtags: '#casa #trabalhoremoto',
    location: 'São José - SC'
  },

  {
    id: '45',
    author: 'silvana',
    authorId: 3,
    image: require('../assets/3_normal.jpg'),
    small: require('../assets/3_small.jpg'),
    aspectRatio: 0.834,
    likes: 1973,
    description: 'Refatorando codigo!!!',
    hashtags: '#refatorar #código',
    location: 'Florianóplis - SC '
  },

  {
    id: '46',
    author: 'silvia',
    authorId: 4,
    image: require('../assets/4_normal.jpg'),
    small: require('../assets/4_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Aprendendo Recat native!!!',
    hashtags: '#reactnative #react',
    location: 'São José - SC '
  },
  {
    id: '47',
    author: 'bruna',
    authorId: 2,
    image: require('../assets/5_normal.jpg'),
    small: require('../assets/5_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Código, código e mais código!!!',
    hashtags: '#código',
    location: 'São José - SC '
  },
  {
    id: '48',
    author: 'silvana',
    authorId: 3,
    image: require('../assets/6_normal.jpg'),
    small: require('../assets/6_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Começando o dia!!!',
    hashtags: '#dev #project',
    location: 'São José - SC '
  },

  {
    id: '49',
    author: 'mike',
    authorId: 1,
    image: require('../assets/1_normal.jpg'),
    small: require('../assets/1_small.jpg'),
    aspectRatio: 0.834,
    likes: 2009,
    description: 'Hoje é dia de Codar!!!',
    hashtags: '#código #reactnative',
    location: 'Florianópolis - SC'
  },

  {
    id: '50',
    author: 'bruna',
    authorId: 2,
    image: require('../assets/2_normal.jpg'),
    small: require('../assets/2_small.jpg'),
    aspectRatio: 0.834,
    likes: 1994,
    description: 'Trabalhando em casa!!!',
    hashtags: '#casa #trabalhoremoto',
    location: 'São José - SC'
  },

  {
    id: '51',
    author: 'silvana',
    authorId: 3,
    image: require('../assets/3_normal.jpg'),
    small: require('../assets/3_small.jpg'),
    aspectRatio: 0.834,
    likes: 1973,
    description: 'Refatorando codigo!!!',
    hashtags: '#refatorar #código',
    location: 'Florianóplis - SC '
  },

  {
    id: '52',
    author: 'silvia',
    authorId: 4,
    image: require('../assets/4_normal.jpg'),
    small: require('../assets/4_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Aprendendo Recat native!!!',
    hashtags: '#reactnative #react',
    location: 'São José - SC '
  },
  {
    id: '53',
    author: 'bruna',
    authorId: 2,
    image: require('../assets/5_normal.jpg'),
    small: require('../assets/5_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Código, código e mais código!!!',
    hashtags: '#código',
    location: 'São José - SC '
  },
  {
    id: '54',
    author: 'silvana',
    authorId: 3,
    image: require('../assets/6_normal.jpg'),
    small: require('../assets/6_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Começando o dia!!!',
    hashtags: '#dev #project',
    location: 'São José - SC '
  },
  {
    id: '55',
    author: 'mike',
    authorId: 1,
    image: require('../assets/1_normal.jpg'),
    small: require('../assets/1_small.jpg'),
    aspectRatio: 0.834,
    likes: 2009,
    description: 'Hoje é dia de Codar!!!',
    hashtags: '#código #reactnative',
    location: 'Florianópolis - SC'
  },

  {
    id: '56',
    author: 'bruna',
    authorId: 2,
    image: require('../assets/2_normal.jpg'),
    small: require('../assets/2_small.jpg'),
    aspectRatio: 0.834,
    likes: 1994,
    description: 'Trabalhando em casa!!!',
    hashtags: '#casa #trabalhoremoto',
    location: 'São José - SC'
  },

  {
    id: '57',
    author: 'silvana',
    authorId: 3,
    image: require('../assets/3_normal.jpg'),
    small: require('../assets/3_small.jpg'),
    aspectRatio: 0.834,
    likes: 1973,
    description: 'Refatorando codigo!!!',
    hashtags: '#refatorar #código',
    location: 'Florianóplis - SC '
  },

  {
    id: '58',
    author: 'silvia',
    authorId: 4,
    image: require('../assets/4_normal.jpg'),
    small: require('../assets/4_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Aprendendo Recat native!!!',
    hashtags: '#reactnative #react',
    location: 'São José - SC '
  },
  {
    id: '59',
    author: 'bruna',
    authorId: 2,
    image: require('../assets/5_normal.jpg'),
    small: require('../assets/5_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Código, código e mais código!!!',
    hashtags: '#código',
    location: 'São José - SC '
  },
  {
    id: '60',
    author: 'silvana',
    authorId: 3,
    image: require('../assets/6_normal.jpg'),
    small: require('../assets/6_small.jpg'),
    aspectRatio: 0.834,
    likes: 1950,
    description: 'Começando o dia!!!',
    hashtags: '#dev #project',
    location: 'São José - SC '
  }
]

const authors = [
  {
    id: 1,
    name: 'mikelivra',
    avatar: require('../assets/mike.jpg')
  },
  {
    id: 2,
    name: 'brunalivra',
    avatar: require('../assets/Bruna.jpg')
  },
  {
    id: 3,
    name: 'silvanajoaquim',
    avatar: require('../assets/Silvana2.jpg')
  },
  {
    id: 4,
    name: 'silviajoaquim',
    avatar: require('../assets/Silvia.jpg')
  },
  {
    id: 5,
    name: 'anaclara',
    avatar: require('../assets/Ana.jpg')
  },
  {
    id: 6,
    name: 'adrianajoaquim',
    avatar: require('../assets/Adriana.jpg')
  },
  {
    id: 7,
    name: 'joaopedro',
    avatar: require('../assets/Joao.jpg')
  }
]

const searchs = [
  {
    lib: IconIgtv,
    icon: 'tv',
    size: 10,
    text: 'IGTV'
  },
  {
    lib: IconFontAwesome,
    icon: 'toolbox',
    size: 10,
    text: 'Loja'
  },
  {
    text: 'Decoração'
  },
  {
    text: 'Viagem'
  },
  {
    text: 'Arquitetura'
  },
  {
    text: 'Arte'
  },
  {
    text: 'Estilo'
  },
  {
    text: 'TV e Cinema'
  },
  {
    text: 'Faça você mesmo'
  },
  {
    text: 'Esportes'
  },
  {
    text: 'Música'
  },
  {
    text: 'Quadrinhos'
  },
  {
    text: 'Automotivo'
  }
]
export { posts, authors, searchs }
