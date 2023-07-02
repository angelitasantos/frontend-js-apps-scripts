$(document).ready(function () {
    FillDataListTabPreco();
    FillDataListItems();
    FillDataListPartners();
    FillDataListSellers();
    FillDataListTypeOrder();
    FillDataListStatus();
    FillDataListTypePay();
    FillDataListStatusPay();
    FillDataListTypeItem();
    FillDataListCategories();
    FillDataListSubCategories();
    FillDataListGroups();
});

const GoogleData = "AKfycbw84gD8szLWxpMghb6vINGMmhhIdyC7_NOyBvRUG74dGNDLEboJTSyiUpCM9vQlWwOl";
// script file sig-data
// https://script.google.com/macros/s/AKfycbw84gD8szLWxpMghb6vINGMmhhIdyC7_NOyBvRUG74dGNDLEboJTSyiUpCM9vQlWwOl/exec

const GoogleCadastros = "AKfycbx3GSXPa4QNJlzXzzOyCfSlfN9QWeZZnvPFkpS0GlT7_c1KVyfyXOHQHLq4ABfKT3Z8-g";
// script file sig-cadastros
// https://script.google.com/macros/s/AKfycbx3GSXPa4QNJlzXzzOyCfSlfN9QWeZZnvPFkpS0GlT7_c1KVyfyXOHQHLq4ABfKT3Z8-g/exec


function FillDataListTabPreco() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleCadastros + "/exec?page=tabPreco",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#ListTabPreco").append(Options);
        });
}

function FillDataListItems() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownItens",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#ListItems").append(Options);
        });
}

function FillDataListPartners() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownParceiros",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#ListPartners").append(Options);
        });
}

function FillDataListSellers() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownVendedores",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#ListSellers").append(Options);
        });
}

function FillDataListTypeOrder() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownTipoPedido",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#ListTypeOrder").append(Options);
        });
}

function FillDataListStatus() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownStatusPedido",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $(".status_order").append(Options);
        });
}

function FillDataListTypePay() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownTipoPgto",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#ListTypePay").append(Options);
        });
}

function FillDataListStatusPay() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownStatusPgto",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $(".status_pgto").append(Options);
        });
}

function FillDataListTypeItem() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownTipoItem",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#ListTypeItem").append(Options);
        });
}

function FillDataListCategories() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownCategorias",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#ListCategories").append(Options);
        });
}

function FillDataListSubCategories() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownSubCategorias",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#ListSubCategories").append(Options);
        });
}

function FillDataListGroups() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownGrupos",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#ListGroups").append(Options);
        });
}
