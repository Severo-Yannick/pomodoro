import { Center, FlatList, Heading, VStack } from 'native-base'
 import HistoryCard from './HistoryCard'

const History = ({ state, dispach }) => {
  return (
    <VStack
      width='100%'
      height='100%'
      alignItems='center'
      justifyContent='center'
    >
      <Heading mt={5} size='lg'>
        Sessions History
      </Heading>
      <Center p='5'>
        <FlatList
          data={state.sessions}
          renderItem={({ item }) => (
            <HistoryCard
              date={item.date}
              breakDuration={item.breakDuration}
              workDuration={item.workDuration}
            />
          )}
        />
      </Center>
    </VStack>
  )
}

export default History