webpackJsonp([1],{120:function(t,e,r){function i(t){r(159)}var n=r(53)(r(139),r(172),i,"data-v-49cf1a11",null);t.exports=n.exports},125:function(t,e,r){e=t.exports=r(114)(!0),e.push([t.i,".is-wrap[data-v-62569360]{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.is-nowrap[data-v-62569360]{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.bar--container[data-v-62569360]{position:relative;height:100%;width:100%;overflow:hidden}.bar--wrapper[data-v-62569360]{position:absolute;height:calc(100% + 24px);width:calc(100% + 24px);top:0;overflow-y:scroll;overflow-x:scroll}.bar--wrapper>[data-v-62569360]{position:relative;padding-right:24px!important;padding-bottom:24px!important}.bar--horizontal[data-v-62569360],.bar--vertical[data-v-62569360]{position:absolute;background-color:rgba(0,0,0,.1);z-index:9;border-radius:16px;overflow:hidden}.bar--horizontal-internal[data-v-62569360],.bar--vertical-internal[data-v-62569360]{position:relative;background-color:rgba(0,0,0,.5);opacity:.5;border-radius:16px;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-property:opacity;transition-property:opacity;cursor:pointer}.bar--horizontal-internal[data-v-62569360]:hover,.bar--vertical-internal[data-v-62569360]:hover{opacity:1}.bar--vertical[data-v-62569360]{right:0;top:0;height:calc(100% - 8px);width:8px;margin-right:4px;margin-top:4px;margin-bottom:4px}.bar--vertical-internal[data-v-62569360]{height:0;width:100%}.bar--horizontal[data-v-62569360]{left:0;bottom:0;width:calc(100% - 8px);height:8px;margin-right:4px;margin-left:4px;margin-bottom:4px}.bar--horizontal-internal[data-v-62569360]{height:100%;width:0}","",{version:3,sources:["C:/Users/Thomas Cho/Desktop/stushare/node_modules/v-bar/src/components/v-bar.vue"],names:[],mappings:"AACA,0BACE,6BAA+B,AAC3B,wBAA2B,CAChC,AACD,4BACE,+BAAiC,AAC7B,0BAA6B,CAClC,AACD,iCACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,eAAiB,CAClB,AACD,+BACE,kBAAmB,AACnB,yBAA0B,AAC1B,wBAAyB,AACzB,MAAO,AACP,kBAAmB,AACnB,iBAAmB,CACpB,AACD,gCACI,kBAAmB,AACnB,6BAA+B,AAC/B,6BAAgC,CACnC,AACD,kEACE,kBAAmB,AACnB,gCAAqC,AACrC,UAAW,AACX,mBAAoB,AACpB,eAAiB,CAClB,AACD,oFACI,kBAAmB,AACnB,gCAAqC,AACrC,WAAa,AACb,mBAAoB,AACpB,+CAAgD,AACxC,uCAAwC,AAChD,gCAAiC,AACzB,wBAAyB,AACjC,oCAAqC,AACrC,4BAA6B,AAC7B,cAAgB,CACnB,AACD,gGACM,SAAW,CAChB,AACD,gCACE,QAAS,AACT,MAAO,AACP,wBAAyB,AACzB,UAAW,AACX,iBAAkB,AAClB,eAAgB,AAChB,iBAAmB,CACpB,AACD,yCACI,SAAY,AACZ,UAAY,CACf,AACD,kCACE,OAAQ,AACR,SAAU,AACV,uBAAwB,AACxB,WAAY,AACZ,iBAAkB,AAClB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,2CACI,YAAa,AACb,OAAW,CACd",file:"v-bar.vue",sourcesContent:["\n.is-wrap[data-v-62569360] {\n  -ms-flex-wrap: wrap !important;\n      flex-wrap: wrap !important;\n}\n.is-nowrap[data-v-62569360] {\n  -ms-flex-wrap: nowrap !important;\n      flex-wrap: nowrap !important;\n}\n.bar--container[data-v-62569360] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n.bar--wrapper[data-v-62569360] {\n  position: absolute;\n  height: calc(100% + 24px);\n  width: calc(100% + 24px);\n  top: 0;\n  overflow-y: scroll;\n  overflow-x: scroll;\n}\n.bar--wrapper > *[data-v-62569360] {\n    position: relative;\n    padding-right: 24px !important;\n    padding-bottom: 24px !important;\n}\n.bar--vertical[data-v-62569360], .bar--horizontal[data-v-62569360] {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.1);\n  z-index: 9;\n  border-radius: 16px;\n  overflow: hidden;\n}\n.bar--vertical-internal[data-v-62569360], .bar--horizontal-internal[data-v-62569360] {\n    position: relative;\n    background-color: rgba(0, 0, 0, 0.5);\n    opacity: 0.5;\n    border-radius: 16px;\n    -webkit-transition-timing-function: ease-in-out;\n            transition-timing-function: ease-in-out;\n    -webkit-transition-duration: .2s;\n            transition-duration: .2s;\n    -webkit-transition-property: opacity;\n    transition-property: opacity;\n    cursor: pointer;\n}\n.bar--vertical-internal[data-v-62569360]:hover, .bar--horizontal-internal[data-v-62569360]:hover {\n      opacity: 1;\n}\n.bar--vertical[data-v-62569360] {\n  right: 0;\n  top: 0;\n  height: calc(100% - 8px);\n  width: 8px;\n  margin-right: 4px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n.bar--vertical-internal[data-v-62569360] {\n    height: 0px;\n    width: 100%;\n}\n.bar--horizontal[data-v-62569360] {\n  left: 0;\n  bottom: 0;\n  width: calc(100% - 8px);\n  height: 8px;\n  margin-right: 4px;\n  margin-left: 4px;\n  margin-bottom: 4px;\n}\n.bar--horizontal-internal[data-v-62569360] {\n    height: 100%;\n    width: 0px;\n}\n"],sourceRoot:""}])},126:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},i=function(){return"object"===("undefined"==typeof window?"undefined":r(window))},n=i()?window:t,a=!!i()&&document.attachEvent,o=!1,s=null,l=null,c=null,A=null,h=function(t){var e=t.__resizeTriggers__,r=e.firstElementChild,i=e.lastElementChild,n=r.firstElementChild;i.scrollLeft=i.scrollWidth,i.scrollTop=i.scrollHeight,n.style.width=r.offsetWidth+1+"px",n.style.height=r.offsetHeight+1+"px",r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight},d=function(){var t=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||function(t){return setTimeout(t,20)};return function(e){return t(e)}}(),p=function(){var t=n.cancelAnimationFrame||n.mozCancelAnimationFrame||n.webkitCancelAnimationFrame||n.clearTimeout;return function(e){return t(e)}}(),f=function(t){return t.offsetWidth!=t.__resizeLast__.width||t.offsetHeight!=t.__resizeLast__.height},u=function(t){var e=this;h(this),this.__resizeRAF__&&p(this.__resizeRAF__),this.__resizeRAF__=d(function(){f(e)&&(e.__resizeLast__.width=e.offsetWidth,e.__resizeLast__.height=e.offsetHeight,e.__resizeListeners__.forEach(function(r){r.call(e,t)}))})};if(i()&&!a){var g=!1,v="";A="animationstart";var m="Webkit Moz O ms".split(" "),b="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),C="",B=document.createElement("fakeelement");if(void 0!==B.style.animationName&&(g=!0),!1===g)for(var w=0;w<m.length;w++)if(void 0!==B.style[m[w]+"AnimationName"]){C=m[w],C+"Animation",v="-"+C.toLowerCase()+"-",A=b[w],g=!0;break}s="resizeanim",l="@"+v+"keyframes "+s+" { from { opacity: 0; } to { opacity: 0; } } ",c=v+"animation: 1ms "+s+"; "}var z=function(){if(!o){var t=(l||"")+".resize-triggers { "+(c||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',e=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t)),e.appendChild(r),o=!0}},x=function(t,e){a?t.attachEvent("onresize",e):i()&&(t.__resizeTriggers__||("static"==getComputedStyle(t).position&&(t.style.position="relative"),z(),t.__resizeLast__={},t.__resizeListeners__=[],(t.__resizeTriggers__=document.createElement("div")).className="resize-triggers",t.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',t.appendChild(t.__resizeTriggers__),h(t),t.addEventListener("scroll",u,!0),A&&t.__resizeTriggers__.addEventListener(A,function(e){e.animationName==s&&h(t)})),t.__resizeListeners__.push(e))},_=function(t,e){a?t.detachEvent("onresize",e):i()&&(t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e),1),t.__resizeListeners__.length||(t.removeEventListener("scroll",u,!0),t.__resizeTriggers__=!t.removeChild(t.__resizeTriggers__)))};e.addResizeListener=x,e.removeResizeListener=_}).call(e,r(18))},127:function(t,e,r){var i=r(125);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r(115)("57ff1b92",i,!0)},128:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(126);r.n(i);e.default={data:function(){return{dragging:{enable:!1,axis:"",offset:""},bars:{horizontal:{elm:"",parent:"",size:0},vertical:{elm:"",parent:"",size:0}},wrapperObj:{elm:"",scrollHeight:"",scrollWidth:"",scrollLeft:"",scrollTop:""},container:{elm:"",scrollHeight:"",scrollWidth:""}}},mounted:function(){r.i(i.addResizeListener)(this.$refs.container,this.resize),r.i(i.addResizeListener)(this.$refs.wrapperRef.children[0],this.resize),document.addEventListener("mousemove",this.onDrag),document.addEventListener("touchmove",this.onDrag),document.addEventListener("mouseup",this.stopDrag),document.addEventListener("touchend",this.stopDrag),this.getSizes()},beforeDestroy:function(){r.i(i.removeResizeListener)(this.$refs.container,this.resize),r.i(i.removeResizeListener)(this.$refs.wrapperRef.children[0],this.resize),document.removeEventListener("mousemove",this.onDrag),document.removeEventListener("touchmove",this.onDrag),document.removeEventListener("mouseup",this.stopDrag),document.removeEventListener("touchend",this.stopDrag)},computed:{propWrapperSize:function(){return this.wrapper?this.wrapper:""},propBarVertical:function(){return this.vBar?this.vBar:""},propBarInternalVertical:function(){return this.vBarInternal?this.vBarInternal:""},propBarHorizontal:function(){return this.hBar?this.hBar:""},propBarInternalHorizontal:function(){return this.hBarInternal?this.hBarInternal:""},barSizeVertical:function(){if(this.bars.horizontal.size&&this.bars.vertical.size)return{height:"calc(100% - 16px)"}},barSizeHorizontal:function(){if(this.bars.horizontal.size&&this.bars.vertical.size)return{width:"calc(100% - 16px)"}},barInternalVertical:function(){var t=this.getBarInternal("Y");return{height:this.bars.vertical.size+"px",top:t+"px"}},barInternalHorizontal:function(){var t=this.getBarInternal("X");return{width:this.bars.horizontal.size+"px",left:t+"px"}},validationScrolls:function(){return this.bars.horizontal.size?this.bars.vertical.size?void 0:"overflowY: hidden":"overflowX: hidden"}},methods:{scroll:function(t){this.getSizes(0,0)},resize:function(){this.getSizes()},getBarInternal:function(t){var e=void 0,r=void 0,i=void 0,n=void 0,a=void 0;return a=this.bars.horizontal.size&&this.bars.vertical.size?40:32,"X"===t?(e=this.wrapperObj.scrollLeft,r=this.wrapperObj.scrollWidth,i=this.bars.horizontal.size+a,n=this.container.scrollWidth):"Y"===t&&(e=this.wrapperObj.scrollTop,r=this.wrapperObj.scrollHeight,i=this.bars.vertical.size+a,n=this.container.scrollHeight),e/(r-n)*(n-i)},getCoordinates:function(t,e){var r=void 0,i=void 0,n=void 0,a=void 0,o=void 0;return"X"===e?(r=this.wrapperObj.scrollWidth,i=this.bars.horizontal.size,n=this.container.scrollWidth,a=this.container.elm.offsetLeft,o=t.clientX-this.dragging.offset):"Y"===e&&(r=this.wrapperObj.scrollHeight,i=this.bars.vertical.size,n=this.container.scrollHeight,a=this.container.elm.offsetTop-1.4*this.bars.vertical.size,o=t.clientY-this.dragging.offset),(r-n)*(o-a)/(n-i)},startDrag:function(t){t.preventDefault(),t.stopPropagation(),t=t.changedTouches?t.changedTouches[0]:t;var e=t.target.getAttribute("data-axis"),r=t.target.getAttribute("data-drag-source"),i=void 0,n=void 0;"Y"===e?"bar"===r?n=t.explicitOriginalTarget.offsetTop+1.4*this.bars.vertical.size:"internal"===r&&(n=t.clientY-this.bars.vertical.elm.offsetTop):"Y"===e&&("bar"===r?n=t.explicitOriginalTarget.offsetTop+1.4*this.bars.horizontal.size:"internal"===r&&(n=t.clientX-this.bars.horizontal.elm.offsetTop)),i=n,this.dragging={enable:!0,axis:e,offset:i}},onDrag:function(t){if(this.dragging.enable){t.preventDefault(),t.stopPropagation(),t=t.changedTouches?t.changedTouches[0]:t;var e=this.$refs.wrapperRef;"X"===this.dragging.axis?e.scrollLeft=this.getCoordinates(t,"X"):"Y"===this.dragging.axis&&(e.scrollTop=this.getCoordinates(t,"Y")),this.getSizes()}},stopDrag:function(t){this.dragging.enable&&(this.dragging={enable:!1,axis:""})},getSizes:function(t,e){var r=this.$refs.wrapperRef,i=this.$refs.container,n=this.$refs.verticalBar,a=this.$refs.verticalInternalBar,o=this.$refs.horizontalBar,s=this.$refs.horizontalInternalBar;this.wrapperObj={elm:r,scrollHeight:r.scrollHeight,scrollWidth:r.scrollWidth,scrollLeft:r.scrollLeft,scrollTop:r.scrollTop},this.container={elm:i,scrollHeight:i.scrollHeight,scrollWidth:i.scrollWidth},this.bars.horizontal.elm=s,this.bars.horizontal.parent=o,this.bars.horizontal.size=this.wrapperObj.scrollWidth-this.container.scrollWidth>24&&this.wrapperObj.scrollWidth-this.container.scrollWidth!=0?this.container.scrollWidth/this.wrapperObj.scrollWidth*this.container.scrollWidth:0,this.bars.vertical.elm=a,this.bars.vertical.parent=n,this.bars.vertical.size=this.wrapperObj.scrollHeight-this.container.scrollHeight>24&&this.wrapperObj.scrollHeight-this.container.scrollHeight!=0?this.container.scrollHeight/this.wrapperObj.scrollHeight*this.container.scrollHeight:0}},props:["wrapper","vBar","vBarInternal","hBar","hBarInternal"]}},129:function(t,e,r){function i(t){r(127)}var n=r(53)(r(128),r(130),i,"data-v-62569360",null);t.exports=n.exports},130:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.propWrapperSize,attrs:{id:"vbar"}},[r("div",{ref:"container",staticClass:"bar--container",on:{wheel:t.scroll,touchmove:t.scroll}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.bars.vertical.size,expression:"bars.vertical.size"}],ref:"verticalBar",staticClass:"bar--vertical",class:t.propBarVertical,style:t.barSizeVertical,attrs:{"data-axis":"Y","data-drag-source":"bar"},on:{touchstart:t.startDrag,mousedown:t.startDrag}},[r("div",{ref:"verticalInternalBar",staticClass:"bar--vertical-internal",class:t.propBarInternalVertical,style:t.barInternalVertical,attrs:{"data-axis":"Y","data-drag-source":"internal"},on:{touchstart:t.startDrag,mousedown:t.startDrag}})]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.bars.horizontal.size,expression:"bars.horizontal.size"}],staticClass:"bar--horizontal",class:t.propBarHorizontal,style:t.barSizeHorizontal,attrs:{"data-axis":"X","data-drag-source":"bar"},on:{touchstart:t.startDrag,mousedown:t.startDrag}},[r("div",{ref:"horizontalBar",staticClass:"bar--horizontal-internal",class:t.propBarInternalHorizontal,style:t.barInternalHorizontal,attrs:{"data-axis":"X","data-drag-source":"internal"},on:{touchstart:t.startDrag,mousedown:t.startDrag}})]),r("div",{ref:"wrapperRef",staticClass:"bar--wrapper",style:t.validationScrolls},[t._t("default")],2)])])},staticRenderFns:[]}},133:function(t,e,r){t.exports=r.p+"static/img/upload.fe75fba.png"},139:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(129),n=r.n(i);e.default={components:{VBar:n.a},data:function(){return{}},method:{},mounted:function(){this.$nextTick(function(){})},created:function(){},destroyed:function(){}}},149:function(t,e,r){e=t.exports=r(114)(!0),e.push([t.i,".content[data-v-49cf1a11]{height:100%;width:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.content-option[data-v-49cf1a11],.content[data-v-49cf1a11]{display:-webkit-box;display:-ms-flexbox;display:flex;display:-webkit-flex}.content-option[data-v-49cf1a11]{width:30%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.content-option img[data-v-49cf1a11]{display:block;margin:10% auto;height:60%;width:100%}.content-option img[data-v-49cf1a11]:hover{-webkit-transform:scale(1.2);transform:scale(1.2);cursor:pointer}.content-option button[data-v-49cf1a11]{-webkit-transform:scale(1.3);transform:scale(1.3);border:none;margin:0 auto;font-size:1rem;background-color:#6d7380}.content-option button[data-v-49cf1a11]:hover{background-color:#2b85e4}","",{version:3,sources:["C:/Users/Thomas Cho/Desktop/stushare/src/components/main.vue"],names:[],mappings:"AACA,0BAKE,YAAa,AACb,WAAY,AACZ,wBAAyB,AACrB,qBAAsB,AAClB,sBAAwB,CACjC,AACD,2DAVE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,oBAAsB,CAoBvB,AAbD,iCACE,UAAW,AAKX,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC7B,AACD,qCACE,cAAe,AACf,gBAAiB,AACjB,WAAY,AACZ,UAAY,CACb,AACD,2CACE,6BAAmC,AAC3B,qBAA2B,AACnC,cAAgB,CACjB,AACD,wCACE,6BAAmC,AAC3B,qBAA2B,AACnC,YAAa,AACb,cAAe,AACf,eAAgB,AAChB,wBAA0B,CAC3B,AACD,8CACE,wBAA0B,CAC3B",file:"main.vue",sourcesContent:["\n.content[data-v-49cf1a11] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -webkit-flex;\n  height: 100%;\n  width: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.content-option[data-v-49cf1a11] {\n  width: 30%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -webkit-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.content-option img[data-v-49cf1a11] {\n  display: block;\n  margin: 10% auto;\n  height: 60%;\n  width: 100%;\n}\n.content-option img[data-v-49cf1a11]:hover {\n  -webkit-transform: scale(1.2, 1.2);\n          transform: scale(1.2, 1.2);\n  cursor: pointer;\n}\n.content-option button[data-v-49cf1a11] {\n  -webkit-transform: scale(1.3, 1.3);\n          transform: scale(1.3, 1.3);\n  border: none;\n  margin: 0 auto;\n  font-size: 1rem;\n  background-color: #6d7380;\n}\n.content-option button[data-v-49cf1a11]:hover {\n  background-color: #2b85e4;\n}\n"],sourceRoot:""}])},159:function(t,e,r){var i=r(149);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r(115)("ef505c88",i,!0)},165:function(t,e,r){t.exports=r.p+"static/img/download.6b20fe2.png"},172:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("div",{staticClass:"content-option"},[i("router-link",{attrs:{to:"upload"}},[i("img",{attrs:{src:r(133)}})]),t._v(" "),i("router-link",{attrs:{to:"upload"}},[i("Button",{attrs:{type:"primary",shape:"circle"}},[t._v("我要上传")])],1)],1),t._v(" "),i("div",{staticClass:"content-option"},[i("router-link",{attrs:{to:"download"}},[i("img",{attrs:{src:r(165)}})]),t._v(" "),i("router-link",{attrs:{to:"download"}},[i("Button",{attrs:{type:"primary",shape:"circle"}},[t._v("我要下载")])],1)],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=1.9530ea431538cea2e503.js.map