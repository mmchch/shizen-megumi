document.addEventListener('DOMContentLoaded', function() {
  // ナビゲーションのHTMLを挿入
  document.getElementById('nav-root').innerHTML = `
    <nav>
      <a href="/index.html" class="nav-logo">自然のめぐみ・セルフケア<span style="font-size:0.7em;display:block;letter-spacing:0.08em;opacity:0.75;">by 自然の英語工房</span></a>
      <button class="hamburger" id="hamburger" aria-label="メニュー">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="nav-overlay" id="nav-overlay"></div>
    <div class="nav-drawer" id="nav-drawer">
      <ul>
        <li><a href="/index.html">TOP</a></li>
        <li><a href="/about.html">About us</a></li>
        <li><a href="/yoga.html">ヨガ</a></li>
        <li><a href="/eigo.html">英語</a></li>
        <li><a href="/index.html#schedule">スケジュール</a></li>
        <li><a href="/TT_top.html">ヨガ講師養成</a></li>
        <li><a href="/index.html#access">アクセス</a></li>
      </ul>
    </div>
  `;

  // ハンバーガーメニューの動作
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('nav-drawer');
  const overlay = document.getElementById('nav-overlay');

  function toggleMenu() {
    hamburger.classList.toggle('open');
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
  }

  hamburger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      drawer.classList.remove('open');
      overlay.classList.remove('open');
    });
  });
});
