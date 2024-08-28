import{_ as a,c as e,o as s,ab as o}from"./chunks/framework.D9SExukp.js";const m=JSON.parse('{"title":"Layout","description":"","frontmatter":{},"headers":[],"relativePath":"pt/reference/default-theme-layout.md","filePath":"pt/reference/default-theme-layout.md","lastUpdated":1724839260000}'),i={name:"pt/reference/default-theme-layout.md"},t=o(`<h1 id="layout" tabindex="-1">Layout <a class="header-anchor" href="#layout" aria-label="Permalink to &quot;Layout {#layout}&quot;">​</a></h1><p>Você pode escolher o layout da página definindo a opção de <code>layout</code> para o <a href="./frontmatter-config">frontmatter</a> da página. Há três opções de layout: <code>doc</code>, <code>page</code> e <code>home</code>. Se nada for especificado, a página será tratada como página <code>doc</code>.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">doc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h2 id="doc-layout" tabindex="-1">Layout do documento <a class="header-anchor" href="#doc-layout" aria-label="Permalink to &quot;Layout do documento {#doc-layout}&quot;">​</a></h2><p>A opção <code>doc</code> é o layout padrão e estiliza todo o conteúdo Markdown com o visual de &quot;documentação&quot;. Ela funciona agrupando todo o conteúdo na classe CSS <code>vp-doc</code>, e aplicando os estilos aos elementos abaixo dela.</p><p>Quase todos os elementos genéricos, como <code>p</code> ou <code>h2</code>, recebem um estilo especial. Portanto, lembre-se de que se você adicionar qualquer HTML personalizado dentro de um conteúdo Markdown, ele também será afetado por esses estilos.</p><p>Ele também fornece recursos específicos de documentação listados abaixo. Esses recursos estão habilitados apenas neste layout.</p><ul><li>Editar link</li><li>Links Anterior e Próximo</li><li><em>Outline</em></li><li><a href="./default-theme-carbon-ads">Carbon Ads</a></li></ul><h2 id="page-layout" tabindex="-1">Layout da Página <a class="header-anchor" href="#page-layout" aria-label="Permalink to &quot;Layout da Página {#page-layout}&quot;">​</a></h2><p>A opção <code>page</code> é tratada como &quot;página em branco&quot;. O Markdown ainda será processado e todas as <a href="./../guide/markdown">Extensões Markdown</a> funcionarão da mesma forma que o layout <code>doc</code>, mas este não receberá nenhum estilo padrão.</p><p>O layout da página permitirá que você estilize tudo sem que o tema VitePress afete a marcação. Isso é útil quando você deseja criar sua própria página personalizada.</p><p>Observe que mesmo neste layout, a barra lateral ainda aparecerá se a página tiver uma configuração de barra lateral correspondente.</p><h2 id="home-layout" tabindex="-1">Layout da Home <a class="header-anchor" href="#home-layout" aria-label="Permalink to &quot;Layout da Home {#home-layout}&quot;">​</a></h2><p>A opção <code>home</code> gerará um modelo de <em>&quot;Homepage&quot;</em>. Nesse layout você pode definir opções extras, como <code>hero</code> e <code>features</code>, para personalizar ainda mais o conteúdo. Visite <a href="./default-theme-home-page">Tema padrão: Página Inicial</a> para obter mais detalhes.</p><h2 id="no-layout" tabindex="-1">Sem Layout <a class="header-anchor" href="#no-layout" aria-label="Permalink to &quot;Sem Layout {#no-layout}&quot;">​</a></h2><p>Se você não quiser nenhum layout, pode passar <code>layout: false</code> pelo frontmatter. Esta opção é útil se você deseja uma página de destino totalmente personalizável (sem barra lateral, barra de navegação ou rodapé por padrão).</p><h2 id="custom-layout" tabindex="-1">Layout Personalizado <a class="header-anchor" href="#custom-layout" aria-label="Permalink to &quot;Layout Personalizado {#custom-layout}&quot;">​</a></h2><p>Você também pode usar um layout personalizado:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">foo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div><p>Isto irá procurar um componente chamado <code>foo</code> registrado no contexto. Por exemplo, você pode registrar seu componente globalmente em <code>.vitepress/theme/index.ts</code>:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DefaultTheme </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress/theme&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./Foo.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: DefaultTheme,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  enhanceApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Foo)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,21),n=[t];function l(p,d,r,h,c,u){return s(),e("div",null,n)}const y=a(i,[["render",l]]);export{m as __pageData,y as default};
