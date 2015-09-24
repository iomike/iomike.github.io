  $('#contactForm').on('submit', function() {            
                                    $.post($form.attr('action'), $form.serialize())
                                    .done(function(data) {
                                      // ... Success!
                                    })
                                    .fail(function(jqXHR, textStatus, errorThrown) {
                                      // ... Failure!
                                    });
                                    return false;
                                  });