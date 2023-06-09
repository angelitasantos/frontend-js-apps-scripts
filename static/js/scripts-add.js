$(document).ready(function () {
    //FormValidation();
    SetCurrentDate();
    BtnAdd();
    FillDataListItems();
    FillDataListPartners();
    FillDataListSellers();
    FillDataListTypePay();
    MaxVendas();
});

const AppScriptGoogle = "AKfycbyn-uyuJjhiF5ZYstQ1Zrf4u5n-xAWMVQ_yUWjwOhKHPEsz7bvwUDHvCjt5BEVkHW3G";

function FillDataListItems() {
    $.getJSON("https://script.google.com/macros/s/" + AppScriptGoogle + "/exec?page=dropdownItens",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#ListItems").append(Options);
        });
}

function FillDataListPartners() {
    $.getJSON("https://script.google.com/macros/s/" + AppScriptGoogle + "/exec?page=dropdownParceiros",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#ListPartners").append(Options);
        });
}

function FillDataListSellers() {
    $.getJSON("https://script.google.com/macros/s/" + AppScriptGoogle + "/exec?page=dropdownVendedores",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#ListSellers").append(Options);
        });
}

function FillDataListTypePay() {
    $.getJSON("https://script.google.com/macros/s/" + AppScriptGoogle + "/exec?page=dropdownTipoPgto",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#ListTypePay").append(Options);
        });
}

function GetPrint() {
    window.print();
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
    document.getElementsByName("amt")[index].value = amt;

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


const AppScriptGoogleVendas = "AKfycbyg-OH6xBQpbD3sEyCN6FZfva6MJlCR9mCrHfsB6x07dsQrEdxxqWZDtEDnWuP8C0cr";

function MaxVendas() {
    $.getJSON("https://script.google.com/macros/s/" + AppScriptGoogleVendas + "/exec?page=max",
        function (data) {
            $("input[name='inv_no']").val(data);
        });
}

function SearchVendas() {
    var no = $('#inv_no').val();
    $.getJSON("https://script.google.com/macros/s/" + AppScriptGoogleVendas + "/exec?page=search&no=" + no,
        function (data) {
            if (data == "NOT FOUND") {
                alert('Number No. Not Found...');
            }
            else {
                var record = data.record;

                var StartRow = data.SR;
                var RowCount = data.CNT;

                $('#IsNew').val('N');
                $('#StartRow').val(StartRow);
                $('#RowCount').val(RowCount);

                var i = 0;
                $.each(record, function (key, value) {
                    if (i == 0) {
                        var dt = value[1].substring(0, 10);
                        document.getElementsByName("inv_dt")[0].value = dt;
                        document.getElementsByName("seller")[0].value = value[2];
                        document.getElementsByName("partner")[0].value = value[3];
                        document.getElementsByName("address")[0].value = value[4];
                        document.getElementsByName("city")[0].value = value[5];
                        document.getElementsByName("phone")[0].value = value[6];
                        document.getElementsByName("fgst")[0].value = value[7];
                        document.getElementsByName("fdiscount")[0].value = value[8];
                        document.getElementsByName("typepay")[0].value = value[9];
                        document.getElementsByName("qtyparc")[0].value = value[10];
                    }
                    else {
                        if (i > 1) BtnAdd();
                        document.getElementsByName("code")[i].value = value[11];
                        document.getElementsByName("item_nm")[i].value = value[12];
                        document.getElementsByName("qty")[i].value = value[13];
                        document.getElementsByName("rate")[i].value = value[14];
                        document.getElementsByName("amt")[i].value = value[15];
                    }
                    i = i + 1;
                });

                GetTotal();
            }
        });
}