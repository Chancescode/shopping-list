$(function() {
    $('#js-shopping-list-form').submit(function(event){
      event.preventDefault();
      var textInput = $('#shopping-list-entry').val();
  
      $('.shopping-list').append(
        `<li>
            <span class="shopping-item">${textInput}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`
      );
  
      $('#shopping-list-entry').val('');
    });
  
    $('.shopping-list').on('click', '.shopping-item-toggle', 
    function(e){
      $(this)
        .closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
    });
  
    $('.shopping-list').on('click', '.shopping-item-delete',
    e => {
      $(e.currentTarget)
        .closest('li').remove();
    });
  });
  