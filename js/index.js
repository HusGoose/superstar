$(function () {

    bannerSlide();

    //banner 图片轮播
    function bannerSlide() {
        let playSpeed = 3000;//轮播图自动播放速度，单位ms
        let bannerCount = 3;//设置轮播图个数
        let n = 1;//当前播放的banner
        //定时器
        let interval = setInterval(timmer, playSpeed);
        //定时函数
        function timmer() {
            if (bannerCount <= n) {
                n = 0;
            }
            //console.log(n);
            bannerPlay(n);

            n++;//当前banner自增
        }
        //控制轮播图播放
        function bannerPlay(n) {
            $('.pictureList a').removeClass('show').eq(n).addClass('show');
            $('.btnList li').removeClass('active').eq(n).addClass('active');
            n++;
        }

        //当鼠标移动到banner上时，停止自动播放
        $('#banner').mouseenter(() => {
            clearInterval(interval);
        }).mouseleave(() => {
            interval = setInterval(timmer, playSpeed);
        });

        //点击btn 显示对应的图片
        $('.btnList li').click(function () {
            //console.log($(this).index());
            bannerPlay($(this).index());
            n = $(this).index() + 1;
        });

        //点击显示下一张图片
        $('#banner-slideBtn .slide-right').click(() => {

            if (n >= bannerCount) {
                n = 0;
            }
            bannerPlay(n);
            n++;

        });
        //点击显示上一张图片
        $('#banner-slideBtn .slide-left').click(() => {
            n -= 2;
            if (n < 0) {
                n = bannerCount - 1;
            }
            bannerPlay(n);
            n++;
        });
    }
})