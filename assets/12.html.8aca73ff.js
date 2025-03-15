import{_ as t,r as p,o as c,c as o,b as n,d as e,e as s,a as i}from"./app.2a439a8a.js";const l={},u=n("h1",{id:"\u3010q012\u3011js-\u4E2D\u7EE7\u627F\u662F\u5982\u4F55\u5B9E\u73B0\u7684",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u3010q012\u3011js-\u4E2D\u7EE7\u627F\u662F\u5982\u4F55\u5B9E\u73B0\u7684","aria-hidden":"true"},"#"),s(" \u3010Q012\u3011JS \u4E2D\u7EE7\u627F\u662F\u5982\u4F55\u5B9E\u73B0\u7684")],-1),r=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u66F4\u591A\u63CF\u8FF0"),n("p",null,"7\u79CD\u65B9\u6CD5")],-1),d={class:"custom-container tip"},k=n("p",{class:"custom-container-title"},"Issue",-1),v=s("\u6B22\u8FCE\u5728 Gtihub Issue \u4E2D\u56DE\u7B54\u6B64\u95EE\u9898: "),m={href:"https://github.com/kangyana/daily-question/issues/12",target:"_blank",rel:"noopener noreferrer"},b=s("Issue 12"),h={class:"custom-container tip"},_=n("p",{class:"custom-container-title"},"Author",-1),f=s("\u56DE\u7B54\u8005: "),y={href:"https://github.com/kangyana",target:"_blank",rel:"noopener noreferrer"},g=s("kangyana"),j=i(`<h2 id="_1-\u539F\u578B\u94FE" tabindex="-1"><a class="header-anchor" href="#_1-\u539F\u578B\u94FE" aria-hidden="true">#</a> 1. \u539F\u578B\u94FE</h2><p>\u8BA9\u4E00\u4E2A <strong>\u6784\u9020\u51FD\u6570</strong> \u7684\u539F\u578B\u662F\u53E6\u4E00\u4E2A\u7C7B\u578B\u7684\u5B9E\u4F8B\uFF0C<code>new</code> \u51FA\u6765\u7684\u5B9E\u4F8B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;zs&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Man</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Man</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Man</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name <span class="token comment">// &#39;zs&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F18\u70B9\uFF1A\u5199\u6CD5\u65B9\u4FBF\u7B80\u6D01\uFF0C\u5BB9\u6613\u7406\u89E3 \u7F3A\u70B9\uFF1A\u5BF9\u8C61\u5B9E\u4F8B\u5171\u4EAB\u6240\u6709\u7EE7\u627F\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002\u4F20\u6559\u5B50\u7C7B\u578B\u5B9E\u4F8B\u7684\u65F6\u5019\uFF0C\u4E0D\u80FD\u4F20\u9012\u53C2\u6570\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u5BF9\u8C61\u662F\u4E00\u6B21\u6027\u521B\u5EFA\u7684\uFF08\u6CA1\u529E\u6CD5\u5B9A\u5236\u5316\uFF09</p><h2 id="_2-\u501F\u7528\u6784\u9020\u51FD\u6570\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_2-\u501F\u7528\u6784\u9020\u51FD\u6570\u7EE7\u627F" aria-hidden="true">#</a> 2. \u501F\u7528\u6784\u9020\u51FD\u6570\u7EE7\u627F</h2><p>\u5728\u5B50\u7C7B\u578B\u6784\u9020\u51FD\u6570\u7684\u5185\u90E8\u8C03\u7528\u7236\u7C7B\u578B\u6784\u9020\u51FD\u6570\uFF1B\u4F7F\u7528 apply() \u6216 call() \u65B9\u6CD5\u5C06\u7236\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u7ED1\u5B9A\u5728\u5B50\u5BF9\u8C61\u4E0A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Man</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F18\u70B9\uFF1A\u89E3\u51B3\u4E86\u539F\u578B\u94FE\u5B9E\u73B0\u7EE7\u627F\u7684\u4E0D\u80FD\u4F20\u53C2\u7684\u95EE\u9898\u548C\u7236\u7C7B\u7684\u539F\u578B\u5171\u4EAB\u7684\u95EE\u9898 \u7F3A\u70B9\uFF1A\u501F\u7528\u6784\u9020\u51FD\u6570\u7684\u7F3A\u70B9\u662F\u65B9\u6CD5\u90FD\u5728\u6784\u9020\u51FD\u6570\u4E2D\u5B9A\u4E49\uFF0C\u56E0\u6B64\u65E0\u6CD5\u5B9E\u73B0\u51FD\u6570\u590D\u7528\u3002\u5728\u7236\u7C7B\u578B\u7684\u539F\u578B\u4E2D\u5B9A\u4E49\u7684\u65B9\u6CD5\uFF0C\u5BF9\u5B50\u7C7B\u578B\u800C\u8A00\u4E5F\u662F\u4E0D\u53EF\u89C1\u7684\uFF0C\u7ED3\u679C\u6240\u6709\u7C7B\u578B\u90FD\u53EA\u80FD\u4F7F\u7528\u6784\u9020\u51FD\u6570\u6A21\u5F0F</p><h2 id="_3-\u7EC4\u5408\u7EE7\u627F-\u7ECF\u5178\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_3-\u7EC4\u5408\u7EE7\u627F-\u7ECF\u5178\u7EE7\u627F" aria-hidden="true">#</a> 3. \u7EC4\u5408\u7EE7\u627F\uFF08\u7ECF\u5178\u7EE7\u627F\uFF09</h2><p>\u5C06 <code>\u539F\u578B\u94FE</code> \u548C <code>\u501F\u7528\u6784\u9020\u51FD\u6570</code> \u7684\u7EC4\u5408\u5230\u4E00\u5757\u3002 \u4F7F\u7528\u539F\u578B\u94FE\u5B9E\u73B0\u5BF9\u539F\u578B\u5C5E\u6027\u548C\u65B9\u6CD5\u7684\u7EE7\u627F\uFF0C\u800C\u901A\u8FC7\u501F\u7528\u6784\u9020\u51FD\u6570\u6765\u5B9E\u73B0\u5BF9\u5B9E\u4F8B\u5C5E\u6027\u7684\u7EE7\u627F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;My name is &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Man</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Man</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Man</span><span class="token punctuation">(</span><span class="token string">&#39;zs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>sayName  <span class="token comment">// &#39;My name is zs&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F18\u70B9: \u89E3\u51B3\u4E86\u539F\u578B\u94FE\u7EE7\u627F\u548C\u501F\u7528\u6784\u9020\u51FD\u6570\u7EE7\u627F\u9020\u6210\u7684\u5F71\u54CD \u7F3A\u70B9: \u65E0\u8BBA\u5728\u4EC0\u4E48\u60C5\u51B5\u4E0B\uFF0C\u90FD\u4F1A\u8C03\u7528\u4E24\u6B21\u8D85\u7C7B\u578B\u6784\u9020\u51FD\u6570\uFF1A\u4E00\u6B21\u662F\u5728\u521B\u5EFA\u5B50\u7C7B\u578B\u539F\u578B\u7684\u65F6\u5019\uFF0C\u53E6\u4E00\u6B21\u662F\u5728\u5B50\u7C7B\u578B\u6784\u9020\u51FD\u6570\u5185\u90E8</p><h2 id="_4-\u539F\u578B\u5F0F\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_4-\u539F\u578B\u5F0F\u7EE7\u627F" aria-hidden="true">#</a> 4. \u539F\u578B\u5F0F\u7EE7\u627F</h2><p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u6302\u5230\u65B0\u5EFA\u5BF9\u8C61\u7684\u539F\u578B\u4E0A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;zs&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> man <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span><span class="token punctuation">;</span>

man<span class="token punctuation">.</span>name <span class="token comment">// &#39;zs&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F18\u70B9\u662F\uFF1A\u4E0D\u9700\u8981\u5355\u72EC\u521B\u5EFA\u6784\u9020\u51FD\u6570 \u7F3A\u70B9\u662F\uFF1A\u5C5E\u6027\u4E2D\u5305\u542B\u7684\u5F15\u7528\u503C\u59CB\u7EC8\u4F1A\u5728\u76F8\u5173\u5BF9\u8C61\u95F4\u5171\u4EAB\uFF0C\u5B50\u7C7B\u5B9E\u4F8B\u4E0D\u80FD\u5411\u7236\u7C7B\u4F20\u53C2</p><h2 id="_5-\u5BC4\u751F\u5F0F\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_5-\u5BC4\u751F\u5F0F\u7EE7\u627F" aria-hidden="true">#</a> 5. \u5BC4\u751F\u5F0F\u7EE7\u627F</h2><p>\u5BC4\u751F\u5F0F\u7EE7\u627F\u7684\u601D\u8DEF\u4E0E(\u5BC4\u751F) <code>\u539F\u578B\u5F0F\u7EE7\u627F</code> \u548C <code>\u5DE5\u5382\u6A21\u5F0F</code> \u4F3C, \u5373\u521B\u5EFA\u4E00\u4E2A\u4EC5\u7528\u4E8E\u5C01\u88C5\u7EE7\u627F\u8FC7\u7A0B\u7684\u51FD\u6570,\u8BE5\u51FD\u6570\u5728\u5185\u90E8\u4EE5\u67D0\u79CD\u65B9\u5F0F\u6765\u589E\u5F3A\u5BF9\u8C61,\u6700\u540E\u518D\u50CF\u771F\u7684\u662F\u5B83\u505A\u4E86\u6240\u6709\u5DE5\u4F5C\u4E00\u6837\u8FD4\u56DE\u5BF9\u8C61</p><div class="language-javascrip ext-javascrip line-numbers-mode"><pre class="language-javascrip"><code>function objectCopy(obj) {
  function Fun() { };
  Fun.prototype = obj;
  return new Fun();
}

function createAnother(obj) {
  let clone = objectCopy(obj);
  clone.sayName = function () {
    console.log(&#39;My name is &#39; + this.name);
  };
  return clone;
}

var person = { name: &#39;zs&#39; };

createAnother(person).sayName(); // &#39;My name is zs&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F18\u70B9\uFF1A\u5199\u6CD5\u7B80\u5355\uFF0C\u4E0D\u9700\u8981\u5355\u72EC\u521B\u5EFA\u6784\u9020\u51FD\u6570 \u7F3A\u70B9\uFF1A\u901A\u8FC7\u5BC4\u751F\u5F0F\u7EE7\u627F\u7ED9\u5BF9\u8C61\u6DFB\u52A0\u51FD\u6570\u4F1A\u5BFC\u81F4\u51FD\u6570\u96BE\u4EE5\u590D\u7528</p><h2 id="_6-\u5BC4\u751F\u7EC4\u5408\u5F0F\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_6-\u5BC4\u751F\u7EC4\u5408\u5F0F\u7EE7\u627F" aria-hidden="true">#</a> 6. \u5BC4\u751F\u7EC4\u5408\u5F0F\u7EE7\u627F</h2><p>\u901A\u8FC7\u501F\u7528\u6784\u9020\u51FD\u6570\u6765\u7EE7\u627F\u5C5E\u6027\uFF0C\u901A\u8FC7\u539F\u578B\u94FE\u7684\u6DF7\u6210\u5F62\u5F0F\u6765\u7EE7\u627F\u65B9\u6CD5\u3002\u672C\u8D28\u4E0A\uFF0C\u5C31\u662F\u4F7F\u7528\u5BC4\u751F\u5F0F\u7EE7\u627F\u6765\u7EE7\u627F\u8D85\u7C7B\u578B\u7684\u539F\u578B\uFF0C\u7136\u540E\u518D\u5C06\u7ED3\u679C\u6307\u5B9A\u7ED9\u5B50\u7C7B\u578B\u7684\u539F\u578B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// ...</span>
<span class="token keyword">function</span> <span class="token function">inheritPrototype</span><span class="token punctuation">(</span><span class="token parameter">child<span class="token punctuation">,</span> parent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> prototype <span class="token operator">=</span> <span class="token function">objectCopy</span><span class="token punctuation">(</span>parent<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
  prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> child<span class="token punctuation">;</span>
  <span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> prototype<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F18\u70B9\u662F\uFF1A\u9AD8\u6548\u7387\u53EA\u8C03\u7528\u4E00\u6B21\u7236\u6784\u9020\u51FD\u6570\uFF0C\u5E76\u4E14\u56E0\u6B64\u907F\u514D\u4E86\u5728\u5B50\u539F\u578B\u4E0A\u9762\u521B\u5EFA\u4E0D\u5FC5\u8981\uFF0C\u591A\u4F59\u7684\u5C5E\u6027\u3002\u4E0E\u6B64\u540C\u65F6\uFF0C\u539F\u578B\u94FE\u8FD8\u80FD\u4FDD\u6301\u4E0D\u53D8 \u7F3A\u70B9\u662F\uFF1A\u4EE3\u7801\u590D\u6742</p><h1 id="_7-class\u5B9E\u73B0\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#_7-class\u5B9E\u73B0\u7EE7\u627F" aria-hidden="true">#</a> 7. Class\u5B9E\u73B0\u7EE7\u627F</h1><p>\u4F18\u70B9\uFF1A\u8BED\u6CD5\u7B80\u5355\u6613\u61C2,\u64CD\u4F5C\u66F4\u65B9\u4FBF \u7F3A\u70B9\uFF1A\u5E76\u4E0D\u662F\u6240\u6709\u7684\u6D4F\u89C8\u5668\u90FD\u652F\u6301class\u5173\u952E\u5B57</p>`,26);function w(x,M){const a=p("ExternalLinkIcon");return c(),o("div",null,[u,r,n("div",d,[k,n("p",null,[v,n("a",m,[b,e(a)])])]),n("div",h,[_,n("p",null,[f,n("a",y,[g,e(a)])])]),j])}const z=t(l,[["render",w],["__file","12.html.vue"]]);export{z as default};
