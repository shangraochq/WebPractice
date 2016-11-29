function move(obj,attr,speed,target,endFn){
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