import { Pressable, Center, Icon, Text } from 'native-base'
 import { MaterialIcons } from '@expo/vector-icons'
 import { useNavigation } from '@react-navigation/native'

 const NavigationItem = ({
   id,
   icon,
   label,
   selected,
   setSelected,
 }) => {
   const navigation = useNavigation();

   return (
     <Pressable
       key={id}
       flex="1"
       py="3"
       opacity={selected === id ? 1 : 0.3}
       onPress={() => {
         setSelected(id)
         navigation.navigate(label)
       }}
     >
       <Center>
         <Icon
           as={<MaterialIcons name={icon} color='white' size='sm' mb='1' />}
           color='white'
           size='sm'
           mb='1'
         />
         <Text color='white' fontSize='12'>
           {label}
         </Text>
       </Center>
     </Pressable>
   )
 }

 export default NavigationItem