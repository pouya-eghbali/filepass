const FILEPASS_CHARACTER_MAP = { 'f7': 'j', 'f6': '4', 'f5': 'T', 'f4': '-', 'f3': 'e', 'f2': '4', 'f1': 'H', 'f0': 'b', 'f9': 'i', 'f8': '=', '43': 'n', '42': 'o', '1b': 'p', '1c': 'x', '1a': 'm', '1f': '9', '1d': ')', '1e': 'U', 'ef': 'U', 'ed': '{', 'ee': '%', 'eb': 'F', 'ec': '7', 'ea': 'h', '29': '8', '28': 'C', '23': 'w', '22': 'i', '21': 'v', '20': 'l', '27': 's', '26': '\\', '25': '-', '24': '7', 'ff': 'j', 'fe': '_', 'fd': '7', 'fc': 's', 'fb': 'S', 'fa': 'd', '08': '?', '7b': ',', 'd6': '5', '58': 'p', '2c': '-', '2b': ']', '2a': '\\', '2f': ',', '2e': 'G', '2d': 'z', '12': 'F', '13': 'n', '10': 'x', '11': 'c', '16': '1', '17': 'p', '14': 'x', '15': 'I', 'e6': 'c', 'e7': '7', '18': 'E', '19': 'a', 'e2': 'x', 'e3': 'I', 'e0': 'i', 'e1': '6', '98': '(', '99': 'R', 'd0': ']', '92': '_', '93': '3', '90': 'x', '91': '2', '96': '>', '97': '!', '94': '+', '95': 'q', '49': 'M', '48': 'Z', '05': 'h', '3d': 'd', '44': ']', '47': 'H', '46': 'J', '41': 'K', '3a': 'f', '3b': 'c', '3c': '/', '9a': 'r', 'e8': '>', '5e': 'u', '9b': 'v', '9c': 'K', 'e9': 'H', '9f': 'L', '9d': 'o', '9e': '^', '40': 'd', 'c2': 'v', 'e4': 'g', 'd4': 'W', 'e5': 'n', '88': '8', '38': '?', '39': '[', '34': '4', '35': 'c', '36': 'e', '37': 'k', '30': 'H', '31': '.', '32': '.', '33': 'u', 'b9': '+', 'b8': 'R', 'b3': 'h', 'b2': 'l', 'b1': '^', 'b0': 'Z', 'b7': '+', 'b6': 'J', 'b5': '_', 'b4': 'M', 'ab': 'O', 'ac': 'G', 'aa': 'N', 'af': 'Z', 'ad': '5', 'ae': 'X', 'd3': 'H', '67': 'q', '66': 'e', '65': 'W', '64': '3', '63': '+', '62': '^', '61': 'z', '60': '|', '5f': '9', '5d': '3', 'd1': 'q', '5b': 'D', '5c': 'i', '69': '7', '68': '~', 'a2': 'R', '0a': 'M', 'a0': 'b', 'a1': '\\', 'a6': '7', 'a7': 'B', 'a4': 'F', 'a5': 'P', 'a8': '_', 'a9': 'n', 'd8': 'b', '0b': 't', '09': 'U', 'bc': '[', 'bb': '=', 'ba': 'V', 'bf': ':', 'be': 'P', 'bd': 'Z', '6f': '=', '6e': 'l', '6d': 'V', '6c': 'z', '6b': 'c', '6a': 'd', '59': '2', '56': 'S', '57': '~', '54': '{', '55': 'D', '52': 'g', '53': 'u', '50': '>', '51': '}', '70': ',', '71': 'C', '5a': '/', '73': 's', 'a3': ')', '8a': '[', '74': 'b', '8c': 'U', '8b': 'E', '8e': '8', '8d': 'G', '8f': '-', 'dc': 'n', 'cd': ']', 'ce': 'Y', 'cf': 'c', 'db': '3', 'ca': 'D', 'cb': 'U', 'cc': '8', '01': ',', '00': 's', '03': 'k', '02': 'f', 'd9': '(', '04': 'k', '07': 'R', '06': 'x', 'd5': 'H', '7a': 'g', 'd7': '2', '7c': 'B', '7d': 'I', '7e': '[', '7f': 'D', 'd2': 'z', 'c8': 'y', 'c9': 'V', 'c4': '>', 'c5': ')', 'c6': '(', 'c7': '{', 'c0': '%', 'c1': ')', '4a': 'g', 'c3': 'p', '89': 'f', '4e': 'h', '4d': 'K', '81': 'B', '80': 'D', '83': 'R', '82': '!', '85': 'Q', '84': 's', '87': 'J', '86': 'b', '78': '}', '79': 'M', '0c': '_', '4f': 'j', '0e': '<', '0d': 'i', '0f': '9', 'de': ']', 'dd': '$', '72': 'c', 'df': '2', 'da': 'q', '75': '(', '76': 'b', '77': '9', '45': 'J', '4c': '&', '3e': 'h', '4b': 'r', '3f': 'Y' };

