import { Box, Heading, Text, Button } from 'native-base'
 import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
 import { useState } from 'react'

 const MyTimer = ({ remainingTime }) => {
   const minutes = Math.floor(remainingTime / 60)
   const seconds = remainingTime - minutes * 60

   return <Text fontSize='lg'>{minutes}m{seconds}s</Text>
 }

 const Timer = () => {
   const [launch, setLaunch] = useState(false)

   return (
     <Box width='100%' height='100%' alignItems='center'>
       <Heading>Timer</Heading>
       <Button onPress={() => setLaunch(!launch)}>START</Button>
       {launch && (
         <CountdownCircleTimer
           isPlaying
           duration={25}
           colors={['#004777', '#F7B801', '#A30000', '#A30000']}
           colorsTime={[7, 5, 2, 0]}
         >
           {MyTimer}
         </CountdownCircleTimer>
       )}
     </Box>
   )
 }

 export default Timer