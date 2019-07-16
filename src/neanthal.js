import jamo from 'jamo'

// 종성을 제한하여 다음 문자로 늘여쓴다. 예) 꿈 -> 묶(X) 무끄(O)
const VALID_JONGSEONGS = ['ㄱ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅄ', 'ㅇ']

// 'ㅇ'은 종성으로 사용하지 않는다. 예) 아니 -> 이낭(X), 이나(O)
const PASSING_JONGSEONGS = ['ㅇ']

// 초성이 없이 시작할 경우 사용한다.
const DEFAULT_CHOSEONG = 'ᄋ'

// 중성이 없이 끌날 경우 사용한다.
const DEFAULT_JUNGSEONG = 'ᅳ'

function compose (...args) {
  const chars = flatten(Array.from(args))
  let gotChoseong = false
  let gotJungseong = false
  const result = []

  chars.forEach((ch, index) => {
    if (gotChoseong) {
      if (gotJungseong) {
        const nextCh = chars[index + 1]

        if (nextCh && jamo.isCompatVowel(nextCh)) {
          result.push(jamo.getChoseongFromCompat(ch))
          gotChoseong = true
          gotJungseong = false
        } else {
          if (!isPassingJongseong(ch)) {
            if (isValidJongseong(ch)) {
              result.push(jamo.getJongseongFromCompat(ch))
            } else {
              result.push(jamo.getChoseongFromCompat(ch))
              result.push(DEFAULT_JUNGSEONG)
            }
          }
          gotChoseong = false
          gotJungseong = false
        }
      } else {
        result.push(jamo.getJungseongFromCompat(ch))
        gotJungseong = true
      }
    } else {
      if (jamo.isCompatConsonant(ch)) {
        result.push(jamo.getChoseongFromCompat(ch))
      } else {
        result.push(DEFAULT_CHOSEONG)
        result.push(jamo.getJungseongFromCompat(ch))
        gotJungseong = true
      }
      gotChoseong = true
    }
  })

  return result.join('')
}

function convertWord (text) {
  const chars = Array.from(text)

  if (chars.every(jamo.isSyllable)) {
    return compose(chars.reverse().map(ch => flatten(jamo.decomposeAsCompat(ch)).reverse()))
  } else {
    return chars.join('')
  }
}

function flatten (arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), [])
}

function isPassingJongseong (ch) {
  return PASSING_JONGSEONGS.indexOf(ch) >= 0
}

function isValidJongseong (ch) {
  return VALID_JONGSEONGS.indexOf(ch) >= 0
}

function toNeanthal (text) {
  return text.split(/\s+/).map(convertWord).join(' ')
}

export default toNeanthal
