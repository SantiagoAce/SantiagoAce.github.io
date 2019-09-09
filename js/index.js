// 轮播图函数
    // 获取图片信息
    function slideshow() {
        var slideshow = document.getElementById("slider");
        imgs = slideshow.getElementsByTagName("img"); //得到 slider 的图片
        pages = slideshow.getElementsByTagName("span"); //得到页码按钮
        buttons = slideshow.getElementsByTagName("p"); //得到描述
        left_btn = buttons[0];
        right_btn = buttons[1];
        current = 0; //current 为当前的图片编号
    
        function slideOff() {
            imgs[current].className = ""; //图片淡出
            pages[current].className = "";
        }
        
        function slideOn() {
            imgs[current].className = "active"; //图片淡入
            pages[current].className = "active";
        }
        
            //切换图片的函数
        function changeSlider() { 
            slideOff();
            current++; //自增1
            if (current >= 5) {
                current=0;
            }
            slideOn();
        }
            // 每2s调用 changeSlide 函数进行图片轮播
        var slideon = setInterval(changeSlider, 2000);
        
        slideshow.onmouseover = function() {
            clearInterval(slideon); //当鼠标悬停时清除轮播事件
        }
        slideshow.onmouseout = function() {
            slideon = setInterval(changeSlider, 2000); //当鼠标移开时重新开始轮播事件
        }
        
        // 定义鼠标移入、移出页码按钮事件
        for(var i = 0; i < pages.length; i++) {
            pages[i].onmouseover = function() {
                slideOff(); //图片淡出
                current = this.getAttribute("name"); //得到鼠标停留的页码对应的 current
                slideOn(); //图片淡入
            }
        }
        
        left_btn.onclick = function() {
            slideOff(); //图片淡出
            current--;
            if(current < 0) {
                current = 4;
            }
            slideOn(); //图片淡入
        }
        right_btn.onclick = function() {
            slideOff(); //图片淡出
            current++;
            if(current > 4) {
                current = 0;
            }
            slideOn(); //图片淡入
        }
    }
    
    slideshow();