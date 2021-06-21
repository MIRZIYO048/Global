$('.ask').on('click', function(event){
    event.preventDefault();
    // $(this).toggleClass('active').next().slideDown(500);
    $('.ask').removeClass('active')
    $('.answer').slideUp(500)
    $(this).toggleClass('active').next().stop(true).slideToggle(500);
})



// function typing(type){
//     let fullText = '',
//     i = 0,
//     innerT = type.html();
//     let inter = setInterval(() => {
//         fullText += innerT[i]
//         i++
//         type.html(fullText)
//         if(innerT.length - 1 < i) {
//             clearInterval(inter)
//         }
//         console.log(setInterval);
//     }, 500);

    
// }


// typing($('h1'))


$('button[data-filter]').click(function (){
    let att = $(this).attr('data-filter')
    if(att == 'primary'){
        $('.js-filter-card').not(`[data-filter=${att}]`).slideUp(500)
    }else if(att == 'success'){
        $('.js-filter-card').not(`[data-filter=${att}]`).slideUp(500)
    } else if(att == 'danger'){
        $('.js-filter-card').not(`[data-filter=${att}]`).slideUp(500)
    }else{
        $('.js-filter-card').slideDown(500)
    }

    $(`.js-filter-card[data-filter=${att}]`).slideDown(500)
})

$('.js-modal-show').click(function (e) {
    e.preventDefault()
    $('.modal').fadeIn(500)
})
$('button.close').click(function () {
    $('.modal').fadeOut(500)
})
$('.modal').click(function (event){
    if(event.target === event.currentTarget){
            $('.modal').fadeOut(500)
    }
})


// $('.read-more').click(function() {
//     $('.text-hidden').toggleClass('hidden') 
//     // $(this).html('Close')
// })

$('.read-more').click(function () {
    $('.text-hidden').toggleClass('hidden')

    if($(this).text() == 'Close'){
        $(this).text('Read more')
    } else{
        $(this).text('Close')
    }
})

$('.nav').css({
    position: 'fixed',
    width: '100%',
    zIndex: 1
})

// $('.modal').click(function () {
//     $('.modal').fadeOut(500)
// })







// class Typing {
//     constructor(t){
//         this.t = document.querySelector(t)
//         this.con = this.t.innerHTML
//         this.fullText = ''
//         this.type()
//     }
//     type(i = 0){
//         this.fullText += this.con[i]
//         i++
//         this.t.innerHTML = this.fullText
//         if(this.con.length > i){
//             setTimeout(() => this.type(i), 300)
//         }
//     }
// }
// new Typing('h1')