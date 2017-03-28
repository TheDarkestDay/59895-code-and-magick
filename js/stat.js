'use strict';

function drawRect(ctx, x, y, width, height, fill) {
  ctx.fillStyle = fill;
  ctx.fillRect(x, y, width, height);
}

function drawText(ctx, text, x, y) {
  ctx.fillStyle = '#000000';
  ctx.fillText(text, x, y);
}

function getRandomColor() {
  var opacity = Math.random();
  return 'rgba(0,0,255,' + opacity + ')';
}

function calculateBarHeight(time, step) {
  return time / step;
}

function getCurrentX(idx, barMargin, barWidth) {
  var paddingStart = 40;
  return paddingStart + (barMargin + barWidth) * (idx + 1);
}

window.renderStatistics = function (ctx, names, times) {
  var cloudX = 110;
  var cloudY = 20;
  var cloudWidth = 420;
  var cloudHeight = 270;

  drawRect(ctx, cloudX, cloudY, cloudWidth, cloudHeight, 'rgba(0,0,0,0.7)');
  drawRect(ctx, cloudX - 10, cloudY - 10, cloudWidth, cloudHeight, '#ffffff');

  ctx.font = '16px "PT Mono"';
  drawText(ctx, 'Ура, вы победили!', 230, 40);
  drawText(ctx, 'Список результатов:', 225, 70);

  var maxBarHeight = 130;
  var currentY = 260;
  var barWidth = 40;
  var barMarginRight = 50;
  var nameMarginTop = 20;
  var scoreMarginBottom = 30;
  var defaultColor = 'rgba(255,0,0,1)';
  var maxTime = Math.max.apply(null, times);
  var step = maxTime / maxBarHeight;

  names.forEach(function (playerName, idx) {
    var barColor = playerName === 'Вы' ? defaultColor : getRandomColor();
    var playerTime = Math.round(times[idx]);
    var barHeight = calculateBarHeight(playerTime, step);
    var currentX = getCurrentX(idx, barMarginRight, barWidth);

    drawText(ctx, playerName, currentX, currentY);
    drawRect(ctx, currentX, currentY - barHeight - nameMarginTop, barWidth, barHeight, barColor);
    drawText(ctx, playerTime, currentX, currentY - barHeight - scoreMarginBottom);
  });
};