class FilePass {
  constructor(el) {
    this.el = el
    this.initMenu()
    this.initEvents()
  }
  initMenu() {
    this.menuEl = document.createElement('div')
    this.menuEl.classList.add('filepass-menu')

    this.inputEl = document.createElement('input')
    this.inputEl.classList.add('filepass-input')
    this.inputEl.setAttribute('type', 'file')

    this.nameEl = document.createElement('div')
    this.nameEl.classList.add('filepass-name-wrap')
    this.nameEl.innerHTML = `
      <i class="filepass-icon"></i>
      <span class="filepass-name">FilePass</span>`

    this.s8Link = document.createElement('a')
    this.s8Link.classList.add('filepass-s8link')
    this.s8Link.classList.add('filepass-btn')
    this.s8Link.innerText = '8'
    this.s8Link.setAttribute('href', '#')

    this.s16Link = document.createElement('a')
    this.s16Link.classList.add('filepass-s16link')
    this.s16Link.classList.add('filepass-btn')
    this.s16Link.innerText = '16'
    this.s16Link.setAttribute('href', '#')

    this.s24Link = document.createElement('a')
    this.s24Link.classList.add('filepass-s24link')
    this.s24Link.classList.add('filepass-btn')
    this.s24Link.innerText = '24'
    this.s24Link.setAttribute('href', '#')

    this.s32Link = document.createElement('a')
    this.s32Link.classList.add('filepass-s32link')
    this.s32Link.classList.add('filepass-btn')
    this.s32Link.innerText = '32'
    this.s32Link.setAttribute('href', '#')

    this.linkWrap = document.createElement('div')
    this.linkWrap.classList.add('filepass-link-wrap')

    this.linkWrap.appendChild(this.s8Link)
    this.linkWrap.appendChild(this.s16Link)
    this.linkWrap.appendChild(this.s24Link)
    this.linkWrap.appendChild(this.s32Link)

    this.menuEl.appendChild(this.inputEl)
    this.menuEl.appendChild(this.nameEl)
    this.menuEl.appendChild(this.linkWrap)

    document.body.appendChild(this.menuEl)
  }
  initEvents() {
    this.el.addEventListener('focus', () => this.showMenu())
    this.el.addEventListener('focusout', () => this.hideMenu())
    this.s8Link.addEventListener('click', e => this.handleClick(e, 8))
    this.s16Link.addEventListener('click', e => this.handleClick(e, 16))
    this.s24Link.addEventListener('click', e => this.handleClick(e, 24))
    this.s32Link.addEventListener('click', e => this.handleClick(e, 32))
    this.inputEl.addEventListener('change', e => this.handleFile(e))
  }
  handleClick(event, strength) {
    event.preventDefault()
    this.strength = strength
    this.inputEl.value = ''
    this.inputEl.click()
  }
  handleFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => {
      const rawData = reader.result;
      const hash = sjcl.hash.sha256.hash(rawData);
      const hex = sjcl.codec.hex.fromBits(hash);
      let pass = '';
      for (let i = 0; i < this.strength; i++)
        pass += FILEPASS_CHARACTER_MAP[hex[i * 2] + hex[i * 2 + 1]];
      this.el.value = pass
    }
    reader.readAsBinaryString(file);
  }
  showMenu() {
    const { left, top, height } = this.el.getBoundingClientRect()
    this.menuEl.style.left = left + 'px'
    this.menuEl.style.top = top + height + 'px'
    this.menuEl.classList.remove('filepass-menu-hidden')
    this.menuEl.classList.add('filepass-menu-visible')
  }
  hideMenu() {
    setTimeout(() => {
      this.menuEl.classList.remove('filepass-menu-visible')
      this.menuEl.classList.add('filepass-menu-hidden')
    }, 100)
  }
}
