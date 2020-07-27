import {radioPlayerInit} from './radioPlayer.js'
import {musicPlayerInit} from './musicPlayer.js'
import {videoPlayerInit} from './videoPlayer.js'

const deactivatePlayer = () => {
  temp.style.display = ' none'
  playerBlocks.forEach((block) => block.classList.remove('active'))
  playerBtn.forEach((button) => button.classList.remove('active'))
}

const playerBtn = document.querySelectorAll('.player-btn')
const playerBlocks = document.querySelectorAll('.player-block')
const temp = document.querySelector('.temp')

playerBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    deactivatePlayer()
    btn.classList.add('active')
    playerBlocks[i].classList.add('active')
  })
})
