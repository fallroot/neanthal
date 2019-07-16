import toNeanthal from '../src/neanthal'

/*
 * IE에서 `String.prototype.normalize` 함수를 지원하지 않고 폴리필도 복잡하여
 * `toNeanthal` 함수의 결과값을 정규화하지 않고 처리하였기 때문에
 * 테스트 함수에서 정규화 후 값을 비교한다.
 */
const normalize = text => toNeanthal(text).normalize()

describe('뇌안탈 번역기 테스트', () => {
  test('한글 음절이 아닌 문자는 그대로 돌려준다', () => {
    expect(normalize('abc')).toBe('abc')
    expect(normalize('ㄱㄴㄷ')).toBe('ㄱㄴㄷ')
  })

  test('단어를 기준으로 자모를 분해한 후 역으로 다시 조립한다', () => {
    expect(normalize('미안')).toBe('나임')
  })

  test('마지막 글자에 종성이 없으면 변환시 "ㅇ"을 초성으로 처리한다', () => {
    expect(normalize('모두')).toBe('우돔')
    expect(normalize('아니')).toBe('이나')
  })

  test('종성으로 사용할 수 있는 글자를 제한하여 "-"을 중성으로 붙여 늘여쓴다', () => {
    expect(normalize('꿈')).toBe('무끄')
    expect(normalize('반갑다')).toBe('아드박납')
    expect(normalize('풍요')).toBe('요우프')
    expect(normalize('함께')).toBe('에끄마흐')
    expect(normalize('모두 함께')).toBe('우돔 에끄마흐')
  })

  test('이중 모음을 처리한다', () => {
    expect(normalize('과일')).toBe('리왁')
    expect(normalize('왜구')).toBe('우괘')
  })
})
