var that;
class Tab{
    constructor(id){
        // 获取元素
        that=this;
        // 获取所有的id
        this.main=document.querySelector(id);
        // 获取所有的li标签
        this.lis =this.main.querySelectorAll("li");
        // 获取所有section标签
        this.sections=this.main.querySelectorAll("section");
        // 获取加号
        this.add=this.main.querySelector(".tabadd")
        this.init();
    }
    init(){
        // init 初始化操作让相关的元素绑定事件
        // 通过遍历l所有i标签来给所有的li标签添加点击事件
        for(var i=0; i<this.lis.length;i++){
            // 咬苹果 做标记
            this.lis[i].index =i;
            this.lis[i].onclick=this.toggleTab;
        }
        // 设置加号的点击事件
        this.add.onclick=this.addTab;
    }
    // 切换功能
    toggleTab(){
        that.clearClass();
        this.className='liactive';
        that.sections[this.index].className='conactive';
    }
    clearClass(){
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].className='';
            this.sections[i].className='';
        }
    }

    // 添加功能
    addTab(){
    //   创建li元素和section元素
    var li=`<li><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>`;
    var section=` <section class="conactive">测试1</section>`;
    //  将创建的元素追加到相应的父元素中
    }
    // 删除功能
    removeTab(){}
    // 修改功能
    editTab(){}
}
new Tab("#tab");
