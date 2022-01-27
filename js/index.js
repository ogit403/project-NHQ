$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                console.log('da vao', i)
                $('.navigation a.active').removeClass('active');
                $('.navigation .page-click').eq(i).addClass('active');
            }
    });
}).scroll();

let header = document.getElementById('header');
var bodyRect = document.body.getBoundingClientRect();
var elemRectOffer = document.getElementById('offer').getBoundingClientRect();
var elemRectVariants = document.getElementById('variants').getBoundingClientRect();
var elemRectArticles = document.getElementById('articles').getBoundingClientRect();
var elemRectGoals = document.getElementById('goals').getBoundingClientRect();
var elemRectMore = document.getElementById('more').getBoundingClientRect();

var offsetOffer   = elemRectOffer.top - bodyRect.top;
var offsetVariants   = elemRectVariants.top - bodyRect.top;
var offsetArticles  = elemRectArticles.top - bodyRect.top;
var offsetGoals   = elemRectGoals.top - bodyRect.top;
var offsetMore   = elemRectMore.top - bodyRect.top;

let checkOffer = false;
let checkVariants = false;
let checkArticles = false;
let checkGoals = false;
let checkMore = false;

window.addEventListener('scroll', e => {
    let value = window.scrollY;
    
    if(value === 0) {
        header.style.marginTop = 10 + 'px';
        header.style.backgroundColor = 'transparent';
        header.style.top = 0 + 'px';
    }
    if(value >= 1){
        header.style.marginTop = 0 + 'px';
        header.style.backgroundColor = 'rgba(255,255,255,0.6)';
    }
    if(value >= 200){
        if(value > count) header.style.top = -64 + 'px';
        else if(value < count) header.style.top = 0 + 'px';
    }
})

$(window).scroll(function(){
    let scrollAnimation = $(window).scrollTop();


    if(scrollAnimation > offsetOffer && !checkOffer) {
        checkOffer = true;
        $('.offer-title').addClass('offer-title-animation');
        $('.offer-h2').addClass('offer-h2-animation');
        $('.offer-content').addClass('offer-content-animation');
        $('.offer-child.one').addClass('AnimationChild1');
        $('.offer-child.two').addClass('AnimationChild2');
        $('.offer-child.three').addClass('AnimationChild3');
    }
    if(scrollAnimation > offsetVariants && !checkVariants) {
        checkVariants = true;
        $('.block.variant').addClass('mainBlock-variant-animation');
        $('.variant-title').addClass('FadeIn-variant-animation');
        $('.variant-content').addClass('FadeIn-variant-animation');
        $('.variant-buy').after().addClass('Transfer-variant-animation');
        $('.variant-item.one').addClass('VariantChild1');
        $('.variant-item.two').addClass('VariantChild2');
        $('.variant-item.three').addClass('VariantChild3');
    }
    if(scrollAnimation > offsetArticles && !checkArticles) {
        checkArticles = true;
        $('.article-title').addClass('rotate-article-animation');
        $('.article-h2').addClass('transfer-article-animation');
        $('.article-content').addClass('fadein-article-animation');
        $('.article-images img').after().addClass('transfer2-article-animation');
        $('.article-item .article-content').addClass('fadein2-article-animation');
    }
    if(scrollAnimation > offsetGoals && !checkGoals) {
        checkGoals = true;
        $('.wrapper-project .icon span').addClass('rotate-project-animation');
        $('.wrapper-project .title').addClass('fadein-project-animation');
        $('.wrapper-project .content').addClass('fadein2-project-animation');
    }
    if(scrollAnimation > offsetMore && !checkMore) {
        checkMore = true;
        $('.list-column.one').addClass('AnimationListColumn1');
        $('.list-column.two').addClass('AnimationListColumn2');
        $('.list-column.three').addClass('AnimationListColumn3');
    }
})



$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('.button-to-top').fadeIn();
    } else {
        $('.button-to-top').fadeOut();
    }
});



$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                    $('.navigation-hidden a.active').removeClass('active');
                    $('.navigation-hidden a').eq(i).addClass('active');
            }
    });
  }).scroll();

$("#header-btn").click(e => {
    if(dem % 2 === 0){
        $('.line-1').addClass('aniline-1');
        $('.line-2').addClass('aniline-2');
        $('.line-3').addClass('aniline-3');
        $('.dropdown-header').addClass('dropdown-show aniDrop')
    }
    else {
        $('.line-1.aniline-1').removeClass('aniline-1');
        $('.line-2.aniline-2').removeClass('aniline-2');
        $('.line-3.aniline-3').removeClass('aniline-3');
        $('.dropdown-header.dropdown-show').removeClass('dropdown-show aniDrop')
    }
    dem++;
})

$(document).ready(function(){
    $("a").on('click', function(event) {

        if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
        
            window.location.hash = hash;
        });
        } // End if
    });
});

document.getElementById('toTop').addEventListener('click',() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    return false;
})

document.getElementById('toTop1').addEventListener('click',() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    return false;
})