((root, _) ->
  root.sumTo = (n) ->
    _([1..n]).inject (sum, i) ->
      sum + i
    , 0
)(this, _.noConflict())

