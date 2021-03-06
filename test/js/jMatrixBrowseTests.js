/**
 * @fileOverview Contains the unit tests for jMatrixBrowse.
 * @version 0.1
 * @author Pulkit Goyal <pulkit110@gmail.com> 
*/

(function (jQuery) {
  jQuery(document).ready( function () {
    var jMatrixBrowseTests = new jqUnit.TestCase("jMatrixBrowse Tests");

    var jMatrixBrowse;

    // 1
    jMatrixBrowseTests.test("Initialization", function () {

      //create a new jMatrixBrowse
      var jMatrixBrowse = jQuery('#my_browser').jMatrixBrowse();

      jqUnit.isVisible("jMatrixBrowse is initially visible", "#my_browser");
      jqUnit.isVisible("jMatrixBrowse container is visible", ".jmb-matrix-container");

      jqUnit.isVisible("jMatrixBrowse row headers are visible", ".jmatrixbrowse-row-header");
      jqUnit.isVisible("jMatrixBrowse col headers are visible", ".jmatrixbrowse-col-header");

      jqUnit.assertEquals("jMatrixBrowse positioned at correct row", 20, jMatrixBrowse.getPosition().row);
      jqUnit.assertEquals("jMatrixBrowse positioned at correct col", 20, jMatrixBrowse.getPosition().col);

    });
    // 2
    jMatrixBrowseTests.test("Basic jMatrixBrowse Dragging Tests", function () {

      //create a new jMatrixBrowse
      var jMatrixBrowse = jQuery.jMatrixBrowse();

      // Drag jMatrixBrowse to 0,0
      jMatrixBrowse.dragTo({
        x: 0,
        y: 0
      });

      var initialCenter = jMatrixBrowse.getCenter();
      jqUnit.assertEquals("jMatrixBrowse centered at correct position after dragging to 0,0", "0,0", jMatrixBrowseCenter.x + ',' + jMatrixBrowseCenter.y);

    });
  });
})(jQuery);