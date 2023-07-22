import { 
  buttonSoundForest,
  buttonSoundCoffeeShop,
  buttonSoundRain,
  buttonSoundFireplace 

} from "./components.js"


export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const SoundForest = new Audio('./music/Floresta.wav')
  const SoundRain = new Audio('./music/Chuva.wav')
  const SoundCoffeeShop = new Audio('./music/Cafeteria.wav')
  const SoundFireplace = new Audio('./music/Lareira.wav')

  SoundForest.loop = true
  SoundRain.loop = true
  SoundCoffeeShop.loop = true
  SoundFireplace.loop = true


  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function musicForest() {
    if(buttonSoundForest.classList.contains('active')) {
      SoundForest.play()
    } else {
      SoundForest.pause()
    }
  }

  function musicRain() {
    if(buttonSoundRain.classList.contains('active')) {
      SoundRain.play()
    } else {
      SoundRain.pause()
    }
  }

  function musicCoffeShop() {
    if(buttonSoundCoffeeShop.classList.contains('active')) {
      SoundCoffeeShop.play()
    } else {
      SoundCoffeeShop.pause()
    }
  }

  function musicFireplace() {
    if(buttonSoundFireplace.classList.contains('active')) {
      SoundFireplace.play()
    } else {
      SoundFireplace.pause()
    }
  }

  return {
    pressButton,
    timeEnd,
    musicForest,
    musicRain,
    musicCoffeShop,
    musicFireplace
  }
  
}