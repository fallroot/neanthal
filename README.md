<p align="center"><img src="icons/128.png" alt="뇌안탈 언어 변환기"></p>

# 뇌안탈 언어 변환기

한글을 드라마 [아스달 연대기](http://program.tving.com/tvn/arthdalchronicles)에 나오는 뇌안탈 종족의 언어로 변환

## 변환 알고리즘

* 음절의 초·중·종성을 분해한다.
* 분해한 단어 단위로 자모를 거꾸로 뒤집은 다음 다시 조립한다.
* 마지막 글자에 종성이 없으면 "ㅇ"을 초성으로 처리한다.
* 종성 자리에 "ㄲㄷㄸㅅㅆㅈㅉㅊㅋㅌㅍㅎ" 등의 문자가 올 경우 중성 "ㅡ" 문자를 붙여 늘여쓴다.

## 설치
```sh
$ npm install neanthal
```
또는
```html
<script src="https://unpkg.com/neanthal@0.1.0/dist/neanthal.js"></script>
```

## 사용법
```js
import toNeanthal from 'neanthal'

toNeanthal('모두') // 우돔
toNeanthal('아니') // 이나
toNeanthal('꿈') // 무끄
toNeanthal('반갑다') // 아드박납
toNeanthal('풍요') // 요우프
toNeanthal('함께') // 에끄마흐
toNeanthal('모두 함께') // 우돔 에끄마흐
```

## 아이콘

Icons made by [Freepik](https://www.freepik.com/) from [www.flaticon.com](https://www.flaticon.com/) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/)
