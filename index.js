/* switch开关 */
let body = document.querySelector('body');
let switchs = document.querySelector('#switch');
switchs.onclick = function () {
    if (switchs.checked == true) {
        body.classList.remove('light');
        body.classList.toggle('dark');

    } else {
        body.classList.remove('dark');
        body.classList.toggle('light');

    }
}
/* 日期时间 */
function nums(num) {
    return num < 10 ? '0' + num : num;
}
let date = new Date();
let year = document.querySelector('.year');
let month = document.querySelector('.month');
let day = document.querySelector('.day');
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
// let years = document.querySelector('.footer').querySelector('.year');
year.innerText = nums(date.getFullYear());
month.innerText = nums(date.getMonth() + 1);
day.innerText = nums(date.getDate());
hour.innerText = nums(date.getHours());
minute.innerText = nums(date.getMinutes());
second.innerText = nums(date.getSeconds());
let timer = 0;
timer = setInterval(() => {
    let date = new Date();
    hour.innerText = nums(date.getHours());
    minute.innerText = nums(date.getMinutes());
    second.innerText = nums(date.getSeconds());
    year.innerText = nums(date.getFullYear());
    // years.innerText = nums(date.getFullYear());
    month.innerText = nums(date.getMonth() + 1);
    day.innerText = nums(date.getDate());

    /* 根据时间切换信息 */
    let onday = document.querySelector('.onday');
    let newin = document.querySelector('.newin');
    if (hour.innerText < 6) {
        onday.textContent = 'hi,凌晨好啊！';
        newin.textContent = '年轻人不要太熬夜，早点休息！不要再emo了.';
    }
    else if (hour.innerText < 8) {
        onday.textContent = 'hi,早上好啊！';
        newin.textContent = '今天又是崭新的一天，要开心啊！';
    }
    else if (hour.innerText < 12) {
        onday.textContent = 'hi,上午好啊！';
        newin.textContent = '吃完早饭要多活动活动啊，可不要懒惰哦！';
    } else if (hour.innerText < 13) {
        onday.textContent = 'hi,中午好啊！';
        newin.textContent = '到了干饭的时刻了，你是否已经吃过了？';
    }

    else if (hour.innerText < 14) {
        onday.textContent = 'hi,中午好啊！';
        newin.textContent = '午休时间到你是否在休息呢？';
    }
    else if (hour.innerText < 18) {
        onday.textContent = 'hi,下午好啊！';
        newin.textContent = '午休过后要多活动活动啊，赶走懒惰！';
    }
    else if (hour.innerText < 20) {
        onday.textContent = 'hi,傍晚好啊！';
        newin.textContent = '到了干饭的时刻了，你是否已经吃过了？';
    }
    else if (hour.innerText < 24) {
        onday.textContent = 'hi,深夜好啊！';
        newin.textContent = '你是否还未入睡呢？';
    }
}, 1000);
/* 音乐侧边栏 */
let bar = document.querySelector('.bar');
let musicbar = document.querySelector('.musicbar');
let isshow = false;
bar.addEventListener('click', function () {
    if (isshow == false) {
        musicbar.classList.remove('hide');
        bar.classList.remove('showbar');
        isshow = true;
    }
    else {
        musicbar.classList.add('hide');
        bar.classList.add('showbar');
        isshow = false;
    }
})
/* 音乐控制器 */

