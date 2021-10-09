const { array } = require("prop-types");

const members = [
    { name: "강한희", part: "Server", group: "OB" },
    { name: "고성용", part: "Server", group: "OB" },
    { name: "구건모", part: "Server", group: "YB" },
    { name: "권세훈", part: "Server", group: "YB" },
    { name: "김영권", part: "Server", group: "YB" },
    { name: "김은지", part: "Server", group: "YB" },
    { name: "김진욱", part: "Server", group: "YB" },
    { name: "김희빈", part: "Server", group: "OB" },
    { name: "남지윤", part: "Server", group: "YB" },
    { name: "문규원", part: "Server", group: "YB" },
    { name: "박나희", part: "Server", group: "OB" },
    { name: "박정현", part: "Server", group: "YB" },
    { name: "박현지", part: "Server", group: "OB" },
    { name: "변주현", part: "Server", group: "OB" },
    { name: "서호영", part: "Server", group: "OB" },
    { name: "설지원", part: "Server", group: "YB" },
    { name: "손시형", part: "Server", group: "YB" },
    { name: "안준영", part: "Server", group: "OB" },
    { name: "장서현", part: "Server", group: "OB" },
    { name: "오예원", part: "Server", group: "OB" },
    { name: "이다은", part: "Server", group: "OB" },
    { name: "이동근", part: "Server", group: "YB" },
    { name: "이솔", part: "Server", group: "OB" },
    { name: "이승헌", part: "Server", group: "YB" },
    { name: "이정은", part: "Server", group: "YB" },
    { name: "이제준", part: "Server", group: "YB" },
    { name: "정설희", part: "Server", group: "OB" },
    { name: "조윤서", part: "Server", group: "OB" },
    { name: "조재호", part: "Server", group: "YB" },
    { name: "조찬우", part: "Server", group: "YB" },
    { name: "주어진사랑", part: "Server", group: "YB" },
    { name: "주효식", part: "Server", group: "YB" },
    { name: "채정아", part: "Server", group: "OB" },
    { name: "최영재", part: "Server", group: "OB" },
    { name: "최유림", part: "Server", group: "YB" },
    { name: "최진영", part: "Server", group: "YB" },
    { name: "허유정", part: "Server", group: "YB" },
];

function shuffle(members) {
    members.sort(()=>Math.random() - 0.5);
}

let obMembers;
let ybMembers;

function filterMember(members){
    obMembers = members.filter(member => member.group === "OB");
    ybMembers = members.filter(member => member.group ==="YB");
}

filterMember(members);

shuffle(obMembers);
shuffle(ybMembers);

const MAX_NUM = 4;

let team_num;
if(members.length % MAX_NUM != 0){
    team_num = Math.floor(members.length / MAX_NUM); //javascript는 나누면 소수점까지 계산됨
    team_num++;
}
else{
    team_num = Math.floor(members.length / MAX_NUM);
}

let team_array = new Array();

for(i = 0; i<team_num; i++){
    team_array[i] = "";
}

for(i = 0; i<obMembers.length; i++){
    team_array[i % team_num] += (obMembers[i].name + ' ');
}

for(i = 0; i<ybMembers.length; i++){
    team_array[(obMembers.length+i) % team_num] += (ybMembers[i].name + ' ');
}

for(i = 0; i<team_num; i++){
    console.log(i+"조 멤버 : " + team_array[i]);
}


