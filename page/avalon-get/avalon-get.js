define(["avalon","../../components/mmRouter/mmRouter"], function () {
            var model = avalon.define('box', function(vm) {
                vm.tab = {currpage:'tab1',content:'tab1', page:[{name:'tab1', title:'选项卡一',url:'#!/tab1'}]};
                vm.tab_close = function (tname) {
                    while(true) {
                        var l = vm.tab.page.length;
                        if (l===1) break;
                        loaded[vm.tab.page[l-1].name] = 0;
                        if (vm.tab.page[l-1].name===tname) {
                            vm.tab.page.pop();
                            break;
                        } else {
                            vm.tab.page.pop();
                        }
                    }
                    avalon.router.navigate("/tab1");
                    vm.tab.currpage = 'tab1';
                }
            });
            var loaded = {};
            avalon.router.when(["/nihao/:id"], "/tab:id")
            //avalon.router.when 配置重定向规则

            //avalon.router.get 添加一个router规则
            avalon.router.get("/tab1", function(a) {
                var page = 'tab1';
                model.tab.content = "页面："+page;
                model.tab.currpage = page;
            });

            avalon.router.get("/tab2", function(a) {
                var page = 'tab2';
                var a = {name:page, title:'选项卡二', url:'#!/tab2'};
                if (!loaded[page]) {
                    loaded[page] = 1;
                    model.tab.page.push(a);
                }
                model.tab.content = "页面："+page;
                model.tab.currpage = page;
            });

            avalon.router.get("/tab3", function(a) {
                var page = 'tab3';
                var a = {name:page, title:'选项卡三', url:'#!/tab3'};
                if(!loaded[page]) {
                    loaded[page] = 1;
                    model.tab.page.push(a);
                }
                model.tab.content = "页面："+page;
                model.tab.currpage = page;
            });
            avalon.router.error(function(a) {
                avalon.router.navigate("/tab1");
                 // 'avalon.router.navigate(path)',强制触发对应路径的回调
            })
            //avalon.router.error 如果没有一条路由规则满足此请求,那么就转交此回调处理

            avalon.history.start({html5Mode: false});
            // avalon.history.start 开始监听历史变化
            avalon.scan();
        });