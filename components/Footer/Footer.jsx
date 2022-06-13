import { Box, HStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { footerNavigation } from '../../utils/data'
import NavigationItem from './NavigationItem'

const Footer = () => {
  const navigation = useNavigation()
  const [selected, setSelected] = useState(1)

  return (
    <Box bg='white' width='100%' mb={150} shadow={6}>
      <HStack bg='indigo.600'>
        {footerNavigation.map(route => (
          <NavigationItem
            key={route.id}
            id={route.id}
            label={route.label}
            icon={route.icon}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </HStack>
    </Box>
  )
}

export default Footer;
