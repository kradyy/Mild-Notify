/**
 * Plugin Template js settings.
 *
 *  @package WordPress Plugin Template/Settings
 */

jQuery( document ).ready(
	function ($) {

		/***** Colour picker *****/

		$( '.colorpicker' ).hide();
		$( '.colorpicker' ).each(
			function () {
				$( this ).farbtastic( $( this ).closest( '.color-picker' ).find( '.color' ) );
			}
		);

		$( '.color' ).click(
			function () {
				$( this ).closest( '.color-picker' ).find( '.colorpicker' ).fadeIn();
			}
		);

		$( document ).mousedown(
			function () {
				$( '.colorpicker' ).each(
					function () {
						var display = $( this ).css( 'display' );
						if (display == 'block') {
							$( this ).fadeOut();
						}
					}
				);
			}
		);

		/***** Checkbox *****/
		var $notify_checkbox = $('#notify_visible');
		
		if($notify_checkbox.prop("checked") == false) {
			toggleOptionVisibility(false);
		}

		$($notify_checkbox).on('click', function(){
			if($(this).prop("checked") == true){
				toggleOptionVisibility(true);
			}
			else if($(this).prop("checked") == false){
				toggleOptionVisibility(false);
			}
		});

		function toggleOptionVisibility(visibility) {
			if(visibility) {
				$('#mild_notify_settings .form-table tr').css('opacity', '1');
				$('#mild_notify_settings .form-table tr').css('pointer-events', 'all');

				$notify_checkbox.closest('tr').attr('style', '');
			} else {
				$('#mild_notify_settings .form-table tr').css('opacity', '.5');
				$('#mild_notify_settings .form-table tr').css('pointer-events', 'none');

				$notify_checkbox.closest('tr').attr('style', '');
			}
		}
	}
);
