export default function events({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFireplace,
  controls,
  timer,
  sound
}) {

  buttonPlay.addEventListener('click', function() {
    sound.pressButton()
    timer.countdown()
    controls.playPauseTimer()
  })

  buttonPause.addEventListener('click', function() {
    sound.pressButton()
    timer.hold()
    controls.playPauseTimer()
  })

  buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  buttonPlus.addEventListener('click', function() {
    controls.reset()
    timer.increase()
    sound.pressButton()
  })

  buttonMinus.addEventListener('click', function() {
    controls.reset()
    timer.decrease()
    sound.pressButton()
  })

  buttonSoundForest.addEventListener('click', function() {
    controls.SoundForest()
    sound.pressButton()
    sound.musicForest()
  })

  buttonSoundRain.addEventListener('click', function() {
    controls.SoundRain()
    sound.pressButton()
    sound.musicRain()
  })

  buttonSoundCoffeeShop.addEventListener('click', function() {
    controls.SoundCoffeeShop()
    sound.pressButton()
    sound.musicCoffeShop()
  })

  buttonSoundFireplace.addEventListener('click', function() {
    controls.SoundFireplace()
    sound.pressButton()
    sound.musicFireplace()
  })
}