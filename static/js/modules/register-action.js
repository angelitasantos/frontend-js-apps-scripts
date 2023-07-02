$(document).ready(function () {
    //FormValidation();
    BtnAdd();
    SetCurrentDate();
});

function GetPrint() {
    window.print();
}

// bootstrap validation
function FormValidation() {
    (function () {
        'use strict'
        const forms = document.querySelectorAll('.needs-validation')
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
    })()
}

function SetCurrentDate() {

    const date = new Date();
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();

    if (d < 10) d = '0' + d;
    if (m < 10) m = '0' + m;

    let CurrDate = y + '-' + m + '-' + d;

    $('input[name="inv_dt"]').val(CurrDate);

}

function BtnAdd() {
    var v = $("#TRow").clone().appendTo("#TBody");
    $(v).find("input").val("");
    $(v).removeClass("d-none");
    $(v).find("th").first().html($('#TBody tr').length - 1);
}

function BtnDel(v) {
    $(v).parent().parent().remove();
    GetTotal();
}

function Calc(v) {
    var index = $(v).parent().parent().index();

    var qty = document.getElementsByName("qty")[index].value;
    var rate = document.getElementsByName("rate")[index].value;

    var amt = qty * rate;
    document.getElementsByName("amt")[index].value = parseFloat(amt);

    GetTotal();
}

function GetTotal() {
    var sum = 0;
    var amts = document.getElementsByName("amt");

    for (let index = 0; index < amts.length; index++) {
        var amt = amts[index].value;
        sum = +(sum) + +(amt);
    }
    var valorItensFormatado = parseFloat(sum).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("FTotal").value = valorItensFormatado;

    var gst = document.getElementById("FGST").value;
    var discount = document.getElementById("FDiscount").value;
    var net = +(sum) + +(gst) - +(discount);
    var totalFormatado = parseFloat(net).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("FNet").value = totalFormatado;
}