let musicplay = document.querySelector('.musicpic').children[1];
let musicpause = document.querySelector('.musicpic').children[2];
let playerplay = document.querySelector('.playerplay');
let playerpause = document.querySelector('.playerpause');
musicplay.addEventListener('click', function () {
    topause();
    audio.play();
    starttimer = setInterval(changestarttime, 1000);
})
musicpause.addEventListener('click', function () {
    toplay();
    audio.pause();
    clearInterval(starttimer);
})
playerplay.addEventListener('click', function () {
    topause();
    audio.play();
    starttimer = setInterval(changestarttime, 1000);
})
playerpause.addEventListener('click', function () {
    toplay();
    audio.pause();
    clearInterval(starttimer);
})
function toplay() {
    musicplay.style.display = 'block';
    musicpause.style.display = 'none';
    playerplay.classList.add('select');
    playerpause.classList.remove('select');
}
function topause() {
    musicplay.style.display = 'none';
    musicpause.style.display = 'block';
    playerplay.classList.remove('select');
    playerpause.classList.add('select');
}
var audio = this.document.querySelector('.audio');
var audiolist = this.document.querySelectorAll('.audio');
var audioprev = this.document.querySelector('.musiccontorl').children[0];
var audionext = this.document.querySelector('.musiccontorl').children[3];
var musicname = this.document.querySelector('.musicinfo').children[0];
var musicauthor = this.document.querySelector('.musicinfo').children[1];
var listtitle = this.document.querySelectorAll('.listtitle');
var listauthor = this.document.querySelectorAll('.listauthor');
var musiclistli = this.document.querySelectorAll('.musiclist li');
var count = 0;
let musicpic = document.querySelector('.pic');
let pic = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
/* 点击列表内歌曲切换 */
function cutimg() {
    musicpic.src = './image/' + pic[count];
}
for (let lis = 0; lis < musiclistli.length; lis++) {
    musiclistli[lis].onclick = () => {
        toplay();
        count = lis;
        music();
        for (let w = 0; w < musiclistli.length; w++) {
            if (lis != w) {
                musiclistli[w].classList.remove('select');
                audiolist[w].pause();
                topause();
                if (audiolist[lis].currentTime >= 0) {
                    audiolist[lis].currentTime = 0;
                }
            }
            else {
                audiolist[w].play();
                musiclistli[w].classList.add('select');
            }
        }
    }
}
/* 中转控制 */
function music() {
    audio.pause();
    audio = audiolist[count];
    audio.currentTime = 0;
    musicname.innerHTML = listtitle[count].innerHTML;
    musicauthor.innerHTML = '-&nbsp;&nbsp;' + listauthor[count].innerHTML;
    audio.play();
    cutimg();
    starttimer = setInterval(changestarttime, 1000);
}
/* 上一首 */
audioprev.addEventListener('click', function () {
    musiclistli[count].classList.remove('select');
    count--;
    if (count < 0) {
        count = audiolist.length - 1;
    }
    music();
    musiclistli[count].classList.add('select');
    topause();
    starttimer = setInterval(changestarttime, 1000);
    audio.play();
})
/* 下一首 */
audionext.addEventListener('click', function () {
    next();
})
function next() {
    musiclistli[count].classList.remove('select');

    count++;
    if (count > audiolist.length - 1) {
        count = 0;
    }
    music();
    musiclistli[count].classList.add('select');
    topause();
    starttimer = setInterval(changestarttime, 1000);
    audio.play();
}
/* 歌曲起始结束时间，进度条/球 */
function changestarttime() {
    var starttime = audiolist[count].currentTime;
    var inminute = starttime / 60;
    var inminutes = parseInt(inminute);
    if (inminutes < 10) {
        inminutes = inminutes;
    }
    //秒
    var insecond = starttime % 60;
    var inseconds = Math.round(insecond);
    if (inseconds < 10) {
        inseconds = "0" + inseconds;
    }
    starttime = inminutes + ":" + inseconds;
    var playerstart = document.querySelector('.playerstart');
    playerstart.innerHTML = starttime;
    var alltime = audiolist[count].duration;
    var minute = alltime / 60;
    var minutes = parseInt(minute);
    if (minutes < 10) {
        minutes = minutes;
    }
    var second = alltime % 60;
    var seconds = Math.round(second);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    alltime = minutes + ":" + seconds;
    var playerend = document.querySelector('.playerend');
    playerend.innerHTML = alltime;
    var musiconload = this.document.querySelector('.musiconload');
    var ballstart = document.querySelector('.ball');
    let long = Math.round(audiolist[count].currentTime);
    let alllong = Math.round(audiolist[count].duration);
    musiconload.style.width = (long / alllong).toFixed(3) * 100 + '%';
    ballstart.style.left = (long / alllong).toFixed(3) * 100 + '%';
    x = audio.currentTime / audio.duration;
    if (x == 1) {
        topause();
        audio.pause();
        next();
    }
};
/* 日历展现与关闭 */
let shutbtn = document.querySelector('.shutbtn');
let calendar = document.querySelector('#calendar');
let dateso = document.querySelector('#date').children[0];
dateso.addEventListener('click', function () {
    shutbtn.style.display = 'block';
    calendar.classList.add('show');
})
shutbtn.addEventListener('click', function () {
    shutbtn.style.display = 'none';
    calendar.classList.remove('show');
})
/* 返回顶部 */
let sider = document.querySelector('.sider');
sider.addEventListener('click', function () {
    scrollTo(0, 0);
})
window.onscroll = function () {
    if (window.pageYOffset > 300) {
        sider.style.display = 'block';
    } else {
        sider.style.display = 'none';
    }
}
// document.querySelector('.sider').onclick = function () {
//     // scrollTo(0, 0);
//     x = document.documentElement.scrollTop;
//     scrollBy(0, -x);
// }

