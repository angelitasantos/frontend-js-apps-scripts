$(document).ready(function () {

    // Google Data
    dropdownPriceList();
    dropdownItemList();
    dropdownPartnerList();
    dropdownSellerList();
    dropdownOrderType();
    dropdownOrderStatus();
    dropdownPaymentType();
    dropdownPaymentStatus();
    dropdownItemType();
    dropdownCategories();
    dropdownSubCategories();
    dropdownGroups();

    // Google Cadastros
    datalistPriceList();
    datalistPriceValues();
    datalistItemList();
    datalistItemValues();
    datalistPartnerList();
    datalistPartnerValues();

});



const GoogleData = "AKfycbwz2fguit7brNx7tZhu1QpDTZtEEoQ4VnQLlvS1kdfvnhtzS_1gxBb_niwvawJFeIqw";
// script file sig-data
// https://script.google.com/macros/s/AKfycbwz2fguit7brNx7tZhu1QpDTZtEEoQ4VnQLlvS1kdfvnhtzS_1gxBb_niwvawJFeIqw/exec

const GoogleCadastros = "AKfycbxV1810EEy4wxnikzwUnLlEJCUebwFo6b4_VfFCTYovVW2eTwjdyrH75mIo7h5AslgxBA";
// script file sig-cadastros
// https://script.google.com/macros/s/AKfycbxV1810EEy4wxnikzwUnLlEJCUebwFo6b4_VfFCTYovVW2eTwjdyrH75mIo7h5AslgxBA/exec



function dropdownPriceList() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownPriceList",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownPriceList").append(Options);
        });
}

function dropdownItemList() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownItemList",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownItemList").append(Options);
        });
}

function dropdownPartnerList() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownPartnerList",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownPartnerList").append(Options);
        });
}

function dropdownSellerList() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownSellerList",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownSellerList").append(Options);
        });
}

function dropdownOrderType() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownOrderType",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownOrderType").append(Options);
        });
}

function dropdownOrderStatus() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownOrderStatus",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $(".order_status").append(Options);
        });
}

function dropdownPaymentType() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownPaymentType",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownPaymentType").append(Options);
        });
}

function dropdownPaymentStatus() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownPaymentStatus",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $(".payment_status").append(Options);
        });
}

function dropdownItemType() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownItemType",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownItemType").append(Options);
        });
}

function dropdownCategories() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownCategories",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownCategories").append(Options);
        });
}

function dropdownSubCategories() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownSubCategories",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownSubCategories").append(Options);
        });
}

function dropdownGroups() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleData + "/exec?page=dropdownGroups",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#dropdownGroups").append(Options);
        });
}



// ------------------------------------------------------------------------------------------------------- //

function datalistPriceList() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleCadastros + "/exec?page=datalistPriceList",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#datalistPriceList").append(Options);
        });
}

function datalistPriceValues() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleCadastros + "/exec?page=datalistPriceValues",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#datalistPriceValues").append(Options);
        });
}

function datalistItemList() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleCadastros + "/exec?page=datalistItemList",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#datalistItemList").append(Options);
        });
}

function datalistItemValues() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleCadastros + "/exec?page=datalistItemValues",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#datalistItemValues").append(Options);
        });
}

function datalistPartnerList() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleCadastros + "/exec?page=datalistPartnerList",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#datalistPartnerList").append(Options);
        });
}

function datalistPartnerValues() {
    $.getJSON("https://script.google.com/macros/s/" + GoogleCadastros + "/exec?page=datalistPartnerValues",
        function (data) {
            var Options = "";
            $.each(data, function (key, value) {
                Options = Options + '<option>' + value + '</option>';
            });
            $("#datalistPartnerValues").append(Options);
        });
}