	var paths = [
	  {id: '#path5419', d: 'M124.42 123.27L135.31 76.33L114.9 76.33L124.42 123.27Z'},
	  {id: '#path4232', d: 'M114.9 167.14L135.31 169.18L125.1 127.35L114.9 167.14Z'},
	  {id: '#path4236', d: 'M118.98 197.8L135.31 172.87L114.9 170.24L118.98 197.8Z'},
	  {id: '#path4240', d: 'M114.9 235.51L91.43 219.18L120 200.82L114.9 235.51Z'},
	  {id: '#path4244', d: 'M42.52 223.79L114.9 238.79L57.54 205.72L42.52 223.79Z'},
	  {id: '#path4248', d: 'M25.34 205.35L66.08 188.93L38.82 222.26L25.34 205.35Z'},
	  {id: '#path4252', d: 'M43.83 159.82L45.71 191.06L22.14 200.82L43.83 159.82Z'},
	  {id: '#path4628', d: 'M163.6 238.79L186.33 134.71L150.61 134.71L163.6 238.79Z'},
	  {id: '#path4632', d: 'M188.37 99.8C188.37 111.34 178.99 120.71 167.45 120.71C155.9 120.71 146.53 111.34 146.53 99.8C146.53 88.25 155.9 78.88 167.45 78.88C178.99 78.88 188.37 88.25 188.37 99.8Z'},
	  {id: '#path4634', d: 'M204.69 181.43L223.06 134.71L197.55 134.71L204.69 181.43Z'},
	  {id: '#path4636', d: 'M217.2 231.92L193.23 235.51L211.59 171.58L217.2 231.92Z'},
	  {id: '#path4644', d: 'M230.02 135.84L264.9 132.19L221.02 161.79L230.02 135.84Z'},
	  {id: '#path4646', d: 'M279.18 164.34L266.94 135.15L250.61 147.17L279.18 164.34Z'},
	  {id: '#path4648', d: 'M350.03 159.82L367.38 133.18L345.95 133.18L350.03 159.82Z'},
	  {id: '#path4656', d: 'M314.81 149.46L330.55 143.25L344.78 161.06L314.81 149.46Z'},
	  {id: '#path4658', d: 'M298.51 198.73L272.37 183.8L310.82 151.79L298.51 198.73Z'},
	  {id: '#path4660', d: 'M319.76 216.22L305.64 239.96L272.37 186.25L319.76 216.22Z'},
	  {id: '#path4662', d: 'M356.66 202.38L322.14 221.04L310.89 242.13L356.66 202.38Z'},
	  {id: '#path4672', d: 'M364.9 239.96L368.98 150.98L354.18 160.99L364.9 239.96Z'},
	  {id: '#path4674', d: 'M405.85 188.19L380.58 152.32L400.06 139.26L405.85 188.19Z'},
	  {id: '#path4676', d: 'M438.37 214.85L424.08 238.37L409.8 191.38L438.37 214.85Z'},
	  {id: '#path4678', d: 'M443.04 139.19L466.98 140.6L444.6 206.99L443.04 139.19Z'},
	  {id: '#path4688', d: 'M442.09 212.59L440.18 174.52L423.41 197.7L442.09 212.59Z'},
	  {id: '#path4690', d: 'M296.06 302.44L302.65 336.12L424.08 241.22L296.06 302.44Z'},
	  {id: '#path4692', d: 'M481.79 191.83L507.1 141.52L481.67 139.02L481.79 191.83Z'},
	  {id: '#path4694', d: 'M511.07 247.08L525.5 218.85L480.82 193.56L511.07 247.08Z'},
	  {id: '#path4704', d: 'M558.38 172.6L532.93 174.76L553.02 133.69L558.38 172.6Z'},
	  {id: '#path4706', d: 'M532.24 215.74L557.76 179.48L535.31 179.48L532.24 215.74Z'},
	  {id: '#path4708', d: 'M573.27 224.95L542.95 210.52L518.1 245.82L573.27 224.95Z'},
	  {id: '#path4729', d: 'M558.38 172.6L532.93 174.76L553.02 133.69L558.38 172.6Z'}
	];
	
	var timeline = anime.timeline({ autoplay: true, direction: 'alternate', loop: true });
	
	paths.forEach(function(path, index) {
	  timeline
	  .add({
		targets: path.id,
		d: {
		  value: path.d,
		  duration: 1000,
		  easing: 'easeInOutQuad'
		},
		offset: 1000 + 10 * index
	  });
	});
	
	 timeline
	  .add({
		targets: 'path:first-child',
		opacity: {
		  value: 1,
		  duration: 1000,
		  easing: 'easeInOutQuad'
		},
		offset: 2000 + 10 * paths.length
	  });
	
/* =====================================================================================================
	codepen: Text Scramble Effect
   =====================================================================================================*/
// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
  'Hello,',
  'I\'m Benzene',
  'study at RMUTK.',
  'In computer science major. ',
  'I\'m interasted in the field',
  'computer vision',
  'and machine learning.'
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800)
  })
  counter = (counter + 1) % phrases.length
}

next()	
			  
			  
			  