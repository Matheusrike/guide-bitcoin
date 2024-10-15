document.getElementById('site-button').addEventListener('mouseover', function(){
    document.getElementById('closed-door').style.display = 'none';
    document.getElementById('opened-door').style.display = 'block';
    document.getElementById('opened-door').classList.add('white-icon');
});

document.getElementById('site-button').addEventListener('mouseout', function(){
    document.getElementById('closed-door').style.display = 'block';
    document.getElementById('opened-door').style.display = 'none';
    document.getElementById('opened-door').classList.remove('white-icon');
});
