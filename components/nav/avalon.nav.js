define(["avalon","text!./avalon.nav.html","css!./avalon.nav.scss"], function(avalon,html) {
    avalon.ui["nav"] = function(element, data, vmodels) {
        //将它内部作为模板，或者使用文档碎片进行处理，那么你就需要用appendChild方法添加回去
        // var innerHTML = element.innerHTML
        var innerHTML=html;
        //由于innerHTML要依赖许多widget后来添加的新属性，这时如果被扫描肯定报“不存在”错误
        //因此先将它清空
        avalon.clearHTML(element);
        var model = avalon.define(data.navId, function(vm) {

            avalon.mix(vm, data.navOptions);//优先添加用户的配置，防止它覆盖掉widget的一些方法与属性
            vm.value = 0; // 给input一个个默认的数值
            vm.name="控件的名字被修改了";
            vm.plus = function(e) { // 只添加了这个plus
                model.value++;
            }
        })
        avalon.nextTick(function() {
            //widget的VM已经生成，可以添加回去让它被扫描
            element.innerHTML = innerHTML
            avalon.scan(element, [model].concat(vmodels))
        })
        console.log(model);
        return model//必须返回新VM
    }
    avalon.ui["nav"].defaults = {
        aaa: "aaa",
        bbb: "bbb",
        ccc: "ccc"
    }
    return avalon//必须返回avalon
})