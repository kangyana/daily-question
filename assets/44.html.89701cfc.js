import{_ as p,r as o,o as c,c as i,b as n,d as e,e as s,a as t}from"./app.2a439a8a.js";const l={},r=n("h1",{id:"\u3010q044\u3011\u5783\u573E\u56DE\u6536",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u3010q044\u3011\u5783\u573E\u56DE\u6536","aria-hidden":"true"},"#"),s(" \u3010Q044\u3011\u5783\u573E\u56DE\u6536")],-1),d={class:"custom-container tip"},u=n("p",{class:"custom-container-title"},"Issue",-1),k=s("\u6B22\u8FCE\u5728 Gtihub Issue \u4E2D\u56DE\u7B54\u6B64\u95EE\u9898: "),h={href:"https://github.com/kangyana/daily-question/issues/44",target:"_blank",rel:"noopener noreferrer"},v=s("Issue 44"),m={class:"custom-container tip"},b=n("p",{class:"custom-container-title"},"Author",-1),f=s("\u56DE\u7B54\u8005: "),_={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"},g=s("kangyana"),y=n("h2",{id:"_1-\u5783\u573E\u56DE\u6536\u673A\u5236-garbage-collection",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u5783\u573E\u56DE\u6536\u673A\u5236-garbage-collection","aria-hidden":"true"},"#"),s(" 1. \u5783\u573E\u56DE\u6536\u673A\u5236 Garbage Collection")],-1),w=n("p",null,"\u521B\u5EFA\u4E00\u4E2A\u57FA\u672C\u7C7B\u578B\u3001\u5BF9\u8C61\u3001\u51FD\u6570\u2026\u2026\u90FD\u662F\u9700\u8981\u5360\u7528\u5185\u5B58\u7684\uFF0C\u4F46js\u4F1A\u81EA\u52A8\u5206\u914D\uFF0C\u4E0D\u9700\u8981\u663E\u5F0F\u624B\u52A8\u7684\u53BB\u5206\u914D\u5185\u5B58\u3002 js \u4E5F\u4F1A\u81EA\u52A8\u56DE\u6536\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u7684\u53BB\u56DE\u6536\u3002",-1),j=n("h2",{id:"_2-gc-\u7B56\u7565",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-gc-\u7B56\u7565","aria-hidden":"true"},"#"),s(" 2. GC \u7B56\u7565")],-1),x=n("p",null,[s("\u5728 JS \u5185\u5B58\u7BA1\u7406\u4E2D\u6709\u4E00\u4E2A\u6982\u5FF5\u53EB\u505A "),n("strong",null,"\u53EF\u8FBE\u6027"),s("\uFF0C\u5C31\u662F\u90A3\u4E9B\u4EE5\u67D0\u79CD\u65B9\u5F0F\u53EF\u8BBF\u95EE\u6216\u8005\u8BF4\u53EF\u7528\u7684\u503C\uFF0C\u5B83\u4EEC\u88AB\u4FDD\u8BC1\u5B58\u50A8\u5728\u5185\u5B58\u4E2D\uFF0C\u53CD\u4E4B\u4E0D\u53EF\u8BBF\u95EE\u5219\u9700\u56DE\u6536\u3002 \u81F3\u4E8E\u5982\u4F55\u56DE\u6536\uFF0C\u5176\u5B9E\u5C31\u662F\u600E\u6837\u53D1\u73B0\u8FD9\u4E9B\u4E0D\u53EF\u8FBE\u7684\u5783\u573E\u5B83\u5E76\u7ED9\u4E88\u6E05\u7406\u7684\u95EE\u9898\uFF0C JS \u5B9A\u671F\u627E\u51FA\u7528\u4E0D\u5230\u7684\u5185\u5B58\u5E76\u91CA\u653E\u3002")],-1),C=n("p",null,"\u56DE\u6536\u6D41\u7A0B\u5C31\u6D89\u53CA\u5230\u4E86\u4E00\u4E9B\u7B97\u6CD5\u7B56\u7565\uFF1A",-1),S={class:"custom-container tip"},G=n("p",{class:"custom-container-title"},"Author",-1),A=s("\u56DE\u7B54\u8005: "),q={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"},B=s("kangyana"),I=t(`<h2 id="_3-\u6807\u8BB0\u6E05\u9664\u7B97" tabindex="-1"><a class="header-anchor" href="#_3-\u6807\u8BB0\u6E05\u9664\u7B97" aria-hidden="true">#</a> 3. \u6807\u8BB0\u6E05\u9664\u7B97</h2><p>\u6807\u8BB0\u6E05\u9664\uFF08Mark-Sweep\uFF09\uFF0C\u5927\u591A\u6570\u6D4F\u89C8\u5668\u7684 JS \u90FD\u5728\u91C7\u7528\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\u3002 \u6B64\u7B97\u6CD5\u5206\u4E3A <strong>\u6807\u8BB0</strong> \u548C <strong>\u6E05\u9664</strong> \u4E24\u4E2A\u9636\u6BB5\uFF0C\u6807\u8BB0\u9636\u6BB5\u5373\u4E3A\u6240\u6709\u6D3B\u52A8\u5BF9\u8C61\u505A\u4E0A\u6807\u8BB0\uFF0C\u6E05\u9664\u9636\u6BB5\u5219\u628A\u6CA1\u6709\u6807\u8BB0\u9500\u6BC1\u3002 \u5F15\u64CE\u5728\u6267\u884C GC \u65F6\uFF0C\u9700\u8981\u4ECE\u51FA\u53D1\u70B9\u53BB\u904D\u5386\u5185\u5B58\u4E2D\u6240\u6709\u7684\u5BF9\u8C61\u53BB\u6253\u6807\u3002</p><h3 id="\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\u7684\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\u7684\u6D41\u7A0B" aria-hidden="true">#</a> \u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\u7684\u6D41\u7A0B\uFF1A</h3><ul><li>GC \u5728\u8FD0\u884C\u65F6\u4F1A\u7ED9\u5185\u5B58\u4E2D\u7684\u6240\u6709\u53D8\u91CF\u90FD\u52A0\u4E0A\u4E00\u4E2A\u6807\u8BB0\uFF0C\u5047\u8BBE\u5185\u5B58\u4E2D\u6240\u6709\u5BF9\u8C61\u90FD\u662F\u5783\u573E\uFF0C\u5168\u6807\u8BB0\u4E3A0</li><li>\u7136\u540E\u4ECE\u5404\u4E2A\u6839\u5BF9\u8C61\u5F00\u59CB\u904D\u5386\uFF0C\u628A\u4E0D\u662F\u5783\u573E\u7684\u8282\u70B9\u6539\u62101</li><li>\u6E05\u7406\u6240\u6709\u6807\u8BB0\u4E3A0\u7684\u5783\u573E\uFF0C\u9500\u6BC1\u5E76\u56DE\u6536\u5B83\u4EEC\u6240\u5360\u7528\u7684\u5185\u5B58\u7A7A\u95F4</li><li>\u6700\u540E\uFF0C\u628A\u6240\u6709\u5185\u5B58\u4E2D\u5BF9\u8C61\u6807\u8BB0\u4FEE\u6539\u4E3A0\uFF0C\u7B49\u5F85\u4E0B\u4E00\u8F6E\u5783\u573E\u56DE\u6536</li></ul><h3 id="\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a> \u4F18\u70B9\uFF1A</h3><p>\u7B80\u5355\uFF0C\u6253\u6807\u8BC6\u53EA\u7528\u4E8C\u8FDB\u5236\u4F4D\uFF080\u548C1\uFF09</p><h3 id="\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a> \u7F3A\u70B9\uFF1A</h3><p>\u6E05\u9664\u4E4B\u540E\uFF0C\u5269\u4F59\u7684\u5BF9\u8C61\u5185\u5B58\u4F4D\u7F6E\u662F\u4E0D\u53D8\u7684\uFF0C\u4F1A\u5BFC\u81F4\u7A7A\u95F2\u5185\u5B58\u7A7A\u95F4\u662F\u4E0D\u8FDE\u7EED\u7684\uFF0C\u51FA\u73B0\u4E86 <code>\u5185\u5B58\u788E\u7247</code> \uFF08\u5982\u4E0B\u56FE\uFF09</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/12247ac3d8f249a5ab85b9b40ba1147b~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="Alt"></p><p>\u8FD9\u5C31\u7275\u626F\u51FA\u4E86\u5185\u5B58\u5206\u914D\u7684\u95EE\u9898\uFF0C\u65B0\u5EFA\u5BF9\u8C61\u5206\u914D\u5185\u5B58\u65F6\u5019\uFF0C\u8981\u627E\u5230\u5C3A\u5BF8\u7B26\u5408\u7684\u7A7A\u5757\u624D\u80FD\u63D2\u5165\u3002</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fb5107f04a3249ce8d37ec7cc5fd9668~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="Alt"></p><h2 id="_4-\u5F15\u7528\u8BA1\u6570\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-\u5F15\u7528\u8BA1\u6570\u7B97\u6CD5" aria-hidden="true">#</a> 4. \u5F15\u7528\u8BA1\u6570\u7B97\u6CD5</h2><p>\u5F15\u7528\u8BA1\u6570\uFF08Reference Counting\uFF09\uFF0C\u8FD9\u5176\u5B9E\u662F\u65E9\u5148\u7684\u4E00\u79CD\u5783\u573E\u56DE\u6536\u7B97\u6CD5\uFF0C\u5B83\u628A \u5BF9\u8C61\u662F\u5426\u4E0D\u518D\u9700\u8981 \u7B80\u5316\u5B9A\u4E49\u4E3A \u5BF9\u8C61\u6709\u6CA1\u6709\u5176\u4ED6\u5BF9\u8C61\u5F15\u7528\u5230\u5B83\uFF0C\u5982\u679C\u6CA1\u6709\u5F15\u7528\u6307\u5411\u8BE5\u5BF9\u8C61\uFF08\u96F6\u5F15\u7528\uFF09\uFF0C\u5BF9\u8C61\u5C06\u88AB\u5783\u573E\u56DE\u6536\u673A\u5236\u56DE\u6536\uFF0C\u76EE\u524D\u5F88\u5C11\u4F7F\u7528\u8FD9\u79CD\u7B97\u6CD5\u4E86\uFF0C\u56E0\u4E3A\u5B83\u7684\u95EE\u9898\u5F88\u591A\uFF0C\u4E0D\u8FC7\u6211\u4EEC\u8FD8\u662F\u9700\u8981\u4E86\u89E3\u4E00\u4E0B\u3002</p><h3 id="\u5B83\u7684\u7B56\u7565\u662F\u8DDF\u8E2A\u8BB0\u5F55\u6BCF\u4E2A\u53D8\u91CF\u503C\u88AB\u4F7F\u7528\u7684\u6B21\u6570" tabindex="-1"><a class="header-anchor" href="#\u5B83\u7684\u7B56\u7565\u662F\u8DDF\u8E2A\u8BB0\u5F55\u6BCF\u4E2A\u53D8\u91CF\u503C\u88AB\u4F7F\u7528\u7684\u6B21\u6570" aria-hidden="true">#</a> \u5B83\u7684\u7B56\u7565\u662F\u8DDF\u8E2A\u8BB0\u5F55\u6BCF\u4E2A\u53D8\u91CF\u503C\u88AB\u4F7F\u7528\u7684\u6B21\u6570\uFF1A</h3><ul><li>\u5F53\u58F0\u660E\u4E86\u4E00\u4E2A\u53D8\u91CF\u5E76\u4E14\u5C06\u4E00\u4E2A\u5F15\u7528\u7C7B\u578B\u8D4B\u503C\u7ED9\u8BE5\u53D8\u91CF\u7684\u65F6\u5019\u8FD9\u4E2A\u503C\u7684\u5F15\u7528\u6B21\u6570\u5C31\u4E3A 1</li><li>\u5982\u679C\u540C\u4E00\u4E2A\u503C\u53C8\u88AB\u8D4B\u7ED9\u53E6\u4E00\u4E2A\u53D8\u91CF\uFF0C\u90A3\u4E48\u5F15\u7528\u6570\u52A0 1</li><li>\u5982\u679C\u8BE5\u53D8\u91CF\u7684\u503C\u88AB\u5176\u4ED6\u7684\u503C\u8986\u76D6\u4E86\uFF0C\u5219\u5F15\u7528\u6B21\u6570\u51CF 1</li><li>\u5F53\u8FD9\u4E2A\u503C\u7684\u5F15\u7528\u6B21\u6570\u53D8\u4E3A 0 \u7684\u65F6\u5019\uFF0C\u8BF4\u660E\u6CA1\u6709\u53D8\u91CF\u5728\u4F7F\u7528\uFF0C\u8FD9\u4E2A\u503C\u6CA1\u6CD5\u88AB\u8BBF\u95EE\u4E86\uFF0C\u56DE\u6536\u7A7A\u95F4\uFF0C\u5783\u573E\u56DE\u6536\u5668\u4F1A\u5728\u8FD0\u884C\u7684\u65F6\u5019\u6E05\u7406\u6389\u5F15\u7528\u6B21\u6570\u4E3A 0 \u7684\u503C\u5360\u7528\u7684\u5185\u5B58</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 	<span class="token comment">// \u6B64\u5BF9\u8C61\u7684\u5F15\u7528\u8BA1\u6570\u4E3A 1\uFF08a\u5F15\u7528\uFF09</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> a 		<span class="token comment">// \u6B64\u5BF9\u8C61\u7684\u5F15\u7528\u8BA1\u6570\u662F 2\uFF08a,b\u5F15\u7528\uFF09</span>
a <span class="token operator">=</span> <span class="token keyword">null</span>  		<span class="token comment">// \u6B64\u5BF9\u8C61\u7684\u5F15\u7528\u8BA1\u6570\u4E3A 1\uFF08b\u5F15\u7528\uFF09</span>
b <span class="token operator">=</span> <span class="token keyword">null</span> 	 	<span class="token comment">// \u6B64\u5BF9\u8C61\u7684\u5F15\u7528\u8BA1\u6570\u4E3A 0\uFF08\u65E0\u5F15\u7528\uFF09</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u4E24\u4E2A\u5BF9\u8C61\u4E92\u76F8\u5F15\u7528\u65F6\uFF0C\u5047\u5982\u88AB\u591A\u6B21\u8C03\u7528\uFF0C\u90A3\u4E48\u5C31\u4F1A\u9020\u6210\u5927\u91CF\u7684\u5185\u5B58\u4E0D\u4F1A\u88AB\u91CA\u653E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token constant">A</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> <span class="token constant">B</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  
  <span class="token constant">A</span><span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token constant">B</span>
  <span class="token constant">B</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token constant">A</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F18\u70B9-1" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9-1" aria-hidden="true">#</a> \u4F18\u70B9\uFF1A</h3><p>\u7ED3\u6784\u6E05\u6670\uFF0C\u5F15\u7528\u503C\u4E3A 0 \u65F6\uFF0C\u4E5F\u5C31\u662F\u5728\u53D8\u6210\u5783\u573E\u7684\u90A3\u4E00\u523B\u5C31\u4F1A\u88AB\u56DE\u6536\uFF0C\u6240\u4EE5\u5B83\u53EF\u4EE5\u7ACB\u5373\u56DE\u6536\u5783\u573E\u3002 \u800C\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\u9700\u8981\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u8FDB\u884C\u4E00\u6B21\uFF0C\u90A3\u5728\u5E94\u7528\u7A0B\u5E8F\uFF08JS\u811A\u672C\uFF09\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u7EBF\u7A0B\u5C31\u5FC5\u987B\u8981\u6682\u505C\u53BB\u6267\u884C\u4E00\u6BB5\u65F6\u95F4\u7684 GC\uFF0C\u53E6\u5916\uFF0C\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\u9700\u8981\u904D\u5386\u5806\u91CC\u7684\u6D3B\u52A8\u4EE5\u53CA\u975E\u6D3B\u52A8\u5BF9\u8C61\u6765\u6E05\u9664\uFF0C\u800C\u5F15\u7528\u8BA1\u6570\u5219\u53EA\u9700\u8981\u5728\u5F15\u7528\u65F6\u8BA1\u6570\u5C31\u53EF\u4EE5\u4E86\u3002</p><h3 id="\u7F3A\u70B9-1" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9-1" aria-hidden="true">#</a> \u7F3A\u70B9\uFF1A</h3><p>\u9996\u5148\u5B83\u9700\u8981\u4E00\u4E2A\u8BA1\u6570\u5668\uFF0C\u800C\u6B64\u8BA1\u6570\u5668\u9700\u8981\u5360\u5F88\u5927\u7684\u4F4D\u7F6E\uFF0C\u56E0\u4E3A\u6211\u4EEC\u4E5F\u4E0D\u77E5\u9053\u88AB\u5F15\u7528\u6570\u91CF\u7684\u4E0A\u9650\u3002 \u8FD8\u6709\u5C31\u662F\u65E0\u6CD5\u89E3\u51B3\u5FAA\u73AF\u5F15\u7528\u65E0\u6CD5\u56DE\u6536\u7684\u95EE\u9898\uFF0C\u8FD9\u4E5F\u662F\u6700\u4E25\u91CD\u7684\u3002</p><h2 id="_5-v8\u5BF9gc\u7684\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#_5-v8\u5BF9gc\u7684\u4F18\u5316" aria-hidden="true">#</a> 5. V8\u5BF9GC\u7684\u4F18\u5316</h2><h3 id="\u5206\u4EE3\u5F0F\u5783\u573E\u56DE\u6536" tabindex="-1"><a class="header-anchor" href="#\u5206\u4EE3\u5F0F\u5783\u573E\u56DE\u6536" aria-hidden="true">#</a> \u5206\u4EE3\u5F0F\u5783\u573E\u56DE\u6536\uFF1A</h3><p>\u5206\u4EE3\u5F0F\u673A\u5236\u628A\u4E00\u4E9B\u65B0\u3001\u5C0F\u3001\u5B58\u6D3B\u65F6\u95F4\u77ED\u7684\u5BF9\u8C61\u4F5C\u4E3A\u65B0\u751F\u4EE3\uFF0C\u91C7\u7528\u4E00\u5C0F\u5757\u5185\u5B58\u9891\u7387\u8F83\u9AD8\u7684\u5FEB\u901F\u6E05\u7406\uFF0C\u800C\u4E00\u4E9B\u5927\u3001\u8001\u3001\u5B58\u6D3B\u65F6\u95F4\u957F\u7684\u5BF9\u8C61\u4F5C\u4E3A\u8001\u751F\u4EE3\uFF0C\u4F7F\u5176\u5F88\u5C11\u63A5\u53D7\u68C0\u67E5\uFF0C\u65B0\u8001\u751F\u4EE3\u7684\u56DE\u6536\u673A\u5236\u53CA\u9891\u7387\u662F\u4E0D\u540C\u7684\uFF0C\u53EF\u4EE5\u8BF4\u6B64\u673A\u5236\u7684\u51FA\u73B0\u5F88\u5927\u7A0B\u5EA6\u63D0\u9AD8\u4E86\u5783\u573E\u56DE\u6536\u673A\u5236\u7684\u6548\u7387\u3002</p><p><strong>\u65B0\u751F\u4EE3</strong> \u7684\u5BF9\u8C61\u4E3A\u5B58\u6D3B\u65F6\u95F4\u8F83\u77ED\u7684\u5BF9\u8C61\uFF0C\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u65B0\u4EA7\u751F\u7684\u5BF9\u8C61\uFF0C\u901A\u5E38\u53EA\u652F\u6301 1\uFF5E8M \u7684\u5BB9\u91CF\u3002 <strong>\u8001\u751F\u4EE3</strong> \u7684\u5BF9\u8C61\u4E3A\u5B58\u6D3B\u4E8B\u4EF6\u8F83\u957F\u6216\u5E38\u9A7B\u5185\u5B58\u7684\u5BF9\u8C61\uFF0C\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u7ECF\u5386\u8FC7\u65B0\u751F\u4EE3\u5783\u573E\u56DE\u6536\u540E\u8FD8\u5B58\u6D3B\u4E0B\u6765\u7684\u5BF9\u8C61\uFF0C\u5BB9\u91CF\u901A\u5E38\u6BD4\u8F83\u5927\u3002 V8 \u6574\u4E2A\u5806\u5185\u5B58\u7684\u5927\u5C0F\u5C31\u7B49\u4E8E\u65B0\u751F\u4EE3\u52A0\u4E0A\u8001\u751F\u4EE3\u7684\u5185\u5B58\uFF08\u5982\u4E0B\u56FE\uFF09</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/abae5b06648a40d2aaa453b5d8a83939~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="Alt"></p><h3 id="\u65B0\u751F\u4EE3\u5783\u573E\u56DE\u6536" tabindex="-1"><a class="header-anchor" href="#\u65B0\u751F\u4EE3\u5783\u573E\u56DE\u6536" aria-hidden="true">#</a> \u65B0\u751F\u4EE3\u5783\u573E\u56DE\u6536</h3><p>\u65B0\u751F\u4EE3\u5BF9\u8C61\u662F\u901A\u8FC7\u4E00\u4E2A\u540D\u4E3A Scavenge \u7684\u7B97\u6CD5\u8FDB\u884C\u5783\u573E\u56DE\u6536\uFF0C\u5728 Scavenge\u7B97\u6CD5 \u7684\u5177\u4F53\u5B9E\u73B0\u4E2D\uFF0C\u4E3B\u8981\u91C7\u7528\u4E86\u4E00\u79CD\u590D\u5236\u5F0F\u7684\u65B9\u6CD5\u5373 Cheney\u7B97\u6CD5\u3002</p><p>Cheney\u7B97\u6CD5 \u4E2D\u5C06\u5806\u5185\u5B58\u4E00\u5206\u4E3A\u4E8C\uFF0C\u4E00\u4E2A\u662F\u5904\u4E8E\u4F7F\u7528\u72B6\u6001\u7684\u7A7A\u95F4\u6211\u4EEC\u6682\u4E14\u79F0\u4E4B\u4E3A \u4F7F\u7528\u533A\uFF0C\u4E00\u4E2A\u662F\u5904\u4E8E\u95F2\u7F6E\u72B6\u6001\u7684\u7A7A\u95F4\u6211\u4EEC\u79F0\u4E4B\u4E3A \u7A7A\u95F2\u533A\uFF0C\u5982\u4E0B\u56FE\u6240\u793A</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa2d5ad1d89b4b7b919f20e4a5f8973a~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="Alt"></p><p>\u65B0\u52A0\u5165\u7684\u5BF9\u8C61\u90FD\u4F1A\u5B58\u653E\u5230\u4F7F\u7528\u533A\uFF0C\u5F53\u4F7F\u7528\u533A\u5FEB\u88AB\u5199\u6EE1\u65F6\uFF0C\u5C31\u9700\u8981\u6267\u884C\u4E00\u6B21\u5783\u573E\u6E05\u7406\u64CD\u4F5C\u3002</p><p>\u5F53\u5F00\u59CB\u8FDB\u884C\u5783\u573E\u56DE\u6536\u65F6\uFF0C\u65B0\u751F\u4EE3\u5783\u573E\u56DE\u6536\u5668\u4F1A\u5BF9\u4F7F\u7528\u533A\u4E2D\u7684\u6D3B\u52A8\u5BF9\u8C61\u505A\u6807\u8BB0\uFF0C\u6807\u8BB0\u5B8C\u6210\u4E4B\u540E\u5C06\u4F7F\u7528\u533A\u7684\u6D3B\u52A8\u5BF9\u8C61\u590D\u5236\u8FDB\u7A7A\u95F2\u533A\u5E76\u8FDB\u884C\u6392\u5E8F\uFF0C\u968F\u540E\u8FDB\u5165\u5783\u573E\u6E05\u7406\u9636\u6BB5\uFF0C\u5373\u5C06\u975E\u6D3B\u52A8\u5BF9\u8C61\u5360\u7528\u7684\u7A7A\u95F4\u6E05\u7406\u6389\u3002\u6700\u540E\u8FDB\u884C\u89D2\u8272\u4E92\u6362\uFF0C\u628A\u539F\u6765\u7684\u4F7F\u7528\u533A\u53D8\u6210\u7A7A\u95F2\u533A\uFF0C\u628A\u539F\u6765\u7684\u7A7A\u95F2\u533A\u53D8\u6210\u4F7F\u7528\u533A\u3002</p><p>\u5F53\u4E00\u4E2A\u5BF9\u8C61\u7ECF\u8FC7\u591A\u6B21\u590D\u5236\u540E\u4F9D\u7136\u5B58\u6D3B\uFF0C\u5B83\u5C06\u4F1A\u88AB\u8BA4\u4E3A\u662F\u751F\u547D\u5468\u671F\u8F83\u957F\u7684\u5BF9\u8C61\uFF0C\u968F\u540E\u4F1A\u88AB\u79FB\u52A8\u5230\u8001\u751F\u4EE3\u4E2D\uFF0C\u91C7\u7528\u8001\u751F\u4EE3\u7684\u5783\u573E\u56DE\u6536\u7B56\u7565\u8FDB\u884C\u7BA1\u7406\u3002</p><p>\u53E6\u5916\u8FD8\u6709\u4E00\u79CD\u60C5\u51B5\uFF0C\u5982\u679C\u590D\u5236\u4E00\u4E2A\u5BF9\u8C61\u5230\u7A7A\u95F2\u533A\u65F6\uFF0C\u7A7A\u95F2\u533A\u7A7A\u95F4\u5360\u7528\u8D85\u8FC7\u4E86 25%\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5BF9\u8C61\u4F1A\u88AB\u76F4\u63A5\u664B\u5347\u5230\u8001\u751F\u4EE3\u7A7A\u95F4\u4E2D\uFF0C\u8BBE\u7F6E\u4E3A 25% \u7684\u6BD4\u4F8B\u7684\u539F\u56E0\u662F\uFF0C\u5F53\u5B8C\u6210 Scavenge \u56DE\u6536\u540E\uFF0C\u7A7A\u95F2\u533A\u5C06\u7FFB\u8F6C\u6210\u4F7F\u7528\u533A\uFF0C\u7EE7\u7EED\u8FDB\u884C\u5BF9\u8C61\u5185\u5B58\u7684\u5206\u914D\uFF0C\u82E5\u5360\u6BD4\u8FC7\u5927\uFF0C\u5C06\u4F1A\u5F71\u54CD\u540E\u7EED\u5185\u5B58\u5206\u914D\u3002</p><h3 id="\u8001\u751F\u4EE3\u5783\u573E\u56DE\u6536" tabindex="-1"><a class="header-anchor" href="#\u8001\u751F\u4EE3\u5783\u573E\u56DE\u6536" aria-hidden="true">#</a> \u8001\u751F\u4EE3\u5783\u573E\u56DE\u6536</h3><p>\u76F8\u6BD4\u4E8E\u65B0\u751F\u4EE3\uFF0C\u8001\u751F\u4EE3\u7684\u5783\u573E\u56DE\u6536\u5C31\u6BD4\u8F83\u5BB9\u6613\u7406\u89E3\u4E86\uFF0C\u4E0A\u9762\u6211\u4EEC\u8BF4\u8FC7\uFF0C\u5BF9\u4E8E\u5927\u591A\u6570\u5360\u7528\u7A7A\u95F4\u5927\u3001\u5B58\u6D3B\u65F6\u95F4\u957F\u7684\u5BF9\u8C61\u4F1A\u88AB\u5206\u914D\u5230\u8001\u751F\u4EE3\u91CC\uFF0C\u56E0\u4E3A\u8001\u751F\u4EE3\u4E2D\u7684\u5BF9\u8C61\u901A\u5E38\u6BD4\u8F83\u5927\uFF0C\u5982\u679C\u518D\u5982\u65B0\u751F\u4EE3\u4E00\u822C\u5206\u533A\u7136\u540E\u590D\u5236\u6765\u590D\u5236\u53BB\u5C31\u4F1A\u975E\u5E38\u8017\u65F6\uFF0C\u4ECE\u800C\u5BFC\u81F4\u56DE\u6536\u6267\u884C\u6548\u7387\u4E0D\u9AD8\uFF0C\u6240\u4EE5\u8001\u751F\u4EE3\u5783\u573E\u56DE\u6536\u5668\u6765\u7BA1\u7406\u5176\u5783\u573E\u56DE\u6536\u6267\u884C\uFF0C\u5B83\u7684\u6574\u4E2A\u6D41\u7A0B\u5C31\u91C7\u7528\u7684\u5C31\u662F\u4E0A\u6587\u6240\u8BF4\u7684\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\u4E86\u3002</p><p>\u9996\u5148\u662F\u6807\u8BB0\u9636\u6BB5\uFF0C\u4ECE\u4E00\u7EC4\u6839\u5143\u7D20\u5F00\u59CB\uFF0C\u9012\u5F52\u904D\u5386\u8FD9\u7EC4\u6839\u5143\u7D20\uFF0C\u904D\u5386\u8FC7\u7A0B\u4E2D\u80FD\u5230\u8FBE\u7684\u5143\u7D20\u79F0\u4E3A\u6D3B\u52A8\u5BF9\u8C61\uFF0C\u6CA1\u6709\u5230\u8FBE\u7684\u5143\u7D20\u5C31\u53EF\u4EE5\u5224\u65AD\u4E3A\u975E\u6D3B\u52A8\u5BF9\u8C61\u3002</p><p>\u6E05\u9664\u9636\u6BB5\u8001\u751F\u4EE3\u5783\u573E\u56DE\u6536\u5668\u4F1A\u76F4\u63A5\u5C06\u975E\u6D3B\u52A8\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u6570\u636E\u6E05\u7406\u6389\u3002</p><p>\u524D\u9762\u6211\u4EEC\u4E5F\u63D0\u8FC7\uFF0C\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\u5728\u6E05\u9664\u540E\u4F1A\u4EA7\u751F\u5927\u91CF\u4E0D\u8FDE\u7EED\u7684\u5185\u5B58\u788E\u7247\uFF0C\u8FC7\u591A\u7684\u788E\u7247\u4F1A\u5BFC\u81F4\u5927\u5BF9\u8C61\u65E0\u6CD5\u5206\u914D\u5230\u8DB3\u591F\u7684\u8FDE\u7EED\u5185\u5B58\uFF0C\u800C V8 \u4E2D\u5C31\u91C7\u7528\u4E86\u6211\u4EEC\u4E0A\u6587\u4E2D\u8BF4\u7684\u6807\u8BB0\u6574\u7406\u7B97\u6CD5\u6765\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\u6765\u4F18\u5316\u7A7A\u95F4\u3002</p>`,40),M={class:"custom-container tip"},V=n("p",{class:"custom-container-title"},"Author",-1),N=s("\u56DE\u7B54\u8005: "),O={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"},z=s("kangyana"),E=t(`<h2 id="_6-\u5185\u5B58\u6CC4\u9732" tabindex="-1"><a class="header-anchor" href="#_6-\u5185\u5B58\u6CC4\u9732" aria-hidden="true">#</a> 6. \u5185\u5B58\u6CC4\u9732</h2><p>\u867D\u7136js\u5F15\u64CE\u6709\u5185\u5B58\u56DE\u6536\uFF0Cv8\u4E5F\u505A\u51FA\u4E86\u4F18\u5316\u3002 \u6211\u4EEC\u7684\u4EE3\u7801\u4E2D\u4F9D\u7136\u8981\u4E3B\u52A8\u907F\u514D\u4E00\u4E9B\u4E0D\u5229\u4E8E\u5F15\u64CE\u505A\u5783\u573E\u56DE\u6536\u64CD\u4F5C\uFF0C\u56E0\u4E3A\u4E0D\u662F\u6240\u6709\u65E0\u7528\u5BF9\u8C61\u5185\u5B58\u90FD\u53EF\u4EE5\u88AB\u56DE\u6536\u7684\uFF0C\u90A3\u5F53\u4E0D\u518D\u7528\u5230\u7684\u5185\u5B58\uFF0C\u6CA1\u6709\u53CA\u65F6\u56DE\u6536\u65F6\uFF0C\u6211\u4EEC\u53EB\u5B83 <code>\u5185\u5B58\u6CC4\u6F0F</code>\uFF08Memory leak\uFF09\u3002</p><h3 id="\u4E0D\u6B63\u5F53\u7684\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u6B63\u5F53\u7684\u95ED\u5305" aria-hidden="true">#</a> \u4E0D\u6B63\u5F53\u7684\u95ED\u5305</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;isboyjc&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span>
    <span class="token keyword">return</span> test
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> fn2Child <span class="token operator">=</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">fn2Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u89E3\u51B3\u65B9\u6848\uFF1A</span>
fn2Child <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u989D\u5916\u7684\u5168\u5C40\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u989D\u5916\u7684\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> \u989D\u5916\u7684\u5168\u5C40\u53D8\u91CF</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// \u6CA1\u6709\u58F0\u660E\u4ECE\u800C\u5236\u9020\u4E86\u9690\u5F0F\u5168\u5C40\u53D8\u91CFtest1</span>
  test1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;isboyjc1&#39;</span><span class="token punctuation">)</span>
  
  <span class="token comment">// \u51FD\u6570\u5185\u90E8this\u6307\u5411window\uFF0C\u5236\u9020\u4E86\u9690\u5F0F\u5168\u5C40\u53D8\u91CFtest2</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>test2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;isboyjc2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6E38\u79BBdom\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u6E38\u79BBdom\u5F15\u7528" aria-hidden="true">#</a> \u6E38\u79BBDOM\u5F15\u7528</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> ul <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#ul&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> li3 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#li3&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u7531\u4E8Eul\u53D8\u91CF\u5B58\u5728\uFF0C\u6574\u4E2Aul\u53CA\u5176\u5B50\u5143\u7D20\u90FD\u4E0D\u80FDGC</span>
root<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>ul<span class="token punctuation">)</span>

<span class="token comment">// \u867D\u7F6E\u7A7A\u4E86ul\u53D8\u91CF\uFF0C\u4F46\u7531\u4E8Eli3\u53D8\u91CF\u5F15\u7528ul\u7684\u5B50\u8282\u70B9\uFF0C\u6240\u4EE5ul\u5143\u7D20\u4F9D\u7136\u4E0D\u80FD\u88ABGC</span>
ul <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token comment">// \u5DF2\u65E0\u53D8\u91CF\u5F15\u7528\uFF0C\u6B64\u65F6\u53EF\u4EE5GC</span>
li3 <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9057\u5FD8\u7684\u5B9A\u65F6\u5668" tabindex="-1"><a class="header-anchor" href="#\u9057\u5FD8\u7684\u5B9A\u65F6\u5668" aria-hidden="true">#</a> \u9057\u5FD8\u7684\u5B9A\u65F6\u5668</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u83B7\u53D6\u6570\u636E</span>
<span class="token keyword">let</span> someResource <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> node <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;Node&#39;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>someResource<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9057\u5FD8\u7684\u4E8B\u4EF6\u76D1\u542C\u5668" tabindex="-1"><a class="header-anchor" href="#\u9057\u5FD8\u7684\u4E8B\u4EF6\u76D1\u542C\u5668" aria-hidden="true">#</a> \u9057\u5FD8\u7684\u4E8B\u4EF6\u76D1\u542C\u5668</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;resize&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u9057\u5FD8\u7684map\u3001set\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u9057\u5FD8\u7684map\u3001set\u5BF9\u8C61" aria-hidden="true">#</a> \u9057\u5FD8\u7684Map\u3001Set\u5BF9\u8C61</h3><p>\u5F53\u4F7F\u7528 <code>Map</code> \u6216 <code>Set</code> \u5B58\u50A8\u5BF9\u8C61\u65F6\uFF0C\u540C <code>Object</code> \u4E00\u81F4\u90FD\u662F\u5F3A\u5F15\u7528\uFF0C\u5982\u679C\u4E0D\u5C06\u5176\u4E3B\u52A8\u6E05\u9664\u5F15\u7528\uFF0C\u5176\u540C\u6837\u4F1A\u9020\u6210\u5185\u5B58\u4E0D\u81EA\u52A8\u8FDB\u884C\u56DE\u6536\u3002</p><h3 id="\u672A\u6E05\u7406\u7684console\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u672A\u6E05\u7406\u7684console\u8F93\u51FA" aria-hidden="true">#</a> \u672A\u6E05\u7406\u7684console\u8F93\u51FA</h3><h2 id="_7-\u5185\u5B58\u81A8\u80C0" tabindex="-1"><a class="header-anchor" href="#_7-\u5185\u5B58\u81A8\u80C0" aria-hidden="true">#</a> 7. \u5185\u5B58\u81A8\u80C0</h2><p>\u5728\u77ED\u65F6\u95F4\u5185\u5185\u5B58\u5360\u7528\u6781\u901F\u4E0A\u5347\u5230\u8FBE\u4E00\u4E2A\u5CF0\u503C\uFF0C\u60F3\u8981\u907F\u514D\u9700\u8981\u4F7F\u7528\u6280\u672F\u624B\u6BB5\u51CF\u5C11\u5BF9\u5185\u5B58\u7684\u5360\u7528\u3002</p><h2 id="_8-\u9891\u7E41-gc" tabindex="-1"><a class="header-anchor" href="#_8-\u9891\u7E41-gc" aria-hidden="true">#</a> 8. \u9891\u7E41 GC</h2><p>GC \u6267\u884C\u7684\u7279\u522B\u9891\u7E41\uFF0C\u4E00\u822C\u51FA\u73B0\u5728\u9891\u7E41\u4F7F\u7528\u5927\u7684\u4E34\u65F6\u53D8\u91CF\u5BFC\u81F4\u65B0\u751F\u4EE3\u7A7A\u95F4\u88AB\u88C5\u6EE1\u7684\u901F\u5EA6\u6781\u5FEB\uFF0C\u800C\u6BCF\u6B21\u65B0\u751F\u4EE3\u88C5\u6EE1\u65F6\u5C31\u4F1A\u89E6\u53D1 GC\uFF0C\u9891\u7E41 GC \u540C\u6837\u4F1A\u5BFC\u81F4\u9875\u9762\u5361\u987F\uFF0C\u60F3\u8981\u907F\u514D\u7684\u8BDD\u5C31\u4E0D\u8981\u641E\u592A\u591A\u7684\u4E34\u65F6\u53D8\u91CF\uFF0C\u56E0\u4E3A\u4E34\u65F6\u53D8\u91CF\u4E0D\u7528\u4E86\u5C31\u4F1A\u88AB\u56DE\u6536\u3002</p>`,19);function J(L,R){const a=o("ExternalLinkIcon");return c(),i("div",null,[r,n("div",d,[u,n("p",null,[k,n("a",h,[v,e(a)])])]),n("div",m,[b,n("p",null,[f,n("a",_,[g,e(a)])])]),y,w,j,x,C,n("div",S,[G,n("p",null,[A,n("a",q,[B,e(a)])])]),I,n("div",M,[V,n("p",null,[N,n("a",O,[z,e(a)])])]),E])}const T=p(l,[["render",J],["__file","44.html.vue"]]);export{T as default};