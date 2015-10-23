lightgallery = (function() {

    /**
     * Global options.
     */
    var options;

    /**
     * Default options.
     */
    var defaultOptions = {
        showOverlay     : true,
        overlayColor    : '#000',
        overlayOpacity  : 0.85,
        zoomStep        : 0.2,
        animate         : true,
        duration        : 800,
        // resize container both vertically and horizontally at the same time
        resizeSync      : false,
        enableZoom      : true,
        fadeImage       : true,
        fullSize        : false,
        // minimal distance between container and window
        minPadding      : 15,
        imageAttrib     : 'data-image'
    };


    function reset() {
        options = {};
        extend(options, defaultOptions);
    }

    function extend(target, source) {
        for (var i in source) {
            target[i] = source[i];
        }
    }

    reset();

    return {

        /**
         * Initialize library. It restore default if they were set
         * and clears galleries.
         */
        reset: reset,

        /**
         * Set global options.
         * @param {Object} opts - Options to set.
         */
        setOptions: function(opts) {
            extend(options, opts);
        },

        /**
         * Get global options.
         * @return {Object}
         */
        getOptions: function() {
            return options;
        },

        /**
         * Get single option by key.
         * @param {string} key - Option to get
         * @return {mixed|undefined} Returns option or undefined
         * if it is not set.
         */
        option: function(key) {
            return key in options ? options[key] : undefined;
        }
    };


})();
