/**
 * @fileOverview Contains the jMatrixBrowse constants.
 * @version 0.1
 * @author Pulkit Goyal <pulkit110@gmail.com> 
*/

var jMatrixBrowseNs = jMatrixBrowseNs || {};

/**
 * Constants for jMatrixBrowse.
 * 
 * @class Constants
 * @memberOf jMatrixBrowseNs
 */
jMatrixBrowseNs.Constants = {
  // Overflow Types.
  OVERFLOW_LEFT : 1,
  OVERFLOW_RIGHT : 2,
  OVERFLOW_TOP : 3,
  OVERFLOW_BOTTOM : 4,
  OVERFLOW_NONE : -1,
  
  CLASS_BASE : 'jmatrixbrowse',
  N_BACKGROUND_CELLS : 1, 
  
  // Default option values
  INITIAL_WINDOW_POSITION: '0,0',
  INITIAL_WINDOW_SIZE: '10,10',
  DEFAULT_OPTION_SNAP: false,
  
  // Background Loading
  DEFAULT_DATA_RELOAD_STRATEGY: 1,
  RELOAD_HTML_REPLACEMENT: 1,
  RELOAD_CELL_REPLACEMENT: 2,
  RELOAD_CELL_POSITION: 3,
  BACKGROUND_DATA_RELOAD_DELAY: 2000, // milliseconds to wait before sending another request to api

  ZOOM_LEVEL_DIFFERENCE: 2
};