/* 雨滴效果 */
function getrand(max) {
    return Math.floor(Math.random() * max);
}
let rainmaxnums = 255;
function draw() {
    let rainnums = 0;
    let rainarr = document.querySelectorAll(".rain");
    rainnums = rainarr.length;
    for (let i = 0; i < rainnums; i++) {
        let top = parseInt(rainarr[i].offsetTop) + getrand(15);
        if (top > window.innerHeight) {
            rainarr[i].remove();
        } else {
            rainarr[i].style.top = top + "px";
        }
    }

    if (rainnums < rainmaxnums) {
        let raindom = document.createElement("div");
        raindom.className = "rain";
        raindom.style.top = "0px";
        raindom.style.opacity = parseInt(Math.random() * 10) / 10;
        raindom.style.filter = "blur(" + Math.random() * 5 + "px)";
        raindom.style.left = getrand(parseInt(window.innerWidth)) - 20 + "px";
        document.body.appendChild(raindom);
    }
}
// let intimers = 0;
// intimers = setInterval(() => {
//     draw();
// }, 10);
/* 蒙版效果 */
let shut = document.querySelector('.shut');
let draws = document.querySelector('#draw');
let datest = document.querySelector('#time').children[0];
let header = document.querySelector('.header');
let banner = document.querySelector('#banner');
let footer = document.querySelector('.footer');
datest.addEventListener('click', function () {
    toshow();
})
shut.addEventListener('click', function () {
    tohide();
})
function toshow() {
    shut.style.display = 'block';
    draws.classList.add('show');
    header.classList.add('show');
    banner.classList.add('show');
    footer.classList.add('show');
}
function tohide() {
    shut.style.display = 'none';
    draws.classList.remove('show');
    header.classList.remove('show');
    banner.classList.remove('show');
    footer.classList.remove('show');
}
/* 蒙版轮播图 */
let evenviewli = document.querySelector('.evenview').querySelectorAll('li');
let viewleft = document.querySelector('.left');
let viewright = document.querySelector('.right');
let viewcount = 0;
var idArr = ['first', 'second', 'third', 'fourth', 'last'];
initialize();
viewleft.addEventListener('click', function () {
    idArr.push(idArr.shift());
    initialize();
    viewcount--;
    if (viewcount < 0) {
        viewcount = evenviewli.length - 1;
    }
})
// /* 下一张 */
viewright.addEventListener('click', function () {
    idArr.unshift(idArr.pop());
    initialize();
    viewcount++;
    if (viewcount > evenviewli.length - 1) {
        viewcount = 0;
    }
})


function initialize() {
    for (let i = 0; i < evenviewli.length; i++) {
        evenviewli[i].id = idArr[i];
    }
}


