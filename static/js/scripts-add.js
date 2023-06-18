$(document).ready(function () {
    //FormValidation();
    BtnAdd();
    SetCurrentDate();
    FillDataListItems();
    FillDataListPartners();
    FillDataListSellers();
    FillDataListTypePay();
    FillDataListStatus();
    FillDataListTypeOrder();
    FillDataListCategories();
    FillDataListSubCategories();
    FillDataListGroups();
    FillDataListStatusPgto();
    MaxVendas();
});

const AppScriptGoogle = "AKfycbzc5Wq-IyNfYRpX-2YUEGD82z43cDE4RULgX85R417xDlzLehChSlAO5SHoSlhiVQ68vg";
// script file sig-data

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

function FillDataListStatus() {
    $.getJSON("https://script.google.com/macros/s/" + AppScriptGoogle + "/exec?page=dropdownStatus",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $(".status").append(Options);
        });
}

function FillDataListTypeOrder() {
    $.getJSON("https://script.google.com/macros/s/" + AppScriptGoogle + "/exec?page=dropdownTipoPedido",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#ListTypeOrder").append(Options);
        });
}

function FillDataListCategories() {
    $.getJSON("https://script.google.com/macros/s/" + AppScriptGoogle + "/exec?page=dropdownCategorias",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#ListCategories").append(Options);
        });
}

function FillDataListSubCategories() {
    $.getJSON("https://script.google.com/macros/s/" + AppScriptGoogle + "/exec?page=dropdownSubCategorias",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#ListSubCategories").append(Options);
        });
}

function FillDataListGroups() {
    $.getJSON("https://script.google.com/macros/s/" + AppScriptGoogle + "/exec?page=dropdownGrupos",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#ListGroups").append(Options);
        });
}

function FillDataListStatusPgto() {
    $.getJSON("https://script.google.com/macros/s/" + AppScriptGoogle + "/exec?page=dropdownStatusPgto",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $(".status_pgto").append(Options);
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////


const AppScriptGoogleVendas = "AKfycbwi8HR3pNWIQ53RfBjdjRmu_1zqKOG5jc6AwYviJ_ZwcHbseGCeKUHUKWdyVROkJ0S5";
// script file sig-vendas

function MaxVendas() {
    $.getJSON("https://script.google.com/macros/s/" + AppScriptGoogleVendas + "/exec?page=max",
        function (data) {
            $("input[name='inv_no']").val(data);
        });
}

function SearchVendas(pNo = "") {
    var no = $('#inv_no').val();
    if (pNo != "") no = pNo;

    $.getJSON("https://script.google.com/macros/s/" + AppScriptGoogleVendas + "/exec?page=search&no=" + no,
        function (data) {
            if (data == "NOT FOUND") {
                alert('Número Não Encontrado!!!');
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
                        var dt = value[16].substring(0, 10);
                        document.getElementsByName("inv_no")[0].value = value[0];
                        document.getElementsByName("type_order")[0].value = value[1];
                        document.getElementsByName("inv_dt")[0].value = dt;
                        document.getElementsByName("status")[0].value = value[3];
                        document.getElementsByName("partner")[0].value = value[4];
                        document.getElementsByName("typepay")[0].value = value[8];
                        document.getElementsByName("qtyparc")[0].value = value[9];
                        document.getElementsByName("status_pgto")[0].value = value[10];
                        document.getElementsByName("seller")[0].value = value[17];
                        document.getElementsByName("phone")[0].value = value[18];
                        document.getElementsByName("city")[0].value = value[19];
                        document.getElementsByName("address")[0].value = value[20];
                        document.getElementsByName("fgst")[0].value = value[21];
                        document.getElementsByName("fdiscount")[0].value = value[22];
                    }
                    else {
                        if (i > 1) BtnAdd();
                        var dtval = value[28].substring(0, 10);
                        document.getElementsByName("code")[i].value = value[24];
                        document.getElementsByName("item_nm")[i].value = value[25];
                        document.getElementsByName("qty")[i].value = value[26];
                        document.getElementsByName("lot")[i].value = value[27];
                        document.getElementsByName("validate")[i].value = dtval;
                        document.getElementsByName("rate")[i].value = value[29];
                        document.getElementsByName("amt")[i].value = value[30];
                    }
                    i = i + 1;
                });

                GetTotal();
            }
        });

    $('#modalListaVendas').modal('hide');
}

function ShowAllDataVendas() {

    $(document).ready(function () {

        $.getJSON("https://script.google.com/macros/s/" + AppScriptGoogleVendas + "/exec?page=all",
            function (data) {

                var Table = "", Rows = "", Columns = "";

                $.each(data, function (key, value) {

                    var InvNo = "";
                    Columns = "";

                    $.each(value, function (key1, value1) {

                        Columns = Columns + '<td>' + value1 + '</td>';
                        if (InvNo == "") InvNo = value1;

                    });
                    Rows = Rows + '<tr class="text-center" onclick="SearchVendas(' + InvNo + ')">' + Columns + '</tr>';
                });

                $("#TBodyAll").html(Rows);
                $("#modalListaVendas").modal('show');

            });
    });

}

function ShowAllDataVendasGeral() {

    $(document).ready(function () {

        $.getJSON("https://script.google.com/macros/s/" + AppScriptGoogleVendas + "/exec?page=allGeral",
            function (data) {

                var Table = "", Rows = "", Columns = "";

                $.each(data, function (key, value) {

                    var InvNo = "";
                    Columns = "";

                    $.each(value, function (key1, value1) {

                        Columns = Columns + '<td>' + value1 + '</td>';
                        if (InvNo == "") InvNo = value1;

                    });
                    Rows = Rows + '<tr class="text-center">' + Columns + '</tr>';
                });

                $("#TBodyGeral").html(Rows);

            });
    });

}

function ShowAllDataVendasMargem() {

    $(document).ready(function () {

        $.getJSON("https://script.google.com/macros/s/" + AppScriptGoogleVendas + "/exec?page=allMargem",
            function (data) {

                var Table = "", Rows = "", Columns = "";

                $.each(data, function (key, value) {

                    var InvNo = "";
                    Columns = "";

                    $.each(value, function (key1, value1) {

                        Columns = Columns + '<td>' + value1 + '</td>';
                        if (InvNo == "") InvNo = value1;

                    });
                    Rows = Rows + '<tr class="text-center">' + Columns + '</tr>';
                });

                $("#TBodyMargem").html(Rows);

            });
    });

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

