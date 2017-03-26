
function renderStatistics(ctx, names, times) {
  var playersData = [];

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.font = '16px "PT Mono"';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура, вы победили!', 230, 40);
  ctx.fillText('Список результатов:', 225, 70);

  names.forEach(function (name, idx) {
    playersData.push({
      name: name,
      score: Math.round(times[idx])
    });
  });

  var currentX = 130,
      currentY = 260;
  playersData.forEach(function(elem) {
    ctx.fillStyle = '#000000';
    ctx.fillText(elem.name, currentX, currentY);
    var randomOpacity = Math.random();
    ctx.fillStyle = 'rgba(0, 0, 255, ' + randomOpacity + ')';
    if (elem.name == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    var barHeight = elem.score / 100;
    ctx.fillRect(currentX, currentY - barHeight - 20, 40, barHeight);
    ctx.fillStyle = '#000000';
    ctx.fillText(elem.score, currentX, currentY - barHeight - 30);
    currentX += 90;
  });
}