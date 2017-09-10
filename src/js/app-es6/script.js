// 剧本

define(['jquery', 'swiper', 'text!../template/test.html!strip', 'frameplayer', 'tools', 'jquery.cookie', 'jquery.hammer'], function ($, swiper, testHtml, frameplayer, tools) {
    var self = {};

    self.open = function () {
        console.log('加载完成！');

        // $.cookie('QQ', '123456');


        // let a = '下一季，呵呵', b = '郑伊健312';

        // console.log($.cookie('QQ'));
        // console.log(a + b);

        // $('#qq').hammer().on('tap', function () {
        //     $('body').append(testHtml);
        // });

        tools.fixPosition(640);
        
        //
        var t = frameplayer({
            target: $('.test'),
            total: 5,
            row: 1,
            loop: true,
            loopDelay: 6,
            loopTimes:3,
            fps: 6,
            scale: 0.5,
            loopCallback: function (times) {
                console.log('完成' + times + '次');

                if (times > 113) {
                    clearInterval(t);
                }
            },
            finishedCallback : function() {
                console.log('播放完成');

                //alert(arguments.callee)
            },
            autosize : false
        });
        
        test({flag:false});
        // $.Deferred
    };

    function test(options={}) {
        var {time=12, flag=true} = options;
        console.log(flag);
    }


    return self;
});

















