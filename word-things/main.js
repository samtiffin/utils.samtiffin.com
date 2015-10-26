import 'twbs/bootstrap/css/bootstrap.css!';
import 'twbs/bootstrap';

import $ from 'jquery';
import titleCase from 'rvagg/titlecase';

function capitaliseFirst(string, separator) {
    let parts = string.split(separator);

    for (let i = 0; i < parts.length; i++) {
        parts[i] = parts[i].replace(/\w/, (a) => {
            return a.toUpperCase();
        });
    }

    return parts.join(separator);
}

function sentenceCase(string) {
    string = string.toLowerCase();
    string = capitaliseFirst(string, '.');
    string = capitaliseFirst(string, '?');
    string = capitaliseFirst(string, '!');

    return string;
}

function toTitleCase(string) {
    string = string.toLowerCase();

    return titleCase(string);
}

$(function() {
    let $form = $('#input-form');
    let $input = $('#words-in');

    let $sentence = $('#sentence');
    let $title = $('#title');
    let $upper = $('#uppercase');
    let $lower = $('#lowercase');

    function updateValues() {
        let val = $input.val();

        $sentence.val(sentenceCase(val));
        $title.val(toTitleCase(val));
        $upper.val(val.toUpperCase());
        $lower.val(val.toLowerCase());
    }

    $form.on('submit reset', () => {
        $input.val('');
        updateValues();
    });

    $input.on('keyup change', () => {
        updateValues();
    });


});
