import{_ as s,c as a,o as i,ab as t}from"./chunks/framework.D9SExukp.js";const g=JSON.parse('{"title":"전문","description":"","frontmatter":{},"headers":[],"relativePath":"ko/guide/frontmatter.md","filePath":"ko/guide/frontmatter.md","lastUpdated":1724839260000}'),e={name:"ko/guide/frontmatter.md"},n=t(`<h1 id="frontmatter" tabindex="-1">전문 <a class="header-anchor" href="#frontmatter" aria-label="Permalink to &quot;전문 {#frontmatter}&quot;">​</a></h1><h2 id="usage" tabindex="-1">사용법 <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;사용법 {#usage}&quot;">​</a></h2><p>VitePress는 모든 Markdown 파일에서 YAML 전문(frontmatter)을 지원하며, 이를 <a href="https://github.com/jonschlinkert/gray-matter" target="_blank" rel="noreferrer">gray-matter</a>로 분석합니다. 전문은 Markdown 파일의 맨 위에 위치해야 합니다(<code>&lt;script&gt;</code> 태그를 포함한 모든 요소 이전에)하며, 세 개의 대시 라인 사이에 유효한 YAML 형식으로 설정되어야 합니다. 예시:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VitePress로 문서 작성하기</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div><p>많은 사이트 또는 기본 테마 구성 옵션이 전문에서 대응하는 옵션을 가지고 있습니다. 전문을 사용하여 현재 페이지에 대한 특정 동작을 재정의 할 수 있습니다. 자세한 내용은 <a href="./../reference/frontmatter-config">전문 구성 참조</a>를 참조하십시오.</p><p>또한 페이지상의 동적 Vue 표현식에서 사용될 수 있는 자체적인 전문 데이터를 정의할 수 있습니다.</p><h2 id="accessing-frontmatter-data" tabindex="-1">전문 데이터 접근 <a class="header-anchor" href="#accessing-frontmatter-data" aria-label="Permalink to &quot;전문 데이터 접근 {#accessing-frontmatter-data}&quot;">​</a></h2><p>전문 데이터는 특별한 <code>$frontmatter</code> 전역 변수를 통해 접근할 수 있습니다:</p><p>여기 Markdown 파일에서 사용하는 방법의 예시입니다:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VitePress로 문서 작성하기</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># {{ $frontmatter.title }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">가이드 내용</span></span></code></pre></div><p><code>&lt;script setup&gt;</code>에서 현재 페이지의 전문 데이터에 접근하려면 <a href="./../reference/runtime-api#usedata"><code>useData()</code></a> 헬퍼를 사용할 수 있습니다.</p><h2 id="alternative-frontmatter-formats" tabindex="-1">대체 전문 형식 <a class="header-anchor" href="#alternative-frontmatter-formats" aria-label="Permalink to &quot;대체 전문 형식 {#alternative-frontmatter-formats}&quot;">​</a></h2><p>VitePress는 중괄호로 시작하고 끝나는 JSON 전문 구문도 지원합니다:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;해커처럼 블로깅하기&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;editLink&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div>`,14),l=[n];function p(r,h,k,o,d,c){return i(),a("div",null,l)}const u=s(e,[["render",p]]);export{g as __pageData,u as default};
