const memberArr = [
    {name : "서호영", location : "석계",  age : 26, hobby : "마술"},
    {name : "안준영", location : "수유",  age : 25, hobby : "운동"},
    {name : "박정현", location : "공릉",  age : 23, hobby : "댄스, 게임"},
    {name : "최유림", location : "길음",  age : 21, hobby : "유투브 보기"},
];

const printInfo = () =>{
    memberArr.forEach(member =>
        console.log(
            "이름 : " + member.name + " " +
            "위치 : " + member.location + " " +
            "나이 : " + member.age + " " +
            "취미 : " + member.hobby
        ),
    )
};

printInfo();
