$(".carrosel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000, //2000 ms = 2 sec
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1, // escolhe a quantidade de items variando com o tamanho da tela
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });