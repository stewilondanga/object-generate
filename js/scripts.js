var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

$(document).ready(function() {
      let obj = {};
      const addProp = () => {
        let key = $('#key').val();
        let val = $('#value').val();
        obj[key] = val;
        updateObj(obj);
        $('#value').val('');
        $('#key').val('');
        $('#add').prop('disabled', true);
      };
      const deleteProp = () => {
        delete obj[$('select').val()];
        updateObj(obj);
        $('select').val('');
        $('#delete').prop('disabled', true);
      };
      /*        $('#add').click(addProp);
              $('#delete').click(deleteProp);
              $('input').keydown(event => {
                if(event.keyCode == 13) addProp();
              });
              $('input').on('input', () => {
                if($('input').eq(0).val() != '' && $('input').eq(1).val() != '') $('#add').prop('disabled', false);
                else $('#add').prop('disabled', true);
              });
              $('select').change(event => {
                if(event.target.value != '') $('#delete').prop('disabled', false);
                else $('#delete').prop('disabled', true)
              });
            });
            function updateObj(obj) {
              $('#obj').empty();
              let lastKey = '';
              for (let y in obj) {
                lastKey = y;
              }
              $('select').empty();
              $.each(obj, (key, val) => {
                $('<option>')
                  .attr('value', key)
                  .text(key)
                  .appendTo('select');
                $('#obj').append('&nbsp; ' + key + ': \'' + val + '\'');
                if(key != lastKey) $('#obj').append(',');
                $('#obj').append('<br>');
              });
              $('select').val('');
            }
