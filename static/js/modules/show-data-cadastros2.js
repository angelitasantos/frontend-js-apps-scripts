$(document).ready(function () {
    MaxItens();
    MaxParceiro();
});

const GoogleCadastros = "AKfycbx3GSXPa4QNJlzXzzOyCfSlfN9QWeZZnvPFkpS0GlT7_c1KVyfyXOHQHLq4ABfKT3Z8-g";
// script file sig-cadastros
// https://script.google.com/macros/s/AKfycbx3GSXPa4QNJlzXzzOyCfSlfN9QWeZZnvPFkpS0GlT7_c1KVyfyXOHQHLq4ABfKT3Z8-g/exec

function MaxItens() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleCadastros + "/exec?page=maxItem",
        function (data) {
            $("input[name='cod_item']").val(data);
        });
}

function SearchEditItens(pNo = "") {
    var no = $('#id_item').val();
    if (pNo != "") no = pNo;

    $.getJSON("https://script.google.com/macros/s/" + GoogleCadastros + "/exec?page=searchItem&no=" + no,
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
                        document.getElementsByName("id_item")[0].value = value[0];
                        document.getElementsByName("item_nm")[0].value = value[1];
                    }
                    else {
                        if (i > 1) BtnAdd();
                        var dtval = value[28].substring(0, 10);
                        document.getElementsByName("code")[i].value = value[0];
                        document.getElementsByName("validate")[i].value = dtval;
                        document.getElementsByName("rate")[i].value = value[29];
                        document.getElementsByName("amt")[i].value = value[30];
                    }
                    i = i + 1;
                });

                GetTotal();
            }
        });

    $('#modalListaItens').modal('hide');
}

function SearchItens(pNo = "") {
    var no = $('#id_item').val();
    if (pNo != "") no = pNo;

    $.getJSON("https://script.google.com/macros/s/" + GoogleCadastros + "/exec?page=searchItem&no=" + no,
        function (data) {
            if (data == "NOT FOUND") {
                alert('Número Não Encontrado!!!');
            }
            else {
                var record = data.record;

                var i = 0;
                $.each(record, function (key, value) {
                    if (i == 0) {
                        var dt = value[16].substring(0, 10);
                        document.getElementsByName("id_item")[0].value = value[0];
                        document.getElementsByName("item_nm")[0].value = value[1];
                    }
                    i = i + 1;
                });

                GetTotal();
            }
        });

    $('#modalListaItens').modal('hide');
}


function ShowAllDataItens() {

    $(document).ready(function () {

        $.getJSON("https://script.google.com/macros/s/" + GoogleCadastros + "/exec?page=tabPreco",
            function (data) {

                var Table = "", Rows = "", Columns = "";

                $.each(data, function (key, value) {

                    var ID = "";
                    Columns = "";

                    $.each(value, function (key1, value1) {

                        Columns = Columns + '<td>' + value1 + '</td>';
                        if (ID == "") ID = value1;

                    });
                    Rows = Rows + '<tr class="text-center" onclick="SearchItens(' + ID + ')">' + Columns + '</tr>';
                });

                $("#TBodyAllItens").html(Rows);
                $("#modalListaItens").modal('show');

            });
    });

}



/////////////////////////////////////////////////////////////////////////////////////////////////////////

function MaxParceiro() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleCadastros + "/exec?page=maxParceiro",
        function (data) {
            $("input[name='cod_partner']").val(data);
        });
}

function SearchEditParceiros(pNo = "") {
    var no = $('#cod_partner').val();
    if (pNo != "") no = pNo;

    $.getJSON("https://script.google.com/macros/s/" + GoogleCadastros + "/exec?page=searchParceiro&no=" + no,
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
                        document.getElementsByName("id_partner")[0].value = value[0];
                        document.getElementsByName("partner")[0].value = value[1];
                        document.getElementsByName("address")[0].value = value[9];
                        document.getElementsByName("city")[0].value = value[3];
                        document.getElementsByName("phone")[0].value = value[2];
                        document.getElementsByName("email")[0].value = value[4];
                    }

                    i = i + 1;
                });

                GetTotal();
            }
        });

    $('#modalListaParceiros').modal('hide');
}


function SearchParceiros(pNo = "") {
    var no = $('#id_partner').val();
    if (pNo != "") no = pNo;

    $.getJSON("https://script.google.com/macros/s/" + GoogleCadastros + "/exec?page=searchParceiro&no=" + no,
        function (data) {
            if (data == "NOT FOUND") {
                alert('Número Não Encontrado!!!');
            }
            else {
                var record = data.record;

                var i = 0;
                $.each(record, function (key, value) {
                    if (i == 0) {
                        document.getElementsByName("id_partner")[0].value = value[0];
                        document.getElementsByName("partner")[0].value = value[1];
                        document.getElementsByName("address")[0].value = value[9];
                        document.getElementsByName("city")[0].value = value[3];
                        document.getElementsByName("phone")[0].value = value[2];
                        document.getElementsByName("email")[0].value = value[4];
                    }

                    i = i + 1;
                });

                GetTotal();
            }
        });

    $('#modalListaParceiros').modal('hide');
}

function ShowAllDataParceiros() {

    $(document).ready(function () {

        $.getJSON("https://script.google.com/macros/s/" + GoogleCadastros + "/exec?page=allParceiro",
            function (data) {

                var Table = "", Rows = "", Columns = "";

                $.each(data, function (key, value) {

                    var InvNo = "";
                    Columns = "";

                    $.each(value, function (key1, value1) {

                        Columns = Columns + '<td>' + value1 + '</td>';
                        if (InvNo == "") InvNo = value1;

                    });
                    Rows = Rows + '<tr class="text-center" onclick="SearchParceiros(' + InvNo + ')">' + Columns + '</tr>';
                });

                $("#TBodyAllParceiros").html(Rows);
                $("#modalListaParceiros").modal('show');

            });
    });

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

