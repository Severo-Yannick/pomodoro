import { Box, Flex, Text, Divider } from "native-base"

 const HistoryCard = ({ date, breakDuration, workDuration }) => {
   return (
     <Box bg='white' shadow={2} rounded='lg' minWidth='100%' my='1'>
       <Flex direction='row' justifyContent='space-evenly' p='2'>
         <Text>{date}</Text>
         <Divider bg='emerald.500' thickness='2' mx='2' orientation='vertical' />
         <Text>{workDuration} min Work</Text>
         <Divider bg='indigo.500' thickness='2' mx='2' orientation='vertical' />
         <Text>{breakDuration} min Break</Text>
       </Flex>
     </Box>
   )
 }

 export default HistoryCard