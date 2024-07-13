$(document).ready(function () {
  var storedData = localStorage.getItem("todoList");
  if (storedData) {
    var dataList = JSON.parse(storedData);
    $.each(dataList, function (index, item) {
      $(".list").append('<li class="user_list">' + item + "</li>");
    });
  }
  $("#addbtn").click(function () {
    var list_data = $("input").val();
    if (list_data !== "") {
      $(".list").append('<li class="user_list">' + list_data + "</li>");
      $("input").val("");

      var dataList = [];
      $(".list li").each(function () {
        dataList.push($(this).text());
      });
      localStorage.setItem("todoList", JSON.stringify(dataList));
    } else {
      alert("please enter your task");
    }
  });

  $(document).on("click", "li", function () {
    $(this)
      .toggleClass("checked")
      .fadeOut("slow", function () {
        $(this).remove();

        var dataList = [];
        $(".list li").each(function () {
          dataList.push($(this).text());
        });
        localStorage.setItem("todoList", JSON.stringify(dataList));
      });
  });
});
