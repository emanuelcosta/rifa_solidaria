text = "Oi gente, tudo bem? Me chamo Letícia e estou fazendo essa rifa para conseguir realizar uma cirurgia que custa R$ 15 mil reais. Fui diagnosticada com um tumor na coxa e preciso muito de sua ajuda para que minha saúde seja restaurada. Agradeço muito a todos que decidirem me ajudar. Abraço a todos e que Deus abençoe sua vida!";
app_name = 'Rifa Solidária';
number_points = 160;
tipo_chave_pix = 'Chave PIX(Telefone):';
chave_pix = '(85)98925-2964';
descricao_pix = 'Letícia Lima e Silva - Itaú Unibanco S.A';
link_whatsapp = 'https://api.whatsapp.com/send/?phone=5585996500294&text&type=phone_number&app_absent=0';

$(document).ready(function() {

  $('#text_rifa').html(text);
    $('a.chave_pix').attr('data-clipboard-text',chave_pix);
    $('span.chave_pix').html(chave_pix);
    $('#tipo_chave_pix').html(tipo_chave_pix);
    $('#descricao_pix').html(descricao_pix);
    $('#link_whatsapp').attr('href',link_whatsapp);

    clipboard = new ClipboardJS('.btn');
    clipboard.on('success', function(e) {
      alert('Copiado');
      // TODO Toast em botão
      // console.info('Action:', e.action);
      // console.info('Text:', e.text);
      // console.info('Trigger:', e.trigger);
      e.clearSelection();
    });

    clipboard.on('error', function(e) {
      console.log(e);
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
    });

    var pontos_vendidos = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      9,
      11,
      12,
      14,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      29,
      30,
      33,
      35,
      37,
      41,
      46,
      53,
      64,
      65,
      67,
      72,
      83,
      90,
      // 96,
      // 100,
      // 102,
      // 104,
      // 123,
      // 135,
      // 144,
    ];

    var div_pontos = $('#div_pontos')
    for (i = 1; i <= 160; i++) {
      div_pontos.append('<div class="col-md-2 col-lg-1 col-sm-2 com-xs-2 border border-secondary col-1 m-2 p-2 d-flex justify-content-center">' +
        '<span> ' + ((pontos_vendidos.includes(i)) ? '  <span class="badge bg-black font-weight-bold rounded-pill"><i class="fa fa-check "></i></span>' + '</span>' : i) +
        '</div>')
    }

  });