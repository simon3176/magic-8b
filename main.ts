input.onButtonPressed(Button.A, function () {
    if (s == 0) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
        basic.showString("Idk am I?")
    } else if (s == 1) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        basic.showString("Yes sadly :(")
    } else {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.showString("No")
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Are u sick?")
})
let s = 0
s = randint(0, 2)
basic.forever(function () {
	
})