/* 轮播图 */
let solidviewprev = document.querySelector('.prev');
let solidviewnext = document.querySelector('.next');
let solidviewimg = document.querySelector('.solidview').querySelectorAll('img');
let arr = document.querySelector('.viewarr').querySelectorAll('span');
let solidview = document.querySelector('.solidview');
let maths = 0;

solidview.onmouseenter = function () {
    clearTimeout(timers);
    solidviewnext.style.display = 'block';
    solidviewprev.style.display = 'block';
}
solidview.onmouseleave = function () {
    timers = setInterval(viewnext, 8000);
    solidviewprev.style.display = 'none';
    solidviewnext.style.display = 'none';
}
/* 上一张 */
solidviewprev.addEventListener('click', function () {
    solidviewimg[maths].classList.remove('select');
    arr[maths].classList.remove('select');
    maths--;
    if (maths < 0) {
        maths = solidviewimg.length - 1;
    }
    arr[maths].classList.add('select');
    solidviewimg[maths].classList.add('select');
})
/* 下一张 */
solidviewnext.addEventListener('click', function () {
    viewnext();
})
function viewnext() {
    solidviewimg[maths].classList.remove('select');
    arr[maths].classList.remove('select');
    maths++;
    if (maths > solidviewimg.length - 1) {
        maths = 0;
    }
    arr[maths].classList.add('select');
    solidviewimg[maths].classList.add('select');
}
let timers = setInterval(viewnext, 8000);
/* 小圆点 */
for (let k = 0; k < arr.length; k++) {
    arr[k].setAttribute('data-index', k);
    // 移入小圆点切换图片
    arr[k].onmouseover = function () {
        //定时器存在时清除定时器
        if (timers) {
            clearInterval(timers);
        }
        //遍历
        for (var b = 0; b < arr.length; b++) {
            //设置当前焦点元素的样式
            var index = this.getAttribute('data-index');
            if (arr[k] == this) {
                solidviewimg[maths].classList.remove('select');
                arr[maths].classList.remove('select');
                solidviewimg[index].classList.add('select');
                arr[index].classList.add('select');
                maths = index;
            }
        }
    }
    /* 点击小圆点改变图片 */
    arr[k].addEventListener('click', function () {
        var index = this.getAttribute('data-index');
        if (index !== maths) {
            if (arr[k] == this) {
                solidviewimg[maths].classList.remove('select');
                arr[maths].classList.remove('select');
                solidviewimg[index].classList.add('select');
                arr[index].classList.add('select');
                maths = index;
            }
        }
    })
}


/* 点击切换文字，同时隐藏coverblack */
let blackcontrol = document.querySelector('.blackcontrol');
let btn = document.querySelector('.blackcontrol').children[1];
let coverblack = document.querySelector('.coverblack');
let blackcover = document.querySelector('.blackcover');
let tdate = document.querySelector('#date');
let ttime = document.querySelector('#time');
let english = document.querySelector('.english');
let chinese = document.querySelector('.chinese');
let isture = true;
btn.addEventListener('click', function () {
    if (isture == true) {
        btn.setAttribute('class', 'opening');
        coverblack.classList.add('show');
        blackcover.classList.add('show');
        btn.textContent = '开启';
        tdate.style.transform = 'translateX(' + 0 + '%)';
        ttime.style.transform = 'translateX(' + 0 + '%)';
        english.style.transform = 'translateY(' + 0 + 'px)';
        chinese.style.transform = 'translateY(' + 0 + '%)';
        isture = false;
    } else {
        btn.setAttribute('class', 'shuting');
        btn.textContent = '关闭';
        tdate.style.transform = 'translateX(' + -100 + '%)';
        ttime.style.transform = 'translateX(' + 100 + '%)';
        english.style.transform = 'translateY(' + 100 + 'px)';
        chinese.style.transform = 'translateY(' + 100 + '%)';
        coverblack.classList.remove('show');
        blackcover.classList.remove('show');
        isture = true;
    }
})