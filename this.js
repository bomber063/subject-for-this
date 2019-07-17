var name='hunger'
var obj={
    name:'vallay',
    fn:function(){
        console.log(this)//这里的this是外面包裹的对象obj
        this.name='jirengu'
        console.log(this)//这里的this是外面包裹的对象obj经过重新赋值后，所以this.name改变为'jirengu'
        var name='world'
        function fn2(){//这里有一个函数就说明this是外面的obj2，而不是包裹它的对象obj
            var name='hello'
            console.log(this.name)
            console.log(this)

        }
        return fn2
    }
}

var obj2={
    name:'oh my god'
}

obj2.fn=obj.fn()
obj2.fn()//执行的结果是oh my god