/**
 * Created by vengean on 15/10/19.
 * @require.async "../welcome/welcome.js"
 * @require.async "../home/home.js"
 * @require.async "../center/center.js"
 */
define(["avalon", "domReady!","../../components/nav/avalon.nav"], function (avalon, domReady) {
     avalon.define({
          $id: "test",
          name:"yrl",
          $opts: {
              name: "这是控件的内容"
          }
      })
     avalon.scan();
});