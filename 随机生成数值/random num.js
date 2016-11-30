function newNumber(start,end){  
    return Math.round(Math.random()*(end-start)+start);//生成在[start,end]范围内的随机数值，只支持不小于0的合法范围  
}  
/// <summary>  
/// 目标数字是否已经存在于现有数字集合中  
/// </summary>  
/// <param name="para">现有数字集合</param>  
/// <param name="num">目标数字</param>  
function isHaveThisNumber(para,num){  
    //拒绝无效的数组  
    if(typeof(para) == "object")  
    {  
        if(para.length==0)  
        {  
            
            return false;  
        }  
    }  
    for(var i=0;i<para.length;i++){  
        if(para[i]==num){  
            
            return true;//与目标数组有重复  
        }  
    }  
    return false;  
}  
/// <summary>  
/// 生成一个不重复的随机数数组  
/// </summary>  
/// <param name="start">起始值</param>  
/// <param name="end">终止值</param>  
/// <param name="size">随机数大小</param>  
function newRandomNumbersWithNoRepeat(start,end,size){  
    var para=new Array();//目标随机数组  
    var rnum;//当前随机数  
    var currentIndex=0;//当前随机数组的索引  
    if(start>end||start<0||end<0||size<0){  
        
        return;  
    }  
    if(end-start+1<size){//验证随机数个数是否超出随机数范围  
         
        return;  
    }  
    for(var i=0;i<size;i++){//生成 size 个不重复的随机数  
        rnum=newNumber(start,end);//获取随机数  
        if(isHaveThisNumber(para,rnum)){//是否已经存在  
            while(isHaveThisNumber(para,rnum)){//获取新的随机数 直到不重复  
                rnum=newNumber(start,end);//重新获取随机数  
                
            }  
        }  
        para[currentIndex++]=rnum;//添加到现有数字集合中  
    }  
    return para;  
}  
function AppMain(){  
    var para=newRandomNumbersWithNoRepeat(1,2000,1000);//生成1到2000范围内  
      console.log(para)
}  
AppMain();