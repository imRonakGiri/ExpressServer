// this funtion is for sidebar
(function listNow(data) {
  data.forEach((e) => {
    $(".side_list").innerHTML += `<li>${e}</li>`;
  });
})(ol);