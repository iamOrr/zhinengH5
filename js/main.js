$(function() {
    var swiperS, cate, energT;
    var score = '非凡的能力让你无可取代！';
    var content = '关心李世乭，还不如关心下你自己！AI和你比，老板更愿意雇佣谁呢？';
    var dangci = 0;
    var zhiye = "??";
    var preUrl = "http://news.sohu.com/upload/yufeng/zhineng/renwu/";
    // cates

    var cats = [
        {
            tp: 1,
            pos: [
                { name: '编辑记者', per: 11.4,a1:7,a2:8,a3:6 },
                { name: '策划文案', per: 5.5,a1:9,a2:8,a3:8 },
                { name: '作家', per: 3.8,a1:9,a2:9,a3:4 },
                { name: '评论员', per: 17.5,a1:7,a2:9,a3:4 },
                { name: '主持人', per: 10.2,a1:8,a2:8,a3:8 },
                { name: '歌唱家', per: 7.4,a1:3,a2:6,a3:7 },
                { name: '制作人/导演', per: 2.2,a1:8,a2:9,a3:9 },
                { name: '演员', per: 37.4,a1:7,a2:7,a3:6 },
                { name: '运动员', per: 28.3,a1:4,a2:7,a3:7 },
                { name: '舞者家', per: 12.7,a1:9,a2:7,a3:7 },
                { name: '裁判员', per: 98.3,a1:1,a2:3,a3:3 },
                { name: '自媒体红人', per: 10.5,a1:9,a2:7,a3:5 },
                { name: '摄影师/摄像师', per: 2.1,a1:9,a2:8,a3:8 },
                { name: '作曲家', per: 1.5,a1:9,a2:7,a3:7 }
            ]
        },
        {
            tp: 2,
            pos: [
                { name: '电话/网络客服', per: 99,a1:1,a2:2,a3:1 },
                { name: '促销员', per: 98.6,a1:1,a2:3,a3:1 },
                { name: '收银员', per: 97.1,a1:1,a2:1,a3:2 },
                { name: '售货员', per: 92.3,a1:1,a2:2,a3:2 },
                { name: '售楼小姐/先生', per: 86.4,a1:2,a2:7,a3:2 },
                { name: '广告推销代理', per: 54.2,a1:6,a2:9,a3:5 },
                { name: '旅行/教育/房产中介', per: 9.9,a1:7,a2:9,a3:7 },
                { name: '器械/医药代表', per: 1.6,a1:6,a2:8,a3:7 }
            ]
        },
        {
            tp: 3,
            pos: [
                { name: '报税员', per: 98.7,a1:1,a2:2,a3:2 },
                { name: '出纳', per: 98.3,a1:1,a2:2,a3:2 },
                { name: '采购员', per: 98,a1:1,a2:2,a3:1 },
                { name: '会计', per: 93.5,a1:1,a2:2,a3:2 },
                { name: '前台', per: 86.5,a1:1,a2:3,a3:3 },
                { name: '档案管理员', per: 75.9,a1:1,a2:2,a3:2 },
                { name: '私人助理', per: 16,a1:2,a2:4,a3:3 },
                { name: '人力资源专员', per: 17,a1:2,a2:5,a3:3 }
            ]
        },
        {
            tp: 4,
            pos: [
                { name: '软件开发师', per: 4.2,a1:8,a2:8,a3:7 },
                { name: '程序员', per: 48.1,a1:4,a2:5,a3:6 },
                { name: '数据分析师', per: 3.0,a1:7,a2:9,a3:8 },
                { name: '安全工程师', per: 20.6,a1:6,a2:7,a3:7 },
                { name: '通信工程师', per: 20.6,a1:4,a2:8,a3:8 },
                { name: '网络视频主播', per: 5.1,a1:8,a2:9,a3:7 },
                { name: '电竞主播', per: 10.3,a1:7,a2:8,a3:8 },
                { name: '游戏代练', per: 99.4,a1:1,a2:1,a3:1 },
                { name: '鉴黄师', per: 43.1,a1:2,a2:4,a3:4 },
                { name: '程序员鼓励师', per: 10.3,a1:7,a2:8,a3:8 }
            ]
        },
        {
            tp: 5,
            pos: [
                { name: '画家/雕塑家/插画家/漫画家', per: 4.2,a1:8,a2:8,a3:6 },
                { name: '室内设计师', per: 2.2,a1:9,a2:9,a3:7 },
                { name: '服装设计师', per: 2.1,a1:9,a2:8,a3:8 },
                { name: '布景/布展师', per: 0.5,a1:9,a2:9,a3:9 },
                { name: '平面设计师', per: 8.2,a1:8,a2:7,a3:8 },
                { name: '工业设计师', per: 3.7,a1:9,a2:8,a3:7 },
                { name: '建筑师', per: 1.8,a1:9,a2:8,a3:8 },
                { name: '测绘员', per: 52.3,a1:2,a2:6,a3:6 }
            ]
        },
        {
            tp: 6,
            pos: [
                { name: '高级技工', per: 22.4,a1:6,a2:7,a3:8 },
                { name: '设备组装员', per: 98,a1:1,a2:1,a3:1 },
                { name: '机械操作工人', per: 64.6,a1:2,a2:5,a3:4 },
                { name: '机械维修师', per: 70.6,a1:2,a2:5,a3:4 },
                { name: '农/牧/渔民', per: 70.6,a1:2,a2:3,a3:3 }
            ]
        },
        {
            tp: 7,
            pos: [
                { name: '门卫', per: 66.3,a1:1,a2:6,a3:6 },
                { name: '保洁', per: 68.8,a1:1,a2:4,a3:6 },
                { name: '快递员', per: 67.5,a1:1,a2:5,a3:5 },
                { name: '服务员', per: 93.7,a1:1,a2:3,a3:3 },
                { name: '食堂厨师', per: 96.3,a1:1,a2:2,a3:2 },
                { name: '主厨', per: 10.3,a1:8,a2:8,a3:7 },
                { name: '调酒师', per: 76.8,a1:6,a2:2,a3:2 },
                { name: '理发师', per: 79.7,a1:5,a2:3,a3:1 },
                { name: '化妆师', per: 1,a1:9,a2:8,a3:8 },
                { name: '健身教练', per: 8.5,a1:6,a2:9,a3:8 },
                { name: '导游', per: 90.6,a1:2,a2:5,a3:5 },
                { name: '入殓师', per: 53.6,a1:3,a2:7,a3:4 },
                { name: '美甲师/美容师', per: 94.5,a1:2,a2:3,a3:1 },
                { name: '盲人按摩', per: 54.1,a1:3,a2:6,a3:5 },
                { name: '公交/出租/地铁驾驶员', per: 89.4,a1:1,a2:2,a3:2 },
                { name: '家电维修', per: 72.2,a1:2,a2:3,a3:2 },
                { name: '月嫂', per: 12.2,a1:4,a2:9,a3:8 }
            ]
        },
        {
            tp: 8,
            pos: [
                { name: '图书管理员', per: 64.9,a1:4,a2:5,a3:5 },
                { name: '助教', per: 55.7,a1:3,a2:8,a3:6 },
                { name: '初高中教师', per: 17.4,a1:6,a2:9,a3:7 },
                { name: '教授', per: 3.2,a1:8,a2:9,a3:6 },
                { name: '特殊教育老师', per: 1.6,a1:9,a2:9,a3:9 },
                { name: '幼师', per: 0.7,a1:9,a2:9,a3:8 },
                { name: '小学教师', per: 0.4,a1:9,a2:9,a3:9 },
                { name: '口译、笔译人员', per: 38.4,a1:3,a2:7,a3:4 },
                { name: '校长', per: 67.6,a1:5,a2:7,a3:5 },
                { name: '教务处主任', per: 82.3,a1:4,a2:5,a3:4 },
                { name: '兽医', per: 3.8,a1:6,a2:7,a3:6 },
                { name: '牙医', per: 2.3,a1:7,a2:9,a3:7 },
                { name: '药剂师', per: 1.2,a1:9,a2:8,a3:6 },
                { name: '内科医生', per: 0.4,a1:7,a2:9,a3:9 },
                { name: '外科医生', per: 0.3,a1:6,a2:9,a3:9 },
                { name: '心理医生', per: 2.1,a1:9,a2:9,a3:4 }
            ]
        },
        {
            tp: 9,
            pos: [
                { name: '银行柜员', per: 98.4,a1:1,a2:2,a3:2 },
                { name: '证劵分析师', per: 61.3,a1:3,a2:5,a3:4 },
                { name: '保险销售员', per: 91.9,a1:2,a2:4,a3:2 },
                { name: '拍卖师', per: 98,a1:1,a2:2,a3:2 },
                { name: '珠宝品鉴师', per: 96.3,a1:1,a2:2,a3:2 },
                { name: '理财顾问', per: 23.3,a1:6,a2:8,a3:2 },
                { name: '操盘手', per: 52.2,a1:5,a2:7,a3:5 }
            ]
        },
        {
            tp: 10,
            pos: [
                { name: '律师助理', per: 94.5,a1:5,a2:9,a3:8 },
                { name: '法庭记录员', per: 50.2,a1:1,a2:4,a3:5 },
                { name: '法官', per: 40.1,a1:1,a2:8,a3:6 },
                { name: '律师', per: 3.5,a1:3,a2:9,a3:8 },
                { name: '警察', per: 9.8,a1:2,a2:8,a3:8 },
                { name: '城管', per: 48.6,a1:4,a2:9,a3:6 },
                { name: '公务员', per: 1.5,a1:8,a2:9,a3:8 },
                { name: '社工', per: 0.7,a1:8,a2:9,a3:9 },
                { name: '民航飞行员', per: 18.1,a1:3,a2:9,a3:9 },
                { name: '军人', per: 99.1,a1:1,a2:2,a3:2 },
                { name: '航天/化学/机械工程师', per: 1.7,a1:9,a2:9,a3:9 },
                { name: '历史/经济/社会学家', per: 43.9,a1:4,a2:8,a3:6 },
                { name: '代表委员', per: 51.0, a1:1, a2:5, a3:7}
            ]
        }
    ]

    function drawenergy(precent) {
        var nengliang = document.getElementById('nengliang');
        var ctx_nl = nengliang.getContext("2d");
        nengliang.width = 387;
        nengliang.height = 196;

        var addingPer = 0;
        energT = setInterval(function() {
            if( addingPer < precent ){
                addingPer += 0.8;
                
                var angle = Math.PI * (addingPer/100 + 1);
                ctx_nl.clearRect(0,0,387,196);
                ctx_nl.beginPath();
                ctx_nl.strokeStyle = 'rgb(0,148,209)';
                ctx_nl.arc(193.5,196,193.5,Math.PI,angle, false);
                
                ctx_nl.strokeStyle = 'rgb(0,148,209)';
                ctx_nl.lineWidth = 3;
                ctx_nl.stroke();

                var left,top,dx = 0;
                dx = 193.5 * Math.cos( Math.PI * (addingPer/100) )
                if(left > 193.5){
                    left = dx - 8.5 - 193.5;
                }
                else if(left == 193.5){
                    top = 193.5;
                }else{
                    left = 193.5 - dx - 8.5;
                }
             
                top = 193.5 - Math.sqrt( (193.5*193.5 - dx*dx) );
                $(".p-light").css({ 'left': left + 'px', 'top': top + 'px' });
                var rot = 180 * (addingPer/100);
                if( rot > 90 ) rot = (rot - 90);
                else if(rot == 90) rot = 0;
                else rot = (rot - 90);
                $(".p-light").css({ 'transform': 'rotate('+rot+'deg)', '-webkit-transform': 'rotate('+rot+'deg)' })

            }else{
                clearInterval(energT);
            }
        }, 10);
    }

    

    //leida
    var leida = document.getElementById('leida');
    var ctx_ld = leida.getContext("2d");
    // ctx_ld.beginPath();
    // ctx_ld.arc(120,148,82,0,Math.PI*2)
    // ctx_ld.stroke();

    var R = 82;
    var center = {x: 120, y: 148}
    function drawleida(a1, a2, a3) {

        var d1 = R * (a1/10);
        var d2 = R * (a2/10);
        var d3 = R * (a3/10);

        var x2 = d2 * Math.cos(Math.PI/6);
        var x3 = d3 * Math.cos(Math.PI/6);
        var y2 = d2 * Math.sin(Math.PI/6);
        var y3 = d3 * Math.sin(Math.PI/6);
        

        // leida animation
        var leidaps = [
            {x: center.x, y: center.y - d1},
            {x: center.x - x2, y: center.y + y2},
            {x: center.x + x3, y:  center.y + y3}
        ]
        var leidass = [
            {x: center.x, y: center.y},
            {x: center.x, y: center.y},
            {x: center.x, y: center.y}
        ]
        var brek0 = false;
        var brek1 = false;
        var brek2 = false;
        var brek3 = false;
        var brek4 = false;
        var leidaSlow = setInterval(function() {

            // a1 Slow
            if( leidass[0].y > leidaps[0].y ){
                leidass[0].y --;
            }else{
                brek4 = true;
            }
            if(leidass[1].x > leidaps[1].x){
                leidass[1].x --;
            }else{
                brek3 = true;
            }
            if(leidass[1].y < leidaps[1].y){
                leidass[1].y += Math.tan(Math.PI/6);
            }else{
                brek2 = true;
            }
            if(leidass[2].x < leidaps[2].x){
                leidass[2].x ++;
            }else{
                brek1 = true;
            }
            if(leidass[2].y < leidaps[2].y){
                leidass[2].y += Math.tan(Math.PI/6);
            }else{
                brek0 = true;
            }

            if ( brek1 && brek2 && brek3 && brek4 ){
                clearInterval(leidaSlow);
            }

            ctx_ld.clearRect(0,0,243,234);
            ctx_ld.beginPath();
            ctx_ld.arc(leidass[0].x , leidass[0].y,2,0,Math.PI*2, false);
            ctx_ld.arc(leidass[1].x , leidass[1].y,2,0,Math.PI*2, false);
            ctx_ld.arc(leidass[2].x , leidass[2].y,2,0,Math.PI*2, false);
            ctx_ld.arc(leidass[0].x , leidass[0].y,2,0,Math.PI*2, false);
            ctx_ld.moveTo(leidass[0].x, leidass[0].y);
            ctx_ld.lineTo(leidass[1].x, leidass[1].y);
            ctx_ld.lineTo(leidass[2].x, leidass[2].y);
            ctx_ld.lineTo(leidass[0].x, leidass[0].y);
            ctx_ld.fillStyle = "rgba(94,181,218,0.5)";
            ctx_ld.fill();
            ctx_ld.strokeStyle = "rgba(94,181,218,0.5)";
            ctx_ld.stroke();
        }, 5);
    }
    

    // jiaohu
    $(".sels").on('touchend', function(e) {
        $(".sels").removeClass('seled');
        $(this).addClass('seled');

        cate = cats[$(this).attr("ind")];
        
        setCate($(this).attr("ind"));
        setTimeout(function() {
            swiper.slideTo(2);
        }, 301);
    });

    $("#share-btn").on('touchstart',function (e) {
        content = "我是一名"+zhiye+",我被机器人取代的几率为"+dangci+"%,"+score;
        $("#result1").text(zhiye);
        $("#result3").text(dangci +"%");
        $("#result4").text(score);
        // console.log(content)
        swiper.slideTo(4);
    });
    $("#return-btn").on('touchstart',function (e) {
        swiperS.removeAllSlides();
        swiper.slideTo(1);
    });
    $("#sildermain").on('touchmove',function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
    // $("#fengd").on('touchstart',function (e) {
    //  e.preventDefault();
    //  e.stopPropagation();
    //  swiper.slideTo(3);
    // });
    $("#erweima").on('touchstart',function (e) {
        e.stopPropagation();
    });
    $("#begin").on('touchstart', function(e) {
        swiper.slideTo(1);
    });
    $("#fdreturn").on('touchstart', function(e) {
        swiperS.removeAllSlides();
        swiper.slideTo(1);
    });

    

    function setCate(index) {
        var html = "";

        drawenergy(cate.pos[0].per);

        $("#process-per").text(cate.pos[0].per + '%');

        drawleida(cate.pos[0].a1,cate.pos[0].a2,cate.pos[0].a3);

        var perc = cate.pos[0].per;
                    
        if( perc >= 0 && perc <= 15 ){
            score = '非凡的能力让我无可取代！';
        }
        else if( perc > 15 && perc <= 45 ){
            score = '保留对AI的恐惧是件好事儿！';
        }
        else if( perc > 45 && perc <= 55 ){
            score = '再偷懒就要饿肚子了！';
        }
        else if( perc > 55 && perc <= 80 ){
            score = '不用电脑已经快不会写字了!';
        }
        else if( perc > 80 && perc <= 100 ){
            score = '趁早给自己找条后路吧！';
        }
        dangci = perc;
        zhiye = cate.pos[0].name;
        content = "我是一名"+zhiye+",我被机器人取代的几率为"+dangci+"%,"+score;

        // chushi renwu
        var renwuIMG = new Image();
        var url = "url('http://news.sohu.com/upload/yufeng/zhineng/renwu/"+cate.tp+"/z0.png')";
        renwuIMG.onload = function() {
            $("#renwu").css({'background': url});
        }
        renwuIMG.onerror = function() {
            $("#renwu").css({'background': 'http://mfiles.sohu.com/news/yufeng/imgs2/katong2.png'});
        }
        renwuIMG.src = 'http://news.sohu.com/upload/yufeng/zhineng/renwu/'+cate.tp+'/z0.png';

        if(swiperS) {
            for (var i = 0; i <= cate.pos.length - 1; i++) {
                html = '<div class="swiper-slide" ind="'+i+'" >' + cate.pos[i].name + '</div>';
                swiperS.appendSlide(html);
            };
            swiperS.detachEvents();

            swiperS.attachEvents();
        }else{
            swiperS = new Swiper('.swiper-container2', {
                slidesPerView: 4,
                centeredSlides: true,
                pagination: false,
                height: 250,
                direction: 'vertical',
                onSlideChangeStart: function() {
                    $("#process-per").removeClass('ppani');
                },
                onSlideChangeEnd: function(swiper){
                    // $('#slidesee').show();
                    var current = $(".swiper-container2 .swiper-wrapper .swiper-slide-active");

                    if(energT) { 
                        clearInterval(energT); 
                    }
                    
                    var perc = cate.pos[current.attr('ind')].per;
                    
                    if( perc >= 0 && perc <= 15 ){
                        score = '非凡的能力让我无可取代！';
                    }
                    else if( perc > 15 && perc <= 45 ){
                        score = '保留对AI的恐惧是件好事儿！';
                    }
                    else if( perc > 45 && perc <= 55 ){
                        score = '再偷懒就要饿肚子了！';
                    }
                    else if( perc > 55 && perc <= 80 ){
                        score = '不用电脑已经快不会写字了!';
                    }
                    else if( perc > 80 && perc <= 100 ){
                        score = '趁早给自己找条后路吧！';
                        
                    }
                    dangci = perc;
                    zhiye = cate.pos[current.attr('ind')].name;
                    content = "我是一名"+zhiye+",我被机器人取代的几率为"+dangci+"%,"+score;

                    drawenergy(cate.pos[current.attr('ind')].per);

                    drawleida(cate.pos[current.attr('ind')].a1,cate.pos[current.attr('ind')].a2,cate.pos[current.attr('ind')].a3);
                    // per animation
                    $("#process-per").addClass('ppani');
                    setTimeout(function() {
                        $("#process-per").text(cate.pos[current.attr('ind')].per + '%');
                    }, 20);

                    // renwudonghua
                    // console.log(cate.tp);
                    // console.log(current.attr('ind'));
                    var renwuIMG = new Image();
                    var url = "url('http://news.sohu.com/upload/yufeng/zhineng/renwu/"+cate.tp+"/z"+current.attr('ind')+".png')";
                    renwuIMG.onload = function() {
                        $("#renwu").css({'background': url});
                    }
                    renwuIMG.onerror = function() {
                        $("#renwu").css({'background': 'http://mfiles.sohu.com/news/yufeng/imgs2/katong2.png'});
                    }
                    renwuIMG.src = 'http://news.sohu.com/upload/yufeng/zhineng/renwu/'+cate.tp+'/z'+current.attr('ind')+'.png';
                }
            });
            for (var i = 0; i <= cate.pos.length - 1; i++) {
                html = '<div class="swiper-slide" ind="'+i+'" >' + cate.pos[i].name + '</div>';
                swiperS.appendSlide(html);
            };
        }
    };

    var  imgUrl= 'http://news.sohu.com/upload/yufeng/zhineng/imgs/zhuanfa.jpg';
    var link = window.location.href;
    var title='AlphaoGo向你下战书?你敢应战吗?';
    appid = "";
    gSound = '';
    function shareFriend() {
        WeixinJSBridge.invoke("sendAppMessage", {
            appid: appid,
            img_url: imgUrl,
            img_width: "200",
            img_height: "200",
            link: link,
            desc: content,
            title: title
        }, function(b) {})
    }

    function shareTimeline() {
        WeixinJSBridge.invoke("shareTimeline", {
            appid: appid,
            img_url: imgUrl,
            img_width: "200",
            img_height: "200",
            link: link,
            desc: content,
            title: content
        }, function(b) {})
    }

    function shareWeibo() {
        WeixinJSBridge.invoke("shareWeibo", {
            content: content,
            url: link
        }, function(b) {})
    }
    document.addEventListener("WeixinJSBridgeReady", function onBridgeReady() {
        WeixinJSBridge.on("menu:share:appmessage", function(b) {
            shareFriend();
        });
        WeixinJSBridge.on("menu:share:timeline", function(b) {
            shareTimeline();
        });
        WeixinJSBridge.on("menu:share:weibo", function(b) {
            shareWeibo();
        })
    }, false);
});