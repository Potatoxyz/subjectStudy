var toggleBar=function () {
    var rightFun=$('#rightFun');
    var isopenleftBar=false;
    var leftBar=$('#leftBar');
    var sideBar=$('#sideBar');
    var closeRightFun=$('#closeRightFun');
    var rightBar=$('#rightBar');
    $(rightFun).click(function () {
        $(rightBar).removeClass('toggleRightBar');
    });
    $(closeRightFun).click(function () {
        $(rightBar).addClass('toggleRightBar');
    });
    $(leftBar).click(function () {
        if(!isopenleftBar){
            $(sideBar).addClass('toggleSideBar');
            $(leftBar).addClass('bg-black');
            isopenleftBar=true;
        }
        else{
            $(sideBar).removeClass('toggleSideBar');
            $(leftBar).removeClass('bg-black');
            isopenleftBar=false;
        }
    })
};
//初始化左右两边的bar切换
toggleBar();