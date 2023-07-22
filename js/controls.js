export default function Controls({
  buttonPlay,
  buttonPause,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFireplace,
}) {

  function playPauseTimer() {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
  }

  function SoundForest() {
    buttonSoundForest.classList.toggle('active')
  }

  function SoundRain() {
    buttonSoundRain.classList.toggle('active')
  }

  function SoundCoffeeShop() {
    buttonSoundCoffeeShop.classList.toggle('active')
  }

  function SoundFireplace() {
    buttonSoundFireplace.classList.toggle('active')
  }

  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
}

  return {
    playPauseTimer,
    SoundForest,
    SoundRain,
    SoundCoffeeShop,
    SoundFireplace,
    reset
  }
}