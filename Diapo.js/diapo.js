var SLideshow =(function() {
    var self = {},
    config = {
    }; 

    setOptions = function() {
        if (typeof options === 'object' &&
            Object.keys(options).length > 0)
        {
            for (var property in options)
            {
                if (config[property] !== undefined)
                {
                    config[property] = options[property];
                }
            }
        }
    }
    self.init = function(opts) {
        options = opts || {};

        setOptions();

        execute();
    }
    execute = function() {
    }

    return self;
})();