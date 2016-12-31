//匀速运动，可以传入速度参数
/*function move(obj,attr,speed,target,endFn){
			speed = parseInt(getStyle(obj,attr))>target?-speed:speed;//判断速度的±
			clearInterval(obj.timer);
			obj.timer = setInterval(function(){
				var currentVal = parseInt(getStyle(obj,attr))+speed;
				if (currentVal>target&&speed>0||currentVal<target&&speed<0) {
					currentVal = target;//判断是否达到目标点
				}
				obj.style[attr] = currentVal + "px";
				
				if (currentVal == target) {
					clearInterval(obj.timer);
					endFn&&endFn();//判断是否有结束的回调函数
				}
			},30);
		}
function getStyle ( obj, attr ) { return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; }

*/
//缓冲运动，封装了图片淡入淡出
function move(obj,json,endFn){
            
            /*speed = parseInt(getStyle(obj,attr))>target?-speed:speed;//判断速度的±*/
            clearInterval(obj.timer);
            obj.timer = setInterval(function(){
                    var stop = true;
                    for(var attr in json){
                    var currentVal = 0;
                    if (attr == 'opacity') {
                        currentVal = parseInt(parseFloat(getStyle(obj,attr)*100));
                    }
                    else{
                       currentVal= parseInt(getStyle(obj,attr)); 
                    }
                    var speed = (json[attr] - currentVal)/8
                    speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
                    currentVal += speed;
                    if (currentVal != json[attr]) {
                        stop = false;
                    }
                    if (attr == 'opacity') {
                        obj.style.filter = 'alpha(opacity:' + currentVal + ')';
                        obj.style.opacity = currentVal/100;
                    }
                    else{
                        obj.style[attr] = currentVal + "px";
                    }
                }

                if (stop) {
                    clearInterval(obj.timer);
                    endFn&&endFn();//判断是否有结束的回调函数
                }

            },30);
        }
function getStyle ( obj, attr ) { return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; }