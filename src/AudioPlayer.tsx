import React, { useState, useRef } from 'react'

interface AudioPlayerProps {
  src: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    const audio = audioRef.current

    if (audio) {
      if (isPlaying) {
        audio.pause()
      } else {
        audio.play()
      }

      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div>
      <audio ref={audioRef} src={src} />
      <button onClick={togglePlay}>{isPlaying ? '⏸️' : '⏯️'}</button>
    </div>
  )
}

export default AudioPlayer
