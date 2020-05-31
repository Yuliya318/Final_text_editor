'use strict';

$(function () {

    // <!-- ____________________________ main toolbar functions start -->

    // <!-- edit button start -->
    $('.edit-btn').click(() => {
        $('.edit-text').val($('.show-text').html());
        $('.main-bar, .show-text').addClass('hidden');
        $('.admin-bar, .edit-text').removeClass('hidden');
    })
    // <!-- edit button end -->



    // <!-- font styles buttons start -->
    $('.bold').click(() => {
        $('.show-text').toggleClass('boldST')
    })

    $('.italic').click(() => {
        $('.show-text').toggleClass('italicST')
    })

    $('.underline').click(() => {
        $('.show-text').toggleClass('underlineST')
    })

    $('.strikethrough').click(() => {
        $('.show-text').toggleClass('strikethroughST')
    })
    // <!-- font styles buttons end -->



    // <!-- text align buttons start -->
    $('.leftTA').click(() => {
        $('.show-text').css('textAlign', 'left')
    })

    $('.centerTA').click(() => {
        $('.show-text').css('textAlign', 'center')
    })

    $('.rightTA').click(() => {
        $('.show-text').css('textAlign', 'right')
    })
    // <!-- text align buttons end -->



    // <!-- font family, size, color, background buttons start -->

    // font family button style & function
    $('.btnGroupDrop1>option').each(function (ind, elem) {
        let font = $(this).text();
        $(elem).css({
            fontFamily: font,
            fontSize: '18px'
        })
        $(elem).click(() => {
            $('.show-text').css('font-family', font)
        })
    })

    // font size button style & function
    $('.btnGroupDrop2>option').each(function (ind, elem) {
        let size = $(this).text();
        $(elem).css('font-size', size)
        $(elem).click(() => {
            $('.show-text').css('font-size', size)
        })
    })


    // font color and background buttons style & function start 
    let colors = ['#0AA999', '#0A8F83', '#1FB66C', '#1B9B5E', '#2891DD', '#207AB9', '#9B64B7', '#9051AD', '#314860', '#283D4F', '#F5BD06', '#F89B0A', '#ED821B', '#DB5C00', '#F25A39', '#C84525', '#EAEEF0', '#BBC1C4', '#90A2A2', '#7C8A8B', '#000000'];
    let images = ['url("0.jpg")', 'url("1.jpg")', 'url("2.jpg")', 'url("3.jpg")', 'url("4.jpg")', 'url("5.jpg")', 'url("6.jpg")', 'url("7.jpg")', 'url("8.jpg")'];

    // font color modal style & function
    $('.modal-1-body>.text-color').each(function (ind, elem) {
        $(elem).css('background-color', colors[ind]);
        $(elem).click(() => {
            $('.show-text').css('color', colors[ind])
        })
    })

    // background modal-tabs function 
    $('.nav-item').click(function () {
        $('.nav-item>a').removeClass('active');
        $('>a', this).addClass('active')
    })
    $('.nav-item').eq(0).click(() => {
        $('.bg-images, .bg-input').addClass('hidden');
        $('.bg-images').removeClass('d-flex');
        $('.bg-colors').removeClass('hidden');
        $('.bg-colors').addClass('d-flex');
    })
    $('.nav-item').eq(1).click(() => {
        $('.bg-colors, .bg-input').addClass('hidden');
        $('.bg-colors').removeClass('d-flex');
        $('.bg-images').removeClass('hidden');
        $('.bg-images').addClass('d-flex');
    })
    $('.nav-item').eq(2).click(() => {
        $('.bg-colors, .bg-images').addClass('hidden');
        $('.bg-colors, .bg-images').removeClass('d-flex');
        $('.bg-input').removeClass('hidden');
    })

    // background-color modal style & function 
    $('.modal-2-body').append('<div class="bg-colors d-flex flex-wrap justify-content-between"></div>')
    for (let i = 0; i < 21; i++) {
        $('.bg-colors').append('<div class="bg-color"></div>')
    }
    $('.bg-colors>.bg-color').each(function (ind, elem) {
        $(elem).css('background-color', colors[ind]);
        $(elem).click(() => {
            $('.show-text').css('background-image', '');
            $('.show-text').css('background-color', colors[ind])
        })
    })

    // background-image modal style & function 
    $('.modal-2-body').append('<div class="bg-images hidden flex-wrap justify-content-between"></div>')
    for (let i = 0; i < 9; i++) {
        $('.bg-images').append('<div class="bg-image"></div>')
    }
    $('.bg-images>.bg-image').each(function (ind, elem) {
        $(elem).css('background-image', images[ind]);
        $(elem).click(() => {
            $('.show-text').css('background-color', '');
            $('.show-text').css('background-image', images[ind])
        })
    })

    // background-image-upload modal function 
    $('.bg-input').change(() => {
        let urlImage = URL.createObjectURL(event.target.files[0]);
        $('.show-text').css('background-color', '');
        $('.show-text').css('background-image', `url(${urlImage})`)
    })

    // <!-- font family, size, color, background buttons end -->



    // <!-- sign in, sign out modal buttons start -->

    $('.sign-in').click(() => {
        if (/^admin$/.test($('.login').val()) && /^admin$/.test($('.password').val())) {
            $('.sign-in-form').trigger('reset');
            $('.login, .password').removeClass('is-invalid');
            $('.edit-btn').prop('disabled', false);
            $('.sign-in-btn').addClass('hidden');
            $('.sign-out-btn').removeClass('hidden');
            $('.sign-in').attr('data-dismiss', 'modal');
        } else if ($('.login').val() == '' || $('.password').val() == '') {
            $('.check').css('display', 'none');
            $('.login, .password').addClass('is-invalid');
            $('.empty').css('display', 'block');
        } else {
            $('.empty').css('display', 'none');
            $('.login, .password').addClass('is-invalid');
            $('.check').css('display', 'block');
        }
    })

    $('.sign-out').click(() => {
        $('.sign-in-btn').removeClass('hidden');
        $('.sign-out-btn').addClass('hidden');
        $('.edit-btn').prop('disabled', true);
    })

    // <!-- sign in, sign out modal buttons end -->

    // <!-- ____________________________ main toolbar functions end -->



    // <!-- ____________________________ admin toolbar functions start -->


    // <!-- save button  start-->
    $('.save-btn').click(() => {
        $('.show-text').html($('.edit-text').val());
        $('.main-bar, .show-text').removeClass('hidden');
        $('.admin-bar, .edit-text').addClass('hidden');

    })
    // <!-- save button end -->

    
    // table ol-list ul-list joint functions start
    $('.st-bd, .clr-bd, .ol-type-mark, .ul-type-mark').focus(function () {
        $(this).children().eq(0).prop('disabled', true);
    })

    let checkValid = function (cls) {
        if (/^\d{1,2}$/.test($(cls).val())) $(cls).removeClass('is-invalid');
        else $(cls).addClass('is-invalid');
    }
    let checkValidSel = function (cls) {
        if ($(cls).val() == 'choose') $(cls).addClass('is-invalid');
        else $(cls).removeClass('is-invalid');
    }
    let resetForm = function (cls) {
        $(cls).trigger('reset');
        $(`${cls} input, select`).removeClass('is-invalid');
        $(`${cls} .form-FB`).css('display', 'none');
    }
    // table ol-list ul-list joint functions end


    // <!-- table create functions start-->
    $('.create-table').click(() => {
        if (/^\d{1,2}$/.test($('.count-tr').val(), $('.count-td').val(), $('.wd-td').val(), $('.ht-td').val(), $('.wd-bd').val()) && $('.st-bd').val() != 'choose' && $('.clr-bd').val() != 'choose') {
            const countTr = $('.count-tr').val();
            const countTd = $('.count-td').val();
            const tdWidth = $('.wd-td').val();
            const tdHeight = $('.ht-td').val();
            const bdWidth = $('.wd-bd').val();
            const bdType = $('.st-bd').val();
            const bdColor = $('.clr-bd').val();
            $('.edit-text').val($('.edit-text').val() + `\n\n<table style="border-collapse: collapse">`);
            for (let i = 0; i < countTr; i++) {
                $('.edit-text').val($('.edit-text').val() + `\n<tr>`);
                for (let i = 0; i < countTd; i++) {
                    $('.edit-text').val($('.edit-text').val() + `\n\t<td style="width: ${tdWidth}px; height: ${tdHeight}px; border: ${bdWidth}px ${bdType} ${bdColor};">TD</td>`);
                }
                $('.edit-text').val($('.edit-text').val() + '\n</tr>');
            }
            $('.edit-text').val($('.edit-text').val() + `\n</table>\n<br>`);

            $('.table-form input, select').removeClass('is-invalid');
            $('.table-form .form-FB').css('display', 'none');
        } else {
            checkValid('.count-tr');
            checkValid('.count-td');
            checkValid('.wd-td');
            checkValid('.ht-td');
            checkValid('.wd-bd');
            checkValidSel('.st-bd');
            checkValidSel('.clr-bd');
            $('.table-form .form-FB').css('display', 'block');
        }
    })

    $('.reset-table').click(() => resetForm('.table-form'));
    // <!-- table create functions end-->


    // <!-- ol-list create functions start-->
    $('.create-ol-list').click(() => {
        if (/^\d{1,2}$/.test($('.count-ol').val()) && $('.ol-type-mark').val() != 'choose') {
            let countLi = $('.count-ol').val();
            let typeLi = $('.ol-type-mark').val();
            $('.edit-text').val($('.edit-text').val() + `\n\n<ol style="list-style-type: ${typeLi}" class="ml-4">`);
            for (let i = 0; i < countLi; i++) {
                $('.edit-text').val($('.edit-text').val() + `\n\t<li>item ${i + 1}</li>`);
            }
            $('.edit-text').val($('.edit-text').val() + '\n</ol>');

            $('.ol-list-form input, select').removeClass('is-invalid');
            $('.ol-list-form .form-FB').css('display', 'none');

        } else {
            checkValid('.count-ol');
            checkValidSel('.ol-type-mark');
            $('.ol-list-form>.form-FB').css('display', 'block');
        }
    })

    $('.reset-ol-list').click(() => resetForm('.ol-list-form'));
    // <!-- ol-list create functions end-->


    // <!-- ul-list create functions start-->
    $('.create-ul-list').click(() => {
        if (/^\d{1,2}$/.test($('.count-ul').val()) && $('.ul-type-mark').val() != 'choose') {
            let countLi = $('.count-ul').val();
            let typeLi = $('.ul-type-mark').val();
            $('.edit-text').val($('.edit-text').val() + `\n\n<ul style="list-style-type: ${typeLi}" class="ml-4">`);
            for (let i = 0; i < countLi; i++) {
                $('.edit-text').val($('.edit-text').val() + `\n\t<li>item ${i + 1}</li>`);
            }
            $('.edit-text').val($('.edit-text').val() + '\n</ul>');

            $('.ul-list-form input, select').removeClass('is-invalid');
            $('.ul-list-form .form-FB').css('display', 'none');

        } else {
            checkValid('.count-ul');
            checkValidSel('.ul-type-mark');
            $('.ul-list-form>.form-FB').css('display', 'block');
        }
    })

    $('.reset-ul-list').click(() => resetForm('.ul-list-form'));
    // <!-- ul-list create functions end-->


    // <!-- ____________________________ admin toolbar functions end -->


    
})