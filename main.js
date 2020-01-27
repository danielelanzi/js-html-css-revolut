$(document).ready(function () {
  // Al passaggio del mouse
  $('.dropdown_mouseover > a').mouseover( function() {
    // Hyperlink
    $('.dropdown_mouseover > a').removeClass('link_active');
    $(this).addClass('link_active');
    // Dropdown menu
    $('.dropdown').removeClass('active');
    $(this).siblings('ul.dropdown').addClass('active');
    // Arrow
    $('.dropdown_mouseover > i').removeClass('arrow_down');
    $(this).siblings('i').addClass('arrow_down');
  });
  // Al click in qualsiasi parte al di fuori del dropdown
  $(window).click(function () {
    // Hyperlink
    $('.dropdown_mouseover > a').removeClass('link_active');
    // Dropdown menu
    $('.dropdown').removeClass('active');
    // Arrow
    $('.dropdown_mouseover > i').removeClass('arrow_down');
  });
});
