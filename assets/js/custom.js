text = "Oi gente, tudo bem? Me chamo Letícia e estou fazendo essa rifa para conseguir realizar uma cirurgia que custa R$ 15 mil reais. Fui diagnosticada com um tumor na coxa e preciso muito de sua ajuda para que minha saúde seja restaurada. Agradeço muito a todos que decidirem me ajudar. Abraço a todos e que Deus abençoe sua vida!";
app_name = 'Rifa Solidária';
number_points = 160;
tipo_chave_pix = 'Chave PIX(Telefone):';
chave_pix = '(85)98925-2964';
descricao_pix = 'Letícia Lima e Silva - Itaú Unibanco S.A';
link_whatsapp = 'https://api.whatsapp.com/send/?phone=5585996500294&text&type=phone_number&app_absent=0';


function converterCSVparaArray(conteudoCSV) {
  const linhas = conteudoCSV.split('\n');
  const arrayCSV = [];

  linhas.forEach(function (linha) {
    const valores = linha.split(',');
    arrayCSV.push({
      number: valores[0],
      name: valores[1]
    })
  });

  return arrayCSV;
}

$(document).ready(function () {

  $('#text_rifa').html(text);
  $('a.chave_pix').attr('data-clipboard-text', chave_pix);
  $('span.chave_pix').html(chave_pix);
  $('#tipo_chave_pix').html(tipo_chave_pix);
  $('#descricao_pix').html(descricao_pix);
  $('#link_whatsapp').attr('href', link_whatsapp);

  clipboard = new ClipboardJS('.btn');
  clipboard.on('success', function (e) {
    alert('Copiado');
    // TODO Toast em botão
    // console.info('Action:', e.action);
    // console.info('Text:', e.text);
    // console.info('Trigger:', e.trigger);
    e.clearSelection();
  });

  clipboard.on('error', function (e) {
    console.log(e);
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
  });

  var pontos_vendidos = [
    // 104,
    // 123,
    // 135,
    // 144,
  ];

  // URL = 'pontos_vendidos.json'
  // URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRxOspxFk1AQeOGTADB4Ie5o7mipxNZ4zsKlejNh9yFuLTAq_pNtIQPCMNmJiJskne1WNwBLNjtg0fc/pub?gid=1084970764&single=true&output=csv'
  // $.ajax({
  //   url: URL,
  //   success: function (data) {
  //     array_data = converterCSVparaArray(data);
  //     console.log(data);
  //     var div_pontos = $('#div_pontos')
  //     array_data.forEach(function (value, index) {
  //       div_pontos.append('<div class="col-md-2 col-lg-1 col-sm-2 com-xs-2 border border-secondary col-1 m-2 p-2 d-flex justify-content-center">' +
  //         '<span> ' + ((value['name'] != '') ? '<span class="badge bg-black font-weight-bold rounded-pill"><i class="fa fa-check "></i></span>' + '</span>' : value['number']) +
  //         '</div>')
  //     })
  //   }
  // })


});