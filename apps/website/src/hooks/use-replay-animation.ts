import { useState } from 'react'

interface UseReplayAnimationOutput {
  isAnimationPlaying: boolean
  rerenderKey: number
  replayAnimation: () => void
}

export const useReplayAnimation = (): UseReplayAnimationOutput => {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false)
  const [rerenderKey, setRerenderKey] = useState(0)

  const replayAnimation = () => {
    if (isAnimationPlaying) return
    setIsAnimationPlaying(true)

    setRerenderKey(Math.random())

    setTimeout(() => {
      // Animation duration is 1 second
      setIsAnimationPlaying(false)
    }, 1000)
  }

  return { isAnimationPlaying, rerenderKey, replayAnimation }
}
