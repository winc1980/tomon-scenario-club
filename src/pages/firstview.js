import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger); 
gsap.to(".p-firstview_text", {
    scrollTrigger: {
      trigger: "#firstview", // アニメーションのトリガー要素
      start: "top top",      // ビューポートの開始位置
      end: "center top",     // フェードアウトが終了する位置
      scrub: true,           // スクロールに同期
    },
    autoAlpha: 0,
    y: -100, // 上に移動
});

gsap.to(".p-firstview_background", {
    scrollTrigger: {
      trigger: "#firstview",
      start: "center top",    // 背景が動き始める位置
      end: "bottom top",      // 背景が動きを終える位置
      scrub: true,
    },
    autoAlpha: 0,
    y: -200, // 背景を上方向に移動
  });

