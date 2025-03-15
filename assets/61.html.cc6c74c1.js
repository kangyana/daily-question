import{_ as t,r as o,o as p,c,b as n,d as e,e as s,a as i}from"./app.2a439a8a.js";const r={},l=n("h1",{id:"\u3010q061\u3011content",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u3010q061\u3011content","aria-hidden":"true"},"#"),s(" \u3010Q061\u3011content")],-1),d={class:"custom-container tip"},u=n("p",{class:"custom-container-title"},"Issue",-1),k=s("\u6B22\u8FCE\u5728 Gtihub Issue \u4E2D\u56DE\u7B54\u6B64\u95EE\u9898: "),v={href:"https://github.com/kangyana/daily-question/issues/61",target:"_blank",rel:"noopener noreferrer"},m=s("Issue 61"),h={class:"custom-container tip"},x=n("p",{class:"custom-container-title"},"Author",-1),b=s("\u56DE\u7B54\u8005: "),g={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"},_=s("kangyana"),y=i(`<h2 id="_1-content" tabindex="-1"><a class="header-anchor" href="#_1-content" aria-hidden="true">#</a> 1. content</h2><p><code>Context</code>\uFF08\u4E0A\u4E0B\u6587\uFF09 \u63D0\u4F9B\u4E86\u4E00\u4E2A\u65E0\u9700\u4E3A\u6BCF\u5C42\u7EC4\u4EF6\u624B\u52A8\u6DFB\u52A0 <code>props</code>\uFF0C\u5C31\u80FD\u5728\u7EC4\u4EF6\u6811\u95F4\u8FDB\u884C\u6570\u636E\u4F20\u9012\u7684\u65B9\u6CD5\u3002</p><h2 id="_2-\u4F55\u65F6\u4F7F\u7528-context" tabindex="-1"><a class="header-anchor" href="#_2-\u4F55\u65F6\u4F7F\u7528-context" aria-hidden="true">#</a> 2. \u4F55\u65F6\u4F7F\u7528 Context</h2><p><code>Context</code> \u8BBE\u8BA1\u76EE\u7684\u662F\u4E3A\u4E86\u5171\u4EAB\u90A3\u4E9B\u5BF9\u4E8E\u4E00\u4E2A\u7EC4\u4EF6\u6811\u800C\u8A00\u662F <strong>\u5168\u5C40\u7684\u6570\u636E</strong>\uFF0C\u4F8B\u5982\u5F53\u524D\u8BA4\u8BC1\u7684\u7528\u6237\u3001\u4E3B\u9898\u6216\u9996\u9009\u8BED\u8A00\u3002</p><h2 id="_3-\u4F7F\u7528-context-\u4E4B\u524D\u7684\u8003\u8651" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528-context-\u4E4B\u524D\u7684\u8003\u8651" aria-hidden="true">#</a> 3. \u4F7F\u7528 Context \u4E4B\u524D\u7684\u8003\u8651</h2><p><code>Context</code> \u4E3B\u8981\u5E94\u7528\u573A\u666F\u5728\u4E8E\u5F88\u591A\u4E0D\u540C\u5C42\u7EA7\u7684\u7EC4\u4EF6\u9700\u8981\u8BBF\u95EE\u540C\u6837\u4E00\u4E9B\u7684\u6570\u636E\u3002\u8BF7\u8C28\u614E\u4F7F\u7528\uFF0C\u56E0\u4E3A\u8FD9\u4F1A\u4F7F\u5F97\u7EC4\u4EF6\u7684\u590D\u7528\u6027\u53D8\u5DEE\u3002</p><p>\u5982\u679C\u4F60\u53EA\u662F\u60F3\u907F\u514D\u5C42\u5C42\u4F20\u9012\u4E00\u4E9B\u5C5E\u6027\uFF0C<code>\u7EC4\u4EF6\u7EC4\u5408\uFF08component composition\uFF09</code> \u6709\u65F6\u5019\u662F\u4E00\u4E2A\u6BD4 context \u66F4\u597D\u7684\u89E3\u51B3\u65B9\u6848\u3002</p><h2 id="_4-content-\u7684api" tabindex="-1"><a class="header-anchor" href="#_4-content-\u7684api" aria-hidden="true">#</a> 4. Content \u7684API</h2><h3 id="react-createcontext" tabindex="-1"><a class="header-anchor" href="#react-createcontext" aria-hidden="true">#</a> React.createContext</h3><p>\u521B\u5EFA\u4E00\u4E2A <code>Context</code> \u5BF9\u8C61\u3002 \u5F53 React \u6E32\u67D3\u4E00\u4E2A\u8BA2\u9605\u4E86\u8FD9\u4E2A <code>Context</code> \u5BF9\u8C61\u7684\u7EC4\u4EF6\uFF0C\u8FD9\u4E2A\u7EC4\u4EF6\u4F1A\u4ECE\u7EC4\u4EF6\u6811\u4E2D\u79BB\u81EA\u8EAB\u6700\u8FD1\u7684\u90A3\u4E2A\u5339\u914D\u7684 <code>Provider</code> \u4E2D\u8BFB\u53D6\u5230\u5F53\u524D\u7684 <code>context</code> \u503C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> MyContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span>defaultValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="context-provider" tabindex="-1"><a class="header-anchor" href="#context-provider" aria-hidden="true">#</a> Context.Provider</h3><p>Provider \u63A5\u6536\u4E00\u4E2A value \u5C5E\u6027\uFF0C\u4F20\u9012\u7ED9\u6D88\u8D39\u7EC4\u4EF6\u3002 \u5F53 Provider \u7684 value \u503C\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5B83\u5185\u90E8\u7684\u6240\u6709\u6D88\u8D39\u7EC4\u4EF6\u90FD\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>MyContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token comment">/* \u67D0\u4E2A\u503C */</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="context-consumer" tabindex="-1"><a class="header-anchor" href="#context-consumer" aria-hidden="true">#</a> Context.Consumer</h3><p>\u4E00\u4E2A React \u7EC4\u4EF6\uFF0C\u5B83\u53EF\u4EE5\u8BA2\u9605 <code>context</code> \u7684\u53D8\u66F4\u3002 \u6B64\u7EC4\u4EF6\u53EF\u4EE5\u8BA9\u4F60\u5728 <code>\u51FD\u6570\u5F0F\u7EC4\u4EF6</code> \u4E2D\u53EF\u4EE5\u8BA2\u9605 <code>context</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>MyContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
  <span class="token punctuation">{</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token comment">/* \u57FA\u4E8E context \u503C\u8FDB\u884C\u6E32\u67D3*/</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>MyContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="context-displayname" tabindex="-1"><a class="header-anchor" href="#context-displayname" aria-hidden="true">#</a> Context.displayName</h3><p><code>context</code> \u5BF9\u8C61\u63A5\u53D7\u4E00\u4E2A\u540D\u4E3A <code>displayName</code> \u7684 \u5C5E\u6027\uFF0C\u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\u3002 React DevTools \u4F7F\u7528\u8BE5\u5B57\u7B26\u4E32\u6765\u786E\u5B9A <code>context</code> \u8981\u663E\u793A\u7684\u5185\u5BB9\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> MyContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token comment">/* some value */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
MyContext<span class="token punctuation">.</span>displayName <span class="token operator">=</span> <span class="token string">&#39;MyDisplayName&#39;</span><span class="token punctuation">;</span>

<span class="token operator">&lt;</span>MyContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span> <span class="token comment">// &quot;MyDisplayName.Provider&quot; \u5728 DevTools \u4E2D</span>
<span class="token operator">&lt;</span>MyContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span> <span class="token comment">// &quot;MyDisplayName.Consumer&quot; \u5728 DevTools \u4E2D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#_5-\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> 5. \u6CE8\u610F\u4E8B\u9879</h2><p><code>context</code> \u6839\u636E <code>value</code> \u5C5E\u6027\u503C\u7684\u6D45\u6BD4\u8F83\u6765\u51B3\u5B9A\u4F55\u65F6\u8FDB\u884C\u6E32\u67D3\u3002 \u5F53 <code>provider</code> \u7684\u7236\u7EC4\u4EF6\u8FDB\u884C\u91CD\u6E32\u67D3\u65F6\uFF0C\u53EF\u80FD\u4F1A\u5728 <code>consumers</code> \u7EC4\u4EF6\u4E2D\u89E6\u53D1\u610F\u5916\u7684\u6E32\u67D3\u3002</p><p>\u5F53\u6BCF\u4E00\u6B21 <code>Provider</code> \u91CD\u6E32\u67D3\u65F6\uFF0C\u7531\u4E8E <code>value</code> \u5C5E\u6027\u603B\u662F\u88AB\u8D4B\u503C\u4E3A\u65B0\u7684\u5BF9\u8C61\uFF0C\u4EE5\u4E0B\u7684\u4EE3\u7801\u4F1A\u91CD\u65B0\u6E32\u67D3\u4E0B\u9762\u6240\u6709\u7684 <code>consumers</code> \u7EC4\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>MyContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">something</span><span class="token operator">:</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Toolbar <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>MyContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u9632\u6B62\u8FD9\u79CD\u60C5\u51B5\uFF0C\u5C06 <code>value</code> \u72B6\u6001\u63D0\u5347\u5230\u7236\u8282\u70B9\u7684 <code>state</code> \u91CC\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">something</span><span class="token operator">:</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>MyContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Toolbar <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>MyContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function C(f,j){const a=o("ExternalLinkIcon");return p(),c("div",null,[l,n("div",d,[u,n("p",null,[k,n("a",v,[m,e(a)])])]),n("div",h,[x,n("p",null,[b,n("a",g,[_,e(a)])])]),y])}const P=t(r,[["render",C],["__file","61.html.vue"]]);export{P as default};
