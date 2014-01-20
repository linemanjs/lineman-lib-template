/* your-lib-name-here - 0.0.1
 * A description about how Lineman helped you build your lib
 * https://your/lib/name/here
 */
(function() {
  (function() {
    var root, _;
    root = this;
    _ = root._ || require('underscore');
    return root.sumTo = function(n) {
      var _i, _results;
      return _((function() {
        _results = [];
        for (var _i = 1; 1 <= n ? _i <= n : _i >= n; 1 <= n ? _i++ : _i--){ _results.push(_i); }
        return _results;
      }).apply(this)).inject(function(sum, i) {
        return sum + i;
      }, 0);
    };
  })();

}).call(this);
