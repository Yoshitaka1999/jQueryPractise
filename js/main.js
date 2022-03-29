'use strict';

$(() => {
    const $input = $('input');
    const $textarea = $('textarea');

    $('button').click(() => {
        $('<li>')
            .text($input.val())
            .appendTo('ul');
            $input
                .val('')
                .focus();
            $('<div>')
                .text($textarea.val())
                .appendTo('li');
                $textarea
                    .val('')
                    .focus();
    })

    $('ul').click(e => {
        if (e.target.nodeName !== 'LI' || !confirm('Are you sure?')) {
            return;
        }
        $(e.target).fadeOut();
    });
})