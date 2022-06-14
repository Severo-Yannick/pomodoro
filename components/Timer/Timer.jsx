import { Box, Heading, Text, Button, HStack } from 'native-base'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { Vibration } from 'react-native'

const MyTimer = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60)
  const seconds = remainingTime - minutes * 60
  return (
    <Text fontSize='lg'>
      {minutes}m{seconds}s
    </Text>
  )
}

const Timer = ({ state, dispatch, triggerNotifications }) => {
  const ONE_SECOND_IN_MS = 1000

  const PATTERN = [1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS]

  return (
    <Box width='100%' height='100%' alignItems='center'>
      {
        state.status === 'off' ? (
          <Heading mb='10' size='lg'>
            Timer has not started yet
          </Heading>
        ) : (
          <Heading mb='10' size='lg'>
            You are{' '}
            <Text color={state.status == 'working' ? '#004777' : '#4DC71F'}>
              {state.status}
            </Text>
          </Heading>
        )
      }
      {state.status === 'working' && (
        <CountdownCircleTimer
          isPlaying
          duration={state.settings.workDuration * 60} // seconds in minutes
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => {
            Vibration.vibrate();
            dispatch({ type: 'SWITCH_MODE' })
          }}
        >
          {MyTimer}
        </CountdownCircleTimer>
      )}
      {state.status === 'resting' && (
        <CountdownCircleTimer
          isPlaying
          duration={state.settings.breakDuration * 60} // seconds in minutes
          colors={['#4DC71F', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => {
            Vibration.vibrate(PATTERN)
            triggerNotifications()
            dispatch({ type: 'SWITCH_MODE' })
            dispatch({ type: 'ADD_SESSION' })
          }}
        >
          {MyTimer}
        </CountdownCircleTimer>
      )}
      <HStack space='4' mt={10}>
        <Button
          bg='green.600'
          onPress={() => dispatch({ type: 'START_TIMER' })}
        >
          C'est parti!
        </Button>
        {state.status !== 'off' && (
          <Button bg="red.600" onPress={() => dispatch({ type: 'STOP_TIMER' })}>
            Stop!
          </Button>
        )}
      </HStack>
    </Box>
  )
}

export default Timer