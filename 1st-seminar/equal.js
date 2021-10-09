const num = 1
const str = '1'

//동등 연산자 : 값만 비교
//==

//숫자를 문자로 바꿔서 확인
console.log(num == str);
// 2->"2" "2" + "2" = "22"(type캐스팅에 따라서 알아서 바뀜)
console.log(num + str);


//일치 연산자 : 값 & 타입 비교
//=== 이걸 주로 쓰는게 좋음 반대는 !==
console.log(num===str);