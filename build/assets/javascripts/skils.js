var startColor = '#b1353b';
var endColor = '#6699CC';

$('.skillz').each(function(i) {
    var circle = new ProgressBar.Circle(this, {
        color: startColor,
        easing: 'linear',
        strokeWidth: 8,
        duration: 1500,
        text: {
            value: '0'
        }
    });
    
    var value = ($(this).attr('value') / 100);

    circle.animate(value, {
        from: {
            color: startColor
        },
        to: {
            color: endColor
        },
        step: function(state, circle, bar) {
            circle.path.setAttribute('stroke', state.color);
            console.log(circle);
            circle.setText((circle.value() * 100).toFixed(0));
        }
    });
});
