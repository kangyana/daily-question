import{_ as e,r as p,o,c,b as n,d as t,e as s,a as l}from"./app.2a439a8a.js";const i={},r=n("h1",{id:"\u3010q085\u3011\u6709\u6CA1\u6709\u7528\u8FC7\u5176\u5B83\u72B6\u6001\u7BA1\u7406\u5668-\u4EE5\u53CA\u539F\u7406",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u3010q085\u3011\u6709\u6CA1\u6709\u7528\u8FC7\u5176\u5B83\u72B6\u6001\u7BA1\u7406\u5668-\u4EE5\u53CA\u539F\u7406","aria-hidden":"true"},"#"),s(" \u3010Q085\u3011\u6709\u6CA1\u6709\u7528\u8FC7\u5176\u5B83\u72B6\u6001\u7BA1\u7406\u5668\uFF1F\u4EE5\u53CA\u539F\u7406")],-1),u=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u66F4\u591A\u63CF\u8FF0"),n("p",null,"mobx")],-1),d={class:"custom-container tip"},k=n("p",{class:"custom-container-title"},"Issue",-1),v=s("\u6B22\u8FCE\u5728 Gtihub Issue \u4E2D\u56DE\u7B54\u6B64\u95EE\u9898: "),m={href:"https://github.com/kangyana/daily-question/issues/85",target:"_blank",rel:"noopener noreferrer"},h=s("Issue 85"),y={class:"custom-container tip"},b=n("p",{class:"custom-container-title"},"Author",-1),_=s("\u56DE\u7B54\u8005: "),g={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"},f=s("kangyana"),x=l(`<h2 id="_1-dva" tabindex="-1"><a class="header-anchor" href="#_1-dva" aria-hidden="true">#</a> 1. dva</h2><p><code>dva</code> \u662F\u4E00\u4E2A\u57FA\u4E8E <code>redux</code> \u548C <code>redux-saga</code> \u7684\u6570\u636E\u6D41\u65B9\u6848\u3002</p><h3 id="\u4E3A\u4EC0\u4E48\u4E0D\u4F7F\u7528-redux" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4E0D\u4F7F\u7528-redux" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u4E0D\u4F7F\u7528 redux\uFF1F</h3><ul><li>\u7F16\u8F91\u6210\u672C\u9AD8\uFF0C\u9700\u8981\u5728 <code>reducer</code>, <code>saga</code>, <code>action</code> \u4E4B\u95F4\u6765\u56DE\u5207\u6362\u3002</li><li>\u4E0D\u4FBF\u4E8E\u7EC4\u7EC7\u4E1A\u52A1\u6A21\u578B \u3002\u6BD4\u5982\u5199\u76F8\u4F3C\u7684\u4E1A\u52A1\u9875\u9762\uFF0C\u9700\u8981\u590D\u5236\u5F88\u591A\u6587\u4EF6\u3002</li><li><code>saga</code> \u4F7F\u7528\u592A\u590D\u6742\uFF0C\u6BCF\u76D1\u542C\u4E00\u4E2A <code>action</code> \u90FD\u9700\u8981\u8D70 <code>fork</code> -&gt; <code>watcher</code> -&gt; <code>worker</code> \u7684\u6D41\u7A0B\u3002</li><li><code>entry</code> \u4F7F\u7528\u9EBB\u70E6\u3002</li></ul><p><code>dva</code> \u6B63\u662F\u7528\u4E8E\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898\u3002</p><h3 id="dva-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#dva-\u539F\u7406" aria-hidden="true">#</a> dva \u539F\u7406</h3><p><code>dva</code> \u662F\u57FA\u4E8E <code>redux</code> + <code>redux-saga</code> \u7684\u4E00\u5C42\u8F7B\u91CF\u5C01\u88C5\uFF0C\u6CA1\u6709\u5F15\u5165\u4EFB\u4F55\u65B0\u6982\u5FF5\uFF0C\u5168\u90E8\u4EE3\u7801\u4E0D\u5230 100 \u884C\u3002</p><p>\u6838\u5FC3\u529F\u80FD\u662F\u63D0\u4F9B\u4E86 <code>app.model</code> \u65B9\u6CD5\uFF0C\u7528\u4E8E\u628A <code>reducer</code>, <code>initialState</code>, <code>action</code>, <code>saga</code> \u5C01\u88C5\u5230\u4E00\u8D77\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">namespace</span><span class="token operator">:</span> <span class="token string">&#39;products&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">subscriptions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;products/query&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">effects</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token string">&#39;products/query&#39;</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">yield</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">800</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">yield</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;products/query/success&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ant-tool&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;roof&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">reducers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token string">&#39;products/query&#39;</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;products/query/success&#39;</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> <span class="token punctuation">{</span> payload <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">list</span><span class="token operator">:</span> payload <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u5BF9\u5E94\u4F7F\u7528 <code>redux</code>\u65F6\uFF0C\u521B\u5EFA\u7684 <code>sagas/products.js</code>, <code>reducers/products.js</code> \u548C <code>actions/products.js</code>\u3002</p><p>\u4ECB\u7ECD\u4E0B <code>model</code>\uFF1A</p><ul><li><strong>namespace</strong>\uFF1A\u5BF9\u5E94 <code>reducer</code> \u5728 <code>combine</code> \u5230 <code>rootReducer</code> \u65F6\u7684 key \u503C\u3002</li><li><strong>state</strong>\uFF1A\u5BF9\u5E94 <code>reducer</code> \u7684 <code>initialState</code>\u3002</li><li><strong>subscription</strong>\uFF1A\u4E8B\u4EF6\u76D1\u542C\u5668\u3002</li><li><strong>effects</strong>\uFF1A\u5BF9\u5E94 <code>saga</code>\uFF0C\u5E76\u7B80\u5316\u4E86\u4F7F\u7528</li><li><strong>reducers</strong></li></ul>`,12);function q(w,j){const a=p("ExternalLinkIcon");return o(),c("div",null,[r,u,n("div",d,[k,n("p",null,[v,n("a",m,[h,t(a)])])]),n("div",y,[b,n("p",null,[_,n("a",g,[f,t(a)])])]),x])}const N=e(i,[["render",q],["__file","85.html.vue"]]);export{N as default};