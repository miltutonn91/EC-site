
'use strict';
$(document).ready(function() {
  $('.slider').slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
$(function () {
  $('.hamburger-icon').on('click', function () {
    $(this).toggleClass('close');     // ハンバーガーをバツに変形
    $('.nav').toggleClass('open');    // メニュー表示切り替え
  });

  // ナビ内リンクをクリックしたらメニューを閉じる
  $('.nav_list a').on('click', function () {
    $('.hamburger-icon').removeClass('close');
    $('.nav').removeClass('open');
  });
});
$(function () {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    const speed = 500;
    const headerHeight = $('.main_header').outerHeight() || 0;
    const target = $(this.hash === "#" || this.hash === "" ? 'html' : this.hash);
    const position = target.offset().top - headerHeight;

    $('html, body').animate({ scrollTop: position }, speed, 'swing');

    // メニュー閉じる（モバイル用）
    $('.hamburger-icon').removeClass('close');
    $('.nav').removeClass('open');
  });
  document.addEventListener('DOMContentLoaded', () => {
    const fadeElems = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    fadeElems.forEach(el => observer.observe(el));
  });
  const fadeElems = document.querySelectorAll('.fade-in-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeElems.forEach(el => observer.observe(el));
});
