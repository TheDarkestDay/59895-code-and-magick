'use strict';

function renderStatistics(ctx, names, times) {
  var cloudX = 110,
      cloudY = 20,
      cloudWidth = 420,
      cloudHeight = 270;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(cloudX, cloudY, cloudWidth, cloudHeight);

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(cloudX - 10, cloudY - 10, cloudWidth, cloudHeight);

  ctx.font = '16px "PT Mono"';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура, вы победили!', 230, 40);
  ctx.fillText('Список результатов:', 225, 70);

  var currentX = 130,
      currentY = 260,
      barWidth = 40,
      barMarginRight = 50,
      nameMarginTop = 20,
      scoreMarginBottom = 30;
  names.forEach(function(playerName, idx) {
    ctx.fillStyle = '#000000';
    ctx.fillText(playerName, currentX, currentY);
    var randomOpacity = Math.random();
    ctx.fillStyle = 'rgba(0, 0, 255, ' + randomOpacity + ')';
    if (playerName == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    var playerTime = Math.round(times[idx]);
    var barHeight = playerTime / 100;
    ctx.fillRect(currentX, currentY - barHeight - nameMarginTop, barWidth, barHeight);
    ctx.fillStyle = '#000000';
    ctx.fillText(playerTime, currentX, currentY - barHeight - scoreMarginBottom);
    currentX += barWidth + barMarginRight;
  });
}